$root = "C:\Users\VINCENT VON EIRON\Documents\GitHub\VDLC\assets"
$files = Get-ChildItem $root -File | Where-Object { $_.Extension -ieq '.mp4' }
Write-Host "Found $($files.Count) mp4 files"

foreach ($file in $files) {
    $out = Join-Path $file.DirectoryName ($file.BaseName + "-small.mp4")
    if (Test-Path $out) { Remove-Item $out -Force }
    $cmd = @("C:\ffmpeg\bin\ffmpeg.exe", "-y", "-i", $file.FullName, "-vcodec", "libx264", "-acodec", "aac", "-movflags", "+faststart", "-preset", "medium", "-crf", "28", "-pix_fmt", "yuv420p", "-shortest", $out)
    Write-Host "Compressing $($file.Name)"
    & $cmd[0] $cmd[1..($cmd.Length-1)]
    if (Test-Path $out) {
        $orig = $file.Length
        $new = (Get-Item $out).Length
        Write-Host "  $($file.Name): $orig -> $new"
    }
}
