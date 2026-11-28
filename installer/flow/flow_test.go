package flow

import (
	"archive/zip"
	"bytes"
	"futureself/installer/core"
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
	// delete notes and progress but keep the downloaded languages and libraries
	dir, _ = Install(f, o, payload(true), []byte("un"))
	for _, t := range []string{"tools/java/bin/java.exe", "libs/java/x.jar", "mysql/bin/mysqld.exe"} {
		os.MkdirAll(filepath.Dir(filepath.Join(f.UserDataDir(), t)), 0o755)
		os.WriteFile(filepath.Join(f.UserDataDir(), t), []byte("x"), 0o644)
	}
	o.KeepData, o.KeepTools = false, true
	if err := Uninstall(f, o, dir); err != nil {
		t.Fatal(err)
	}
	if _, err := os.Stat(filepath.Join(f.UserDataDir(), "data.json")); err == nil {
		t.Fatal("notes and progress should be gone")
	}
	for _, t2 := range []string{"tools/java/bin/java.exe", "libs/java/x.jar", "mysql/bin/mysqld.exe"} {
		if _, err := os.Stat(filepath.Join(f.UserDataDir(), t2)); err != nil {
			t.Fatal("download deleted despite KeepTools:", t2)
		}
	}
	// reinstall then uninstall and delete everything
	dir, _ = Install(f, o, payload(true), []byte("un"))
	o.KeepData, o.KeepTools = false, false
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

func TestRepairsHalfInstalledFolder(t *testing.T) {
	f := &fake{root: t.TempDir()}
	d := filepath.Join(f.ProgramsDir(), "FutureSelf")
	os.MkdirAll(filepath.Join(d, "resources"), 0o755)
	os.WriteFile(filepath.Join(d, "FutureSelf.exe"), []byte("old"), 0o644) // what a stopped install leaves: no marker
	if _, err := Install(f, Options{Version: "2"}, payload(true), []byte("un")); err != nil {
		t.Fatal("could not repair a half-installed folder:", err)
	}
	if !core.HasMarker(d) {
		t.Fatal("marker missing after repair")
	}
}

func payloadV(v string) []byte {
	var b bytes.Buffer
	w := zip.NewWriter(&b)
	f, _ := w.Create("FutureSelf.exe")
	f.Write([]byte("exe " + v))
	f, _ = w.Create("resources/app/main.js")
	f.Write([]byte("main " + v))
	w.Close()
	return b.Bytes()
}

func read(t *testing.T, p string) string {
	b, err := os.ReadFile(p)
	if err != nil {
		t.Fatal(err)
	}
	return string(b)
}

func TestUpdateSwapsInNewVersion(t *testing.T) {
	f := &fake{root: t.TempDir()}
	o := Options{Version: "1.0.0", NoLaunch: true}
	dir, err := Install(f, o, payloadV("1"), []byte("un"))
	if err != nil {
		t.Fatal(err)
	}
	o.Version = "2.0.0"
	if _, err := Install(f, o, payloadV("2"), []byte("un")); err != nil {
		t.Fatal(err)
	}
	if read(t, filepath.Join(dir, "resources/app/main.js")) != "main 2" || read(t, filepath.Join(dir, ".futureself-install")) != "2.0.0" {
		t.Fatal("new version not in place")
	}
	if olds, _ := filepath.Glob(dir + ".*"); len(olds) != 0 {
		t.Fatal("left-overs remain:", olds)
	}
}

func TestDamagedUpdateKeepsOldApp(t *testing.T) {
	f := &fake{root: t.TempDir()}
	o := Options{Version: "1.0.0", NoLaunch: true}
	dir, _ := Install(f, o, payloadV("1"), []byte("un"))
	if _, err := Install(f, o, []byte("not a zip"), []byte("un")); err == nil {
		t.Fatal("damaged package accepted")
	}
	if read(t, filepath.Join(dir, "FutureSelf.exe")) != "exe 1" {
		t.Fatal("old app was damaged by a failed update")
	}
	if _, err := Install(f, o, payload(false), []byte("un")); err == nil {
		t.Fatal("package without the exe accepted")
	}
	if read(t, filepath.Join(dir, "FutureSelf.exe")) != "exe 1" {
		t.Fatal("old app was damaged by a package without exe")
	}
}

func TestFolderInUseIsUpdatedInPlace(t *testing.T) {
	f := &fake{root: t.TempDir()}
	o := Options{Version: "1.0.0", NoLaunch: true}
	dir, _ := Install(f, o, payloadV("1"), []byte("un"))
	os.WriteFile(filepath.Join(dir, "extra.dll"), []byte("old"), 0o644)
	rename = func(a, b string) error {
		if a == dir {
			return os.ErrPermission // Windows: "the folder is in use"
		}
		return os.Rename(a, b)
	}
	defer func() { rename = os.Rename }()
	o.Version = "2.0.0"
	if _, err := Install(f, o, payloadV("2"), []byte("un")); err != nil {
		t.Fatal(err)
	}
	if read(t, filepath.Join(dir, "resources/app/main.js")) != "main 2" || read(t, filepath.Join(dir, "FutureSelf.exe")) != "exe 2" {
		t.Fatal("files not copied over")
	}
	if _, err := os.Stat(dir + ".new"); err == nil {
		t.Fatal("staging folder left behind")
	}
}

func TestRepairsHalfDeletedFolder(t *testing.T) {
	f := &fake{root: t.TempDir()}
	dir := filepath.Join(f.ProgramsDir(), "FutureSelf")
	// what the old Setup left: marker and exe gone, some files still there
	os.MkdirAll(filepath.Join(dir, "locales"), 0o755)
	os.WriteFile(filepath.Join(dir, "ffmpeg.dll"), []byte("x"), 0o644)
	os.WriteFile(filepath.Join(dir, "resources.pak"), []byte("x"), 0o644)
	if _, err := Install(f, Options{Version: "2.0.0", NoLaunch: true}, payloadV("2"), []byte("un")); err != nil {
		t.Fatal("half-deleted folder not repaired:", err)
	}
	if read(t, filepath.Join(dir, "FutureSelf.exe")) != "exe 2" {
		t.Fatal("not installed")
	}
	// but a folder with someone else's files is still refused
	f2 := &fake{root: t.TempDir()}
	d2 := filepath.Join(f2.ProgramsDir(), "FutureSelf")
	os.MkdirAll(d2, 0o755)
	os.WriteFile(filepath.Join(d2, "my-notes.txt"), []byte("x"), 0o644)
	if _, err := Install(f2, Options{Version: "2.0.0", NoLaunch: true}, payloadV("2"), []byte("un")); err == nil {
		t.Fatal("foreign folder was taken over")
	}
}

func TestCleansOldCopies(t *testing.T) {
	f := &fake{root: t.TempDir()}
	o := Options{Version: "1.0.0", NoLaunch: true}
	dir, _ := Install(f, o, payloadV("1"), []byte("un"))
	stale := dir + ".old-123"
	os.MkdirAll(stale, 0o755)
	core.WriteMarker(stale, "0.9")
	if _, err := Install(f, o, payloadV("2"), []byte("un")); err != nil {
		t.Fatal(err)
	}
	if _, err := os.Stat(stale); err == nil {
		t.Fatal("old copy from an earlier update not removed")
	}
}
