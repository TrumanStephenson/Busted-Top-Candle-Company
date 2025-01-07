import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




// This failed. The bootstrap classes really helped clean up the size differences.
// function registerMediaQueries(devices) {
//   Object.keys(devices).forEach(device => {
//     const width = devices[device].width;
//     const height = devices[device].height;

//     enquire.register('screen and (max-width: ' + width + 'px) and (max-height: ' + height + 'px)', {
//       match: () => {
//         console.log('Media query matched!');
//         handleResize();
//       },
//       unmatch: () => {
//         console.log('Media query unmatched!');
//         handleResize();
//       },
//     });
//   });
// }

// const devices = {
//   iPhoneSE: { width: 375, height: 667 },
//   iPhoneXR: { width: 414, height: 896 },
//   iPhone12Pro: { width: 390, height: 844 },
//   iPhone12ProMax: { width: 428, height: 926 },
//   iPad: { width: 768, height: 1024 },
//   iPadPro: { width: 1024, height: 1366 },
//   Pixel2: { width: 411, height: 731 },
//   Pixel2XL: { width: 411, height: 823 },
//   Pixel4: { width: 411, height: 869 },
//   Pixel4XL: { width: 411, height: 823 },
//   GalaxyS5: { width: 360, height: 640 },
//   GalaxyS9: { width: 360, height: 740 },
//   GalaxyS9Plus: { width: 360, height: 740 },
//   GalaxyNote9: { width: 360, height: 740 },
//   GalaxyFold: {
//     folded: { width: 280, height: 653 },
//     unfolded: { width: 653, height: 280 },
//   },
//   SurfaceDuo: {
//     singleScreen: { width: 540, height: 720 },
//     dualScreen: { width: 720, height: 540 },
//   },
// };

// registerMediaQueries(devices);


//
// Come back to this later. for the gallery.
//
// document.addEventListener('DOMContentLoaded', () => {
//   const slideshow = document.querySelector('.slideshow');
//   const slidesContainer = slideshow.querySelector('.slides');
//   const slides = slidesContainer.querySelectorAll('.slide');
//   const slideCount = slides.length;
//   const slideWidth = 540;

//   const highlightThumbnail = () => {
//     slideshow
//       .querySelectorAll('.highlighted')
//       .forEach(el => el.classList.remove('highlighted'));
//     const index = Math.floor(slidesContainer.scrollLeft / slideWidth);
//     slideshow
//       .querySelector(`.thumbnail[data-id="${index}"]`)
//       .classList.add('highlighted');
//   };

//   const scrollToElement = el => {
//     const index = parseInt(el.dataset.id, 10);
//     slidesContainer.scrollTo(index * slideWidth, 0);
//   };

//   const thumbnailsContainer = document.createElement('div');
//   thumbnailsContainer.classList.add('thumbnails');
//   slideshow.appendChild(thumbnailsContainer);

//   slides.forEach((slide, i) => {
//     console.log(slide.src);
//     const thumbnail = document.createElement('div');
//     thumbnail.classList.add('thumbnail');
//     thumbnail.dataset.id = i;
//     thumbnail.style.backgroundImage = `url(${slide.src})`;
//     thumbnailsContainer.appendChild(thumbnail);
//   });

//   thumbnailsContainer.querySelectorAll('.thumbnail').forEach(thumbnail => {
//     thumbnail.addEventListener('click', () => scrollToElement(thumbnail));
//   });

//   slidesContainer.addEventListener('scroll', highlightThumbnail);

//   highlightThumbnail();
// });