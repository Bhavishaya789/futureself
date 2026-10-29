package main

import (
	_ "embed"
	"fmt"
	"os"
	"strings"

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
	fmt.Println("FutureSelf " + version + " setup")
	fmt.Println("Installing for your Windows account only (no administrator needed).")
	fmt.Println()
	p := plat.New()
	dir, err := flow.Install(p, o, payload, uninstaller)
	if err != nil {
		fmt.Println("\nSetup failed: " + err.Error())
		if !silent {
			plat.Error("FutureSelf setup", "Setup could not finish:\n\n"+err.Error())
		}
		os.Exit(1)
	}
	fmt.Println("\nDone. Installed in " + dir)
	if !silent {
		plat.Message("FutureSelf", "FutureSelf is installed.\n\nOpen it from the Start menu or the desktop icon.")
	}
}
