//go:build !windows

package plat

import (
	"fmt"
	"os"
	"path/filepath"
)

// Dry-run platform used on Linux/macOS so the whole install flow can be tested. Everything lands in $FS_DRYRUN_ROOT.
type Win struct{ root string }

func New() *Win {
	r := os.Getenv("FS_DRYRUN_ROOT")
	if r == "" {
		r = filepath.Join(os.TempDir(), "fs-dryrun")
	}
	return &Win{root: r}
}

func (w Win) ProgramsDir() string  { return filepath.Join(w.root, "Programs") }
func (w Win) UserDataDir() string  { return filepath.Join(w.root, "Roaming", "FutureSelf") }
func (Win) KillApp()               { fmt.Println("[dry] kill FutureSelf.exe") }
func (w Win) StartMenuLnk() string { return filepath.Join(w.root, "StartMenu", "FutureSelf.lnk") }
func (w Win) DesktopLnk() string   { return filepath.Join(w.root, "Desktop", "FutureSelf.lnk") }
func (Win) Shortcut(lnk, target, workDir, desc string) error {
	os.MkdirAll(filepath.Dir(lnk), 0o755)
	return os.WriteFile(lnk, []byte(target), 0o644)
}
func (Win) RegisterUninstall(dir, version, uninstallExe string, sizeKB int) error {
	fmt.Println("[dry] register uninstall", version, uninstallExe, sizeKB, "KB")
	return nil
}
func (Win) UnregisterUninstall()    { fmt.Println("[dry] unregister uninstall") }
func (Win) RemoveAutostart()        { fmt.Println("[dry] remove autostart") }
func (Win) Launch(exe string) error { fmt.Println("[dry] launch", exe); return nil }

func Message(title, text string) { fmt.Println("[dry] message:", title, "-", text) }
func Error(title, text string)   { fmt.Println("[dry] error:", title, "-", text) }
func Ask(title, text string) bool {
	fmt.Println("[dry] ask:", title, "-", text)
	return os.Getenv("FS_DRYRUN_YES") == "1"
}
func RemoveSelfLater(path string) { fmt.Println("[dry] remove later", path) }
