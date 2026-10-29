#!/bin/bash
# usage: build.sh <packaged-app-folder> <version> <output-setup.exe>
set -e
APP="$1"; VER="$2"; OUT="$3"
HERE="$(cd "$(dirname "$0")" && pwd)"
cd "$HERE"
export CGO_ENABLED=0 GOOS=windows GOARCH=amd64
go build -trimpath -ldflags "-s -w" -o setup/uninstall.exe ./uninstall
python3 - "$APP" setup/payload.zip <<'PY'
import sys, os, zipfile
src, out = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED, compresslevel=6) as z:
    for root, dirs, files in os.walk(src):
        for f in files:
            p = os.path.join(root, f)
            z.write(p, os.path.relpath(p, src).replace(os.sep, '/'))
PY
go build -trimpath -ldflags "-s -w -X main.version=$VER" -o "$OUT" ./setup
ls -l "$OUT"
