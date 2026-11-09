# Pushes the Android build fix, then restarts the APK build for v1.36.1.
Set-Location C:\fs
git add -A
git commit -m "Android build: longer Gradle download timeout and retries"
$c = "protocol=https`nhost=github.com`n`n" | git credential fill
$t = ($c | Select-String '^password=(.*)$').Matches.Groups[1].Value
if (-not $t) { Write-Host "No saved GitHub sign-in found."; exit 1 }
git push "https://x-access-token:$t@github.com/Bhavishaya789/futureself.git" HEAD:main
$h = @{ Authorization = "Bearer $t"; Accept = 'application/vnd.github+json'; 'User-Agent' = 'fs' }
Invoke-RestMethod -Method Post -Uri "https://api.github.com/repos/Bhavishaya789/futureself/actions/workflows/android.yml/dispatches" -Headers $h -Body '{"ref":"main","inputs":{"tag":"v1.36.1"}}' -ContentType 'application/json'
Write-Host "Android build restarted: https://github.com/Bhavishaya789/futureself/actions"
