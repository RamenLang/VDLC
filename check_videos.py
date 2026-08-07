import urllib.request
import urllib.parse
files = ['ab.mp4','bok.mp4','hit-reel.mp4','its-over.mp4','lifetime.mp4','parallel souls portfolio_1.mp4','parallel.mp4','pomdance.mp4','SITE PORTFOLIO VER.mp4','SITE PORTFOLIO VER_1.mp4','site-teaser.mp4','STTH.mp4','trailer.mp4','uts.mp4','Valedit.mp4','viola.mp4','zt6.mp4','ramen.mp4']
base = 'https://ramenlang.github.io/VDLC/assets/'
for f in files:
    url = base + urllib.parse.quote(f)
    try:
        req = urllib.request.Request(url, method='HEAD')
        with urllib.request.urlopen(req, timeout=10) as r:
            print(f"{f}\t{r.status}\t{r.getheader('Content-Type')}")
    except Exception as e:
        print(f"{f}\tERROR\t{e}")
