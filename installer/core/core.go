// Package core holds the install / uninstall steps that do not depend on Windows, so they can be tested anywhere.
package core

import (
	"archive/zip"
	"bytes"
	"errors"
	"fmt"
	"io"
	"os"
	"path/filepath"
	"strings"
)

const AppName = "FutureSelf"
const Publisher = "SpinDigital"

// ExtractZip unpacks a zip held in memory into dest. Paths that try to escape dest are refused.
// progress is called with (files done, files total).
func ExtractZip(data []byte, dest string, progress func(done, total int)) error {
	zr, err := zip.NewReader(bytes.NewReader(data), int64(len(data)))
	if err != nil {
		return fmt.Errorf("installer package is damaged: %w", err)
	}
	if err := os.MkdirAll(dest, 0o755); err != nil {
		return err
	}
	absDest, err := filepath.Abs(dest)
	if err != nil {
		return err
	}
	total := len(zr.File)
	for i, f := range zr.File {
		target := filepath.Join(absDest, filepath.FromSlash(f.Name))
		if target != absDest && !strings.HasPrefix(target, absDest+string(os.PathSeparator)) {
			return errors.New("refused unsafe path in package: " + f.Name)
		}
		if f.FileInfo().IsDir() {
			if err := os.MkdirAll(target, 0o755); err != nil {
				return err
			}
		} else {
			if err := os.MkdirAll(filepath.Dir(target), 0o755); err != nil {
				return err
			}
			if err := writeEntry(f, target); err != nil {
				return err
			}
		}
		if progress != nil {
			progress(i+1, total)
		}
	}
	return nil
}

func writeEntry(f *zip.File, target string) error {
	rc, err := f.Open()
	if err != nil {
		return err
	}
	defer rc.Close()
	out, err := os.OpenFile(target, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0o755)
	if err != nil {
		return err
	}
	if _, err := io.Copy(out, rc); err != nil {
		out.Close()
		return err
	}
	return out.Close()
}

// SafeInstallDir refuses folders that would be dangerous to delete (drive roots, home, system folders).
func SafeInstallDir(dir string) error {
	clean := filepath.Clean(dir)
	if filepath.Base(clean) != AppName {
		return errors.New("install folder must be named " + AppName)
	}
	if filepath.Dir(clean) == clean || filepath.Dir(filepath.Dir(clean)) == filepath.Dir(clean) {
		return errors.New("install folder is too close to the drive root")
	}
	return nil
}

// RemoveInstallDir deletes the application folder (only after SafeInstallDir passes).
func RemoveInstallDir(dir string) error {
	if err := SafeInstallDir(dir); err != nil {
		return err
	}
	return os.RemoveAll(dir)
}

// Marker file proves a folder was made by this installer, so an uninstall never deletes someone else's folder.
const Marker = ".futureself-install"

func WriteMarker(dir, version string) error {
	return os.WriteFile(filepath.Join(dir, Marker), []byte(version), 0o644)
}

func HasMarker(dir string) bool {
	_, err := os.Stat(filepath.Join(dir, Marker))
	return err == nil
}
