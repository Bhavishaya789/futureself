package main

import (
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"

	"futureself/installer/flow"
	"futureself/installer/plat"
)

func copyFile(src, dst string) error {
	in, err := os.Open(src)
	if err != nil {
		return err
	}
	defer in.Close()
	out, err := os.OpenFile(dst, os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0o755)
	if err != nil {
		return err
	}
	if _, err := io.Copy(out, in); err != nil {
		out.Close()
		return err
	}
	return out.Close()
}

func main() {
	self, _ := os.Executable()
	args := os.Args[1:]
	// step 2: running from a temporary copy, so the install folder (and the original Uninstall.exe in it) can be deleted
	if len(args) >= 3 && args[0] == "--from-temp" {
		dir, keep := args[1], args[2] == "keep"
		o := flow.Options{KeepData: keep, Say: func(s string) { fmt.Println(s) }}
		if err := flow.Uninstall(plat.New(), o, dir); err != nil {
			plat.Error("FutureSelf uninstall", "Could not remove everything:\n\n"+err.Error())
			os.Exit(1)
		}
		plat.Message("FutureSelf", "FutureSelf was removed.")
		plat.RemoveSelfLater(self)
		return
	}
	// step 1: ask, then start the temporary copy
	dir := filepath.Dir(self)
	if !plat.Ask("Uninstall FutureSelf", "Remove FutureSelf from this computer?") {
		return
	}
	keep := "keep"
	if plat.Ask("Uninstall FutureSelf", "Also delete your saved notes, progress and settings?\n\nChoose No to keep them in case you install FutureSelf again.") {
		keep = "delete"
	}
	tmp := filepath.Join(os.TempDir(), "futureself-uninstall.exe")
	if err := copyFile(self, tmp); err != nil {
		plat.Error("FutureSelf uninstall", err.Error())
		os.Exit(1)
	}
	if err := exec.Command(tmp, "--from-temp", dir, keep).Start(); err != nil {
		plat.Error("FutureSelf uninstall", err.Error())
		os.Exit(1)
	}
}
