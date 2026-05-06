// INITIALIZES THE SCRIPT
document.addEventListener('DOMContentLoaded', () => {
  const allVideos = document.querySelectorAll('video');

  allVideos.forEach(video => {
// PREVENTS ALL VIDEO TO PLAY AT THE SAME TIME
    video.addEventListener('play', () => {
      allVideos.forEach(otherVideo => {
        if (otherVideo !== video) {
          otherVideo.pause();
          otherVideo.currentTime = 0; 
        }
      });
    });
// WHEN MOUSE LEAVES THE SCREEN, VIDEO STOPS PLAYING
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

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
window.addEventListener('scroll', () => {
    let value = window.scrollY;

    RT.style.marginLeft = value * -0.9 + 'px';
    LT.style.marginLeft = value * 0.9 + 'px';
    MOON.style.marginTop = value * 0.2 + 'px';
    BUSH.style.marginTop = value * -0.30 + 'px';
    SKY.style.marginTop = value * -0.3 + 'px';
})
