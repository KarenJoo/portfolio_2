let currentSlide = 0;

export default function moveSlide(direction) {
  const slides = document.querySelectorAll('.card-container');
  const totalSlides = slides.length;

  // Update the current slide index
  currentSlide += direction;

  // Wrap around the slide index if out of bounds
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  // Calculate the offset and apply transform
  const offset = -currentSlide * 100;
  document.querySelector('.projects-grid').style.transform = `translateX(${offset}%)`;
}
