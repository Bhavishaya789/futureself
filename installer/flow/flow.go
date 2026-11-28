// Package flow is the install and uninstall sequence. Windows-only actions go through the Platform interface.
package flow

import (
	"fmt"
	"io"
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
	KeepTools bool // uninstall with KeepData false: still keep the downloaded languages, libraries and MySQL
	Say       func(string)
}

func (o Options) say(f string, a ...any) {
	if o.Say != nil {
		o.Say(fmt.Sprintf(f, a...))
	}
}

// rename is os.Rename (tests replace it to act like a folder Windows will not let go of)
var rename = os.Rename

// Install unpacks the app, adds shortcuts and the Windows "Apps" entry. It returns the install folder.
// The new version is unpacked NEXT TO the old one first, then swapped in, so the old app is never deleted
// before the new one is complete. If Windows will not let the old folder be moved (something still uses it),
// the new files are copied over the old ones instead.
func Install(p Platform, o Options, payload []byte, uninstallExe []byte) (string, error) {
	dir := filepath.Join(p.ProgramsDir(), core.AppName)
	if err := core.SafeInstallDir(dir); err != nil {
		return "", err
	}
	exists := false
	if _, err := os.Stat(dir); err == nil {
		exists = true
		if !core.Ours(dir) {
			return "", fmt.Errorf("%s already exists and was not made by this installer; not touching it", dir)
		}
	}
	os.MkdirAll(p.ProgramsDir(), 0o755)
	stage := dir + ".new"
	os.RemoveAll(stage)
	o.say("Unpacking the new version...")
	last := -1
	if err := core.ExtractZip(payload, stage, func(done, total int) {
		pct := done * 100 / total
		if pct/10 != last/10 {
			o.say("  %d%%", pct)
		}
		last = pct
	}); err != nil {
		os.RemoveAll(stage)
		return "", err
	}
	if _, err := os.Stat(filepath.Join(stage, core.AppName+".exe")); err != nil {
		os.RemoveAll(stage)
		return "", fmt.Errorf("package is missing %s.exe", core.AppName)
	}
	if err := os.WriteFile(filepath.Join(stage, "Uninstall.exe"), uninstallExe, 0o755); err != nil {
		os.RemoveAll(stage)
		return "", err
	}
	if err := core.WriteMarker(stage, o.Version); err != nil {
		os.RemoveAll(stage)
		return "", err
	}
	if !exists {
		if err := os.Rename(stage, dir); err != nil {
			os.RemoveAll(stage)
			return "", err
		}
	} else {
		o.say("Closing the old version...")
		old := fmt.Sprintf("%s.old-%d", dir, time.Now().UnixNano())
		moved := false
		for i := 0; i < 20 && !moved; i++ { // the app may need a few seconds to let go of its files
			p.KillApp()
			if i > 0 {
				time.Sleep(time.Second)
			}
			moved = rename(dir, old) == nil
		}
		if moved {
			if err := os.Rename(stage, dir); err != nil {
				os.Rename(old, dir) // put the old version back
				os.RemoveAll(stage)
				return "", fmt.Errorf("could not put the new version in place: %w", err)
			}
		} else {
			o.say("The old folder is still in use: copying the new files over it...")
			if err := copyOver(stage, dir, p); err != nil {
				return "", fmt.Errorf("could not replace the old version (is something from FutureSelf still running?): %w", err)
			}
			os.RemoveAll(stage)
		}
	}
	cleanOld(dir)
	exe := filepath.Join(dir, core.AppName+".exe")
	un := filepath.Join(dir, "Uninstall.exe")
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

// ToolFolders are the downloads in the data folder: languages (tools), libraries (libs) and MySQL.
var ToolFolders = map[string]bool{"tools": true, "libs": true, "mysql": true}

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
		if d := p.UserDataDir(); filepath.Base(d) == core.AppName {
			if o.KeepTools {
				o.say("Removing your saved data (keeping the downloaded languages and libraries)...")
				ents, _ := os.ReadDir(d)
				for _, e := range ents {
					if !ToolFolders[e.Name()] {
						os.RemoveAll(filepath.Join(d, e.Name()))
					}
				}
			} else {
				o.say("Removing your saved data and downloads...")
				os.RemoveAll(d)
			}
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

// copyOver copies every file of the new version over the old folder (each file retried while Windows holds it).
func copyOver(src, dst string, p Platform) error {
	return filepath.Walk(src, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		rel, _ := filepath.Rel(src, path)
		target := filepath.Join(dst, rel)
		if info.IsDir() {
			return os.MkdirAll(target, 0o755)
		}
		var last error
		for i := 0; i < 10; i++ {
			if last = copyFile(path, target, info.Mode()); last == nil {
				return nil
			}
			p.KillApp()
			time.Sleep(time.Second)
		}
		return last
	})
}

func copyFile(src, dst string, mode os.FileMode) error {
	in, err := os.Open(src)
	if err != nil {
		return err
	}
	defer in.Close()
	tmp := dst + ".fsnew"
	out, err := os.OpenFile(tmp, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, mode|0o200)
	if err != nil {
		return err
	}
	if _, err := io.Copy(out, in); err != nil {
		out.Close()
		os.Remove(tmp)
		return err
	}
	if err := out.Close(); err != nil {
		os.Remove(tmp)
		return err
	}
	if err := os.Rename(tmp, dst); err != nil { // replaces the old file (fails only while it is in use)
		os.Remove(tmp)
		return err
	}
	return nil
}

// cleanOld removes old versions moved aside by earlier updates (best effort: one still in use is left for next time).
func cleanOld(dir string) {
	olds, _ := filepath.Glob(dir + ".old-*")
	for _, d := range olds {
		if core.Ours(d) {
			os.RemoveAll(d)
		}
	}
}
