// Package flow is the install and uninstall sequence. Windows-only actions go through the Platform interface.
package flow

import (
	"fmt"
	"os"
	"path/filepath"
	"time"

	"futureself/installer/core"
)

type Platform interface {
	ProgramsDir() string // where the app goes, e.g. %LOCALAPPDATA%\Programs
	UserDataDir() string // %APPDATA%\FutureSelf
	KillApp()
	Shortcut(lnk, target, workDir, desc string) error
	StartMenuLnk() string
	DesktopLnk() string
	RegisterUninstall(installDir, version, uninstallExe string, sizeKB int) error
	UnregisterUninstall()
	RemoveAutostart()
	Launch(exe string) error
}

type Options struct {
	Version   string
	NoDesktop bool
	NoLaunch  bool
	KeepData  bool // uninstall: keep the student's notes and progress
	Say       func(string)
}

func (o Options) say(f string, a ...any) {
	if o.Say != nil {
		o.Say(fmt.Sprintf(f, a...))
	}
}

// Install unpacks the app, adds shortcuts and the Windows "Apps" entry. It returns the install folder.
func Install(p Platform, o Options, payload []byte, uninstallExe []byte) (string, error) {
	dir := filepath.Join(p.ProgramsDir(), core.AppName)
	if err := core.SafeInstallDir(dir); err != nil {
		return "", err
	}
	if _, err := os.Stat(dir); err == nil {
		o.say("Closing the old version...")
		p.KillApp()
		if !core.Ours(dir) {
			return "", fmt.Errorf("%s already exists and was not made by this installer; not touching it", dir)
		}
		var rerr error
		for i := 0; i < 15; i++ { // the app may need a few seconds to let go of its files
			if rerr = core.RemoveInstallDir(dir); rerr == nil {
				break
			}
			p.KillApp()
			time.Sleep(time.Second)
		}
		if err := rerr; err != nil {
			return "", fmt.Errorf("could not replace the old version (is FutureSelf still open?): %w", err)
		}
	}
	if err := os.MkdirAll(dir, 0o755); err == nil { // mark the folder first, so a stopped install can always be repaired by running Setup again
		core.WriteMarker(dir, o.Version)
	}
	o.say("Copying files...")
	last := -1
	err := core.ExtractZip(payload, dir, func(done, total int) {
		pct := done * 100 / total
		if pct/10 != last/10 {
			o.say("  %d%%", pct)
		}
		last = pct
	})
	if err != nil {
		return "", err
	}
	exe := filepath.Join(dir, core.AppName+".exe")
	if _, err := os.Stat(exe); err != nil {
		return "", fmt.Errorf("package is missing %s.exe", core.AppName)
	}
	un := filepath.Join(dir, "Uninstall.exe")
	if err := os.WriteFile(un, uninstallExe, 0o755); err != nil {
		return "", err
	}
	if err := core.WriteMarker(dir, o.Version); err != nil {
		return "", err
	}
	o.say("Creating shortcuts...")
	if err := p.Shortcut(p.StartMenuLnk(), exe, dir, "FutureSelf study goals"); err != nil {
		o.say("  (Start menu shortcut failed: %v)", err)
	}
	if !o.NoDesktop {
		if err := p.Shortcut(p.DesktopLnk(), exe, dir, "FutureSelf study goals"); err != nil {
			o.say("  (Desktop shortcut failed: %v)", err)
		}
	}
	if err := p.RegisterUninstall(dir, o.Version, un, dirSizeKB(dir)); err != nil {
		o.say("  (Could not add to Windows Apps list: %v)", err)
	}
	if !o.NoLaunch {
		o.say("Starting FutureSelf...")
		if err := p.Launch(exe); err != nil {
			o.say("  (Could not start it: %v. Open it from the Start menu.)", err)
		}
	}
	return dir, nil
}

// Uninstall removes the app, shortcuts and registry entry. The student's data stays unless KeepData is false.
func Uninstall(p Platform, o Options, dir string) error {
	if !core.Ours(dir) {
		return fmt.Errorf("%s is not a FutureSelf install folder", dir)
	}
	o.say("Closing FutureSelf...")
	p.KillApp()
	p.RemoveAutostart()
	os.Remove(p.StartMenuLnk())
	os.Remove(p.DesktopLnk())
	p.UnregisterUninstall()
	o.say("Removing files...")
	if err := core.RemoveInstallDir(dir); err != nil {
		return err
	}
	if !o.KeepData {
		o.say("Removing your saved data...")
		if d := p.UserDataDir(); filepath.Base(d) == core.AppName {
			os.RemoveAll(d)
		}
	}
	return nil
}

func dirSizeKB(dir string) int {
	var n int64
	filepath.Walk(dir, func(_ string, i os.FileInfo, err error) error {
		if err == nil && !i.IsDir() {
			n += i.Size()
		}
		return nil
	})
	return int(n / 1024)
}
