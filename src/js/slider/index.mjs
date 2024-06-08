let currentSlide = 0;

export default function moveSlide(direction) {
  const slides = document.querySelectorAll('.card-container');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  const offset = -currentSlide * 100;
  document.querySelector('.projects-grid').style.transform = `translateX(${offset}%)`;
}


