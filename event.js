// INITIALIZES THE SCRIPT
document.addEventListener('DOMContentLoaded', () => {
  const allVideos = document.querySelectorAll('video');

  allVideos.forEach(video => {
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'metadata';
    video.poster = 'assets/2NDBG.png';
    video.volume = 1;

    const startPlayback = () => {
      video.play().catch(() => {
        // Browsers may block autoplay until the user interacts.
      });
    };

    video.addEventListener('loadeddata', () => {
      video.classList.add('video-ready');
    });

    video.addEventListener('error', () => {
      video.style.display = 'none';
    });

    video.addEventListener('mouseenter', () => {
      video.muted = false;
      startPlayback();
    });

    video.addEventListener('mouseleave', () => {
      video.muted = true;
    });

    video.addEventListener('click', () => {
      video.muted = false;
      startPlayback();
    });

    video.addEventListener('touchstart', () => {
      video.muted = false;
      startPlayback();
    }, { passive: true });

    startPlayback();
  });
});
// PARALLAX EFFECT CALLED BY ID
let BG = document.getElementById('background')
let BUSH = document.getElementById('bush')
let MOON = document.getElementById('moon')
let SKY = document.getElementById('sky')
let RT = document.getElementById('rtree')
let LT = document.getElementById('ltree')
// WHEN SCROLLED MAKES THE ANIMATION
if (window.innerWidth > 768) {

let ticking = false;

window.addEventListener("scroll", () => {

    if (!ticking) {

        requestAnimationFrame(() => {

            const value = window.scrollY;

            RT.style.transform = `translateX(${-value*0.9}px)`;

            LT.style.transform = `translateX(${value*0.9}px)`;

            MOON.style.transform = `translateY(${90+value*0.2}px)`;

            BUSH.style.transform = `translateY(${-value*0.3}px)`;

            SKY.style.transform = `translateY(${-value*0.3}px)`;

            ticking = false;

        });

        ticking = true;

    }

});

}
