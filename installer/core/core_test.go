package core

import (
	"archive/zip"
	"bytes"
	"os"
	"path/filepath"
	"testing"
)

func mkzip(t *testing.T, files map[string]string) []byte {
	var b bytes.Buffer
	w := zip.NewWriter(&b)
	for n, c := range files {
		f, _ := w.Create(n)
		f.Write([]byte(c))
	}
	w.Close()
	return b.Bytes()
}

func TestExtract(t *testing.T) {
	d := filepath.Join(t.TempDir(), "FutureSelf")
	z := mkzip(t, map[string]string{"FutureSelf.exe": "x", "Content/a/b.json": "{}"})
	n := 0
	if err := ExtractZip(z, d, func(a, b int) { n = a }); err != nil {
		t.Fatal(err)
	}
	if n != 2 {
		t.Fatal("progress", n)
	}
	if b, _ := os.ReadFile(filepath.Join(d, "Content", "a", "b.json")); string(b) != "{}" {
		t.Fatal("content")
	}
}

func TestZipSlip(t *testing.T) {
	d := filepath.Join(t.TempDir(), "FutureSelf")
	z := mkzip(t, map[string]string{"../evil.txt": "x"})
	if err := ExtractZip(z, d, nil); err == nil {
		t.Fatal("expected refusal")
	}
	if _, err := os.Stat(filepath.Join(filepath.Dir(d), "evil.txt")); err == nil {
		t.Fatal("file escaped")
	}
}

func TestBadZip(t *testing.T) {
	if err := ExtractZip([]byte("nope"), t.TempDir(), nil); err == nil {
		t.Fatal("expected error")
	}
}

func TestSafeDir(t *testing.T) {
	for _, bad := range []string{"/", "C:\\", "/FutureSelf", "/home", "/tmp/other"} {
		if SafeInstallDir(bad) == nil {
			t.Fatal("accepted", bad)
		}
	}
	if SafeInstallDir("/home/u/AppData/Local/Programs/FutureSelf") != nil {
		t.Fatal("rejected good")
	}
}

func TestMarkerAndRemove(t *testing.T) {
	d := filepath.Join(t.TempDir(), "x", "y", "FutureSelf")
	os.MkdirAll(d, 0o755)
	if HasMarker(d) {
		t.Fatal("marker before")
	}
	WriteMarker(d, "1.0.0")
	if !HasMarker(d) {
		t.Fatal("no marker")
	}
	if err := RemoveInstallDir(d); err != nil {
		t.Fatal(err)
	}
	if _, err := os.Stat(d); err == nil {
		t.Fatal("still there")
	}
}
