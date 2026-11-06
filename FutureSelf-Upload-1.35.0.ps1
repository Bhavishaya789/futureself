# Run from C:\fs after unzipping FutureSelf-SQL-1.35.0.zip into it (overwrite).
Set-Location C:\fs
git add -A
git commit -m "SQL Lab: databases, tables, MySQL-style SQL, saved on device (1.35.0)"
$c = "protocol=https`nhost=github.com`n`n" | git credential fill
$t = ($c | Select-String '^password=(.*)$').Matches.Groups[1].Value
git push "https://x-access-token:$t@github.com/Bhavishaya789/futureself.git" HEAD:main
