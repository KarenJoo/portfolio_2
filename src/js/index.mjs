import { burgerMenu } from './nav/navbar.mjs';
import moveSlide from './slider/index.mjs';
import { initModals } from './modals/modals.mjs';

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', burgerMenu);
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  initModals();

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => moveSlide(-1));
    nextButton.addEventListener('click', () => moveSlide(1));
  }

  const video = document.getElementById('mediaVideo');
  const placeholder = document.getElementById('video-placeholder');

  if (video && placeholder) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.playbackRate = 0.5;
            video.style.display = 'block';
            placeholder.style.display = 'none';
            video.play();
            observer.unobserve(video);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(video);
  }
});

