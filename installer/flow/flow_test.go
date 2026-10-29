package flow

import (
	"archive/zip"
	"bytes"
	"os"
	"path/filepath"
	"testing"
)

type fake struct {
	root  string
	calls []string
}

func (f *fake) ProgramsDir() string { return filepath.Join(f.root, "Programs") }
func (f *fake) UserDataDir() string { return filepath.Join(f.root, "Roaming", "FutureSelf") }
func (f *fake) KillApp()            { f.calls = append(f.calls, "kill") }
func (f *fake) Shortcut(l, t, w, d string) error {
	f.calls = append(f.calls, "lnk:"+filepath.Base(l))
	return os.WriteFile(l, []byte(t), 0o644)
}
func (f *fake) StartMenuLnk() string { return filepath.Join(f.root, "start.lnk") }
func (f *fake) DesktopLnk() string   { return filepath.Join(f.root, "desk.lnk") }
func (f *fake) RegisterUninstall(d, v, u string, s int) error {
	f.calls = append(f.calls, "reg:"+v)
	return nil
}
func (f *fake) UnregisterUninstall() { f.calls = append(f.calls, "unreg") }
func (f *fake) RemoveAutostart()     { f.calls = append(f.calls, "noauto") }
func (f *fake) Launch(e string) error {
	f.calls = append(f.calls, "launch")
	return nil
}

func payload(withExe bool) []byte {
	var b bytes.Buffer
	w := zip.NewWriter(&b)
	if withExe {
		f, _ := w.Create("FutureSelf.exe")
		f.Write([]byte("exe"))
	}
	f, _ := w.Create("Content/x.json")
	f.Write([]byte("{}"))
	w.Close()
	return b.Bytes()
}

func TestInstallUpdateUninstall(t *testing.T) {
	f := &fake{root: t.TempDir()}
	os.MkdirAll(f.UserDataDir(), 0o755)
	os.WriteFile(filepath.Join(f.UserDataDir(), "data.json"), []byte("mine"), 0o644)
	o := Options{Version: "1.0.0"}
	dir, err := Install(f, o, payload(true), []byte("un"))
	if err != nil {
		t.Fatal(err)
	}
	for _, p := range []string{"FutureSelf.exe", "Uninstall.exe", ".futureself-install", "Content/x.json"} {
		if _, err := os.Stat(filepath.Join(dir, filepath.FromSlash(p))); err != nil {
			t.Fatal("missing", p)
		}
	}
	if _, err := os.Stat(f.DesktopLnk()); err != nil {
		t.Fatal("no desktop shortcut")
	}
	// update over the old version keeps user data
	if _, err := Install(f, o, payload(true), []byte("un")); err != nil {
		t.Fatal("update", err)
	}
	if _, err := os.Stat(filepath.Join(f.UserDataDir(), "data.json")); err != nil {
		t.Fatal("update lost data")
	}
	// keep data on uninstall
	o.KeepData = true
	if err := Uninstall(f, o, dir); err != nil {
		t.Fatal(err)
	}
	if _, err := os.Stat(dir); err == nil {
		t.Fatal("dir remains")
	}
	if _, err := os.Stat(f.StartMenuLnk()); err == nil {
		t.Fatal("shortcut remains")
	}
	if _, err := os.Stat(filepath.Join(f.UserDataDir(), "data.json")); err != nil {
		t.Fatal("data deleted despite KeepData")
	}
	// reinstall then uninstall and delete data
	dir, _ = Install(f, o, payload(true), []byte("un"))
	o.KeepData = false
	if err := Uninstall(f, o, dir); err != nil {
		t.Fatal(err)
	}
	if _, err := os.Stat(f.UserDataDir()); err == nil {
		t.Fatal("data should be gone")
	}
}

func TestRefusesForeignFolder(t *testing.T) {
	f := &fake{root: t.TempDir()}
	d := filepath.Join(f.ProgramsDir(), "FutureSelf")
	os.MkdirAll(d, 0o755)
	os.WriteFile(filepath.Join(d, "important.txt"), []byte("x"), 0o644)
	if _, err := Install(f, Options{Version: "1"}, payload(true), nil); err == nil {
		t.Fatal("overwrote a foreign folder")
	}
	if _, err := os.Stat(filepath.Join(d, "important.txt")); err != nil {
		t.Fatal("foreign file gone")
	}
	if err := Uninstall(f, Options{}, d); err == nil {
		t.Fatal("uninstalled a foreign folder")
	}
}

func TestMissingExe(t *testing.T) {
	f := &fake{root: t.TempDir()}
	if _, err := Install(f, Options{Version: "1"}, payload(false), nil); err == nil {
		t.Fatal("accepted package without exe")
	}
}
