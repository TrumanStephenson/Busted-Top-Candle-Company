import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

document.addEventListener('DOMContentLoaded', () => {
  const slideshow = document.querySelector('.slideshow');
  const slidesContainer = slideshow.querySelector('.slides');
  const slides = slidesContainer.querySelectorAll('.slide');
  const slideCount = slides.length;
  const slideWidth = 540;

  const highlightThumbnail = () => {
    slideshow
      .querySelectorAll('.highlighted')
      .forEach(el => el.classList.remove('highlighted'));
    const index = Math.floor(slidesContainer.scrollLeft / slideWidth);
    slideshow
      .querySelector(`.thumbnail[data-id="${index}"]`)
      .classList.add('highlighted');
  };

  const scrollToElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slidesContainer.scrollTo(index * slideWidth, 0);
  };

  const thumbnailsContainer = document.createElement('div');
  thumbnailsContainer.classList.add('thumbnails');
  slideshow.appendChild(thumbnailsContainer);

  slides.forEach((slide, i) => {
    console.log(slide.src);
    const thumbnail = document.createElement('div');
    thumbnail.classList.add('thumbnail');
    thumbnail.dataset.id = i;
    thumbnail.style.backgroundImage = `url(${slide.src})`;
    thumbnailsContainer.appendChild(thumbnail);
  });

  thumbnailsContainer.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => scrollToElement(thumbnail));
  });

  slidesContainer.addEventListener('scroll', highlightThumbnail);

  highlightThumbnail();
});