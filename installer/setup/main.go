package main

import (
	_ "embed"
	"fmt"
	"os"
	"path/filepath"
	"strings"
	"time"

	"futureself/installer/flow"
	"futureself/installer/plat"
)

//go:embed payload.zip
var payload []byte

//go:embed uninstall.exe
var uninstaller []byte

var version = "dev"

func main() {
	o := flow.Options{Version: version, Say: func(s string) { fmt.Println(s) }}
	silent := false
	for _, a := range os.Args[1:] {
		switch strings.ToLower(strings.TrimLeft(a, "-/")) {
		case "silent", "s", "quiet":
			silent = true
			o.NoLaunch = o.NoLaunch || false
		case "nodesktop":
			o.NoDesktop = true
		case "nolaunch":
			o.NoLaunch = true
		}
	}
	// never keep the install folder as this program's working folder (Windows could not replace it then)
	os.Chdir(os.TempDir())
	// a log next to the downloaded Setup, so a failed update can be explained
	logf, _ := os.OpenFile(filepath.Join(os.TempDir(), "FutureSelf-setup.log"), os.O_CREATE|os.O_WRONLY|os.O_TRUNC, 0o644)
	if logf != nil {
		defer logf.Close()
		o.Say = func(s string) { fmt.Println(s); fmt.Fprintln(logf, time.Now().Format("15:04:05"), s) }
	}
	fmt.Println("FutureSelf " + version + " setup")
	fmt.Println("Installing for your Windows account only (no administrator needed).")
	fmt.Println()
	p := plat.New()
	dir, err := flow.Install(p, o, payload, uninstaller)
	if err != nil {
		o.Say("Setup failed: " + err.Error())
		// shown even for a silent update: the student pressed Update and must know it did not work
		plat.Error("FutureSelf setup", "The update could not finish:\n\n"+err.Error()+"\n\nYour current FutureSelf was kept. Close FutureSelf completely (also from the tray) and try again, or download FutureSelf-Setup.exe from the website.")
		os.Exit(1)
	}
	fmt.Println("\nDone. Installed in " + dir)
	if !silent {
		plat.Message("FutureSelf", "FutureSelf is installed.\n\nOpen it from the Start menu or the desktop icon.")
	}
}
