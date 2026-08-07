import os, subprocess, sys, shutil, json
from pathlib import Path

root = Path(r"C:\Users\VINCENT VON EIRON\Documents\GitHub\VDLC\assets")
files = sorted([p for p in root.iterdir() if p.is_file() and p.suffix.lower() == '.mp4'])
print('files', len(files))
for p in files:
    print(p.name, p.stat().st_size)

ffmpeg = shutil.which('ffmpeg') or shutil.which('ffmpeg.exe')
print('ffmpeg', ffmpeg)
if not ffmpeg:
    sys.exit(0)

for p in files:
    out = p.with_suffix('.compressed.mp4')
    if out.exists():
        out.unlink()
    cmd = [ffmpeg, '-y', '-i', str(p), '-vcodec', 'libx264', '-acodec', 'aac', '-movflags', '+faststart', '-preset', 'medium', '-crf', '28', '-pix_fmt', 'yuv420p', '-shortest', str(out)]
    print('running', p.name)
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if out.exists():
        print('created', out.name, out.stat().st_size)
        p.unlink()
        out.replace(p)
