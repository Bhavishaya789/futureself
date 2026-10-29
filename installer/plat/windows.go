//go:build windows

package plat

import (
	"encoding/base64"
	"fmt"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
	"syscall"
	"unicode/utf16"
	"unsafe"
)

type Win struct{}

func New() *Win { return &Win{} }

const createNoWindow = 0x08000000
const detached = 0x00000008
const newGroup = 0x00000200

func hidden(c *exec.Cmd) *exec.Cmd {
	c.SysProcAttr = &syscall.SysProcAttr{HideWindow: true, CreationFlags: createNoWindow}
	return c
}

// runPS runs a PowerShell script. The script is sent encoded, so quotes and spaces in paths cannot break it.
func runPS(script string) (string, error) {
	u := utf16.Encode([]rune(script))
	b := make([]byte, 0, len(u)*2)
	for _, r := range u {
		b = append(b, byte(r), byte(r>>8))
	}
	c := hidden(exec.Command("powershell.exe", "-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", base64.StdEncoding.EncodeToString(b)))
	out, err := c.CombinedOutput()
	return strings.TrimSpace(string(out)), err
}

func q(s string) string { return "'" + strings.ReplaceAll(s, "'", "''") + "'" }

func (Win) ProgramsDir() string { return filepath.Join(os.Getenv("LOCALAPPDATA"), "Programs") }
func (Win) UserDataDir() string { return filepath.Join(os.Getenv("APPDATA"), "FutureSelf") }

func (Win) KillApp() {
	hidden(exec.Command("taskkill.exe", "/F", "/T", "/IM", "FutureSelf.exe")).Run()
}

func (Win) StartMenuLnk() string {
	return filepath.Join(os.Getenv("APPDATA"), "Microsoft", "Windows", "Start Menu", "Programs", "FutureSelf.lnk")
}

func (Win) DesktopLnk() string {
	if out, err := runPS("[Environment]::GetFolderPath('Desktop')"); err == nil && out != "" && !strings.Contains(out, "\n") {
		return filepath.Join(out, "FutureSelf.lnk")
	}
	return filepath.Join(os.Getenv("USERPROFILE"), "Desktop", "FutureSelf.lnk")
}

func (Win) Shortcut(lnk, target, workDir, desc string) error {
	os.MkdirAll(filepath.Dir(lnk), 0o755)
	s := fmt.Sprintf("$s=(New-Object -ComObject WScript.Shell).CreateShortcut(%s); $s.TargetPath=%s; $s.WorkingDirectory=%s; $s.Description=%s; $s.IconLocation=%s; $s.Save()",
		q(lnk), q(target), q(workDir), q(desc), q(target+",0"))
	_, err := runPS(s)
	return err
}

func (Win) RegisterUninstall(dir, version, uninstallExe string, sizeKB int) error {
	k := `HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\FutureSelf`
	s := fmt.Sprintf(`$k=%s; New-Item -Path $k -Force | Out-Null;
Set-ItemProperty -Path $k -Name DisplayName -Value 'FutureSelf';
Set-ItemProperty -Path $k -Name DisplayVersion -Value %s;
Set-ItemProperty -Path $k -Name Publisher -Value 'SpinDigital';
Set-ItemProperty -Path $k -Name InstallLocation -Value %s;
Set-ItemProperty -Path $k -Name DisplayIcon -Value %s;
Set-ItemProperty -Path $k -Name UninstallString -Value %s;
Set-ItemProperty -Path $k -Name NoModify -Value 1 -Type DWord;
Set-ItemProperty -Path $k -Name NoRepair -Value 1 -Type DWord;
Set-ItemProperty -Path $k -Name EstimatedSize -Value %d -Type DWord`,
		q(k), q(version), q(dir), q(filepath.Join(dir, "FutureSelf.exe")), q(`"`+uninstallExe+`"`), sizeKB)
	_, err := runPS(s)
	return err
}

func (Win) UnregisterUninstall() {
	runPS(`Remove-Item -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\FutureSelf' -Recurse -Force -ErrorAction SilentlyContinue`)
}

func (Win) RemoveAutostart() {
	runPS(`Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Run' -Name 'FutureSelf','electron.app.FutureSelf' -ErrorAction SilentlyContinue`)
}

func (Win) Launch(exe string) error {
	c := exec.Command(exe)
	c.Dir = filepath.Dir(exe)
	c.SysProcAttr = &syscall.SysProcAttr{CreationFlags: detached | newGroup}
	return c.Start()
}

var user32 = syscall.NewLazyDLL("user32.dll")
var msgBox = user32.NewProc("MessageBoxW")

func box(title, text string, flags uintptr) int {
	t, _ := syscall.UTF16PtrFromString(text)
	c, _ := syscall.UTF16PtrFromString(title)
	r, _, _ := msgBox.Call(0, uintptr(unsafe.Pointer(t)), uintptr(unsafe.Pointer(c)), flags)
	return int(r)
}

// Message shows an OK box.
func Message(title, text string) { box(title, text, 0x40) }

// Error shows an error box.
func Error(title, text string) { box(title, text, 0x10) }

// Ask shows a Yes / No box and returns true for Yes (No is the default button).
func Ask(title, text string) bool { return box(title, text, 0x4|0x20|0x100) == 6 }

// RemoveSelfLater deletes a file after this program has exited.
func RemoveSelfLater(path string) {
	c := hidden(exec.Command("cmd.exe", "/C", "ping 127.0.0.1 -n 3 >nul & del /F /Q \""+path+"\""))
	c.SysProcAttr.CreationFlags |= detached
	c.Start()
}
