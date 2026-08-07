// INITIALIZES THE SCRIPT
document.addEventListener('DOMContentLoaded', () => {
  const allVideos = document.querySelectorAll('video');

  // Prepare videos: move <source src> into data-src and prevent immediate loading
  allVideos.forEach(video => {
    const source = video.querySelector('source');
    if (source) {
      const src = source.getAttribute('src');
      if (src) {
        source.dataset.src = src;
        source.removeAttribute('src');
      }
    }

    video.autoplay = false;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'none';
    video.poster = video.getAttribute('data-poster') || 'assets/2NDBG.png';
    video.volume = 1;

    video.addEventListener('loadeddata', () => {
      video.classList.add('video-ready');
    });

    video.addEventListener('error', () => {
      video.style.display = 'none';
    });

    video.addEventListener('mouseenter', () => {
      video.muted = false;
      loadAndPlay(video, true);
    });

    video.addEventListener('mouseleave', () => {
      video.muted = true;
    });

    video.addEventListener('click', () => {
      video.muted = false;
      loadAndPlay(video, true);
    });

    video.addEventListener('touchstart', () => {
      video.muted = false;
      loadAndPlay(video, true);
    }, { passive: true });
  });

  function loadAndPlay(video, autoplay = false) {
    const source = video.querySelector('source');
    if (source && source.dataset.src && !source.getAttribute('src')) {
      source.setAttribute('src', source.dataset.src);
      video.load();
    }
    if (autoplay) {
      video.play().catch(() => {});
    }
  }

  // Lazy-load videos when they enter the viewport
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const v = entry.target;
        if (entry.isIntersecting) {
          // load the source when visible
          loadAndPlay(v, true);
        } else {
          // pause when out of view to save bandwidth
          if (!v.paused) v.pause();
        }
      });
    }, { threshold: 0.25 });

    allVideos.forEach(v => observer.observe(v));
  } else {
    // Fallback: load first viewport videos
    allVideos.forEach(v => loadAndPlay(v, false));
  }
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
