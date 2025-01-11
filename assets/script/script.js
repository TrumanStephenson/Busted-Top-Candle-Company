const devices = { 
    GalaxyFold: { 
        folded: { width: 280, height: 653 }, 
        unfolded: { width: 653, height: 280 }, 
    }, 
    GalaxyS5: { width: 360, height: 640 }, 
    GalaxyS9: { width: 360, height: 740 }, 
    GalaxyS9Plus: { width: 360, height: 740 }, 
    GalaxyNote9: { width: 360, height: 740 }, 
    iPhoneSE: { width: 375, height: 667 }, 
    iPhone12Pro: { width: 390, height: 844 }, 
    Pixel2: { width: 411, height: 731 }, 
    Pixel2XL: { width: 411, height: 823 }, 
    Pixel4: { width: 411, height: 869 }, 
    Pixel4XL: { width: 411, height: 823 }, 
    iPhoneXR: { width: 414, height: 896 }, 
    iPhone12ProMax: { width: 428, height: 926 }, 
    SurfaceDuo: { 
        singleScreen: { width: 540, height: 720 }, 
        dualScreen: { width: 720, height: 540 }, 
    }, 
    iPad: { width: 768, height: 1024 }, 
    iPadPro: { width: 1024, height: 1366 },
};

// Handling the resize
window.addEventListener('resize' && 'load', function() {
    let width = window.innerWidth;
    const toggledImg1 = document.querySelectorAll(".toggle-img-1");
    const toggledImg2 = document.querySelectorAll(".toggle-img-2");

    if (width <= devices.iPadPro.width) {
        toggledImg1.forEach(img => img.style.display = 'none');
        toggledImg2.forEach(img => img.style.display = 'block');
    } else {
        toggledImg1.forEach(img => img.style.display = 'block');
        toggledImg2.forEach(img => img.style.display = 'none');
        console.log(toggledImg1, toggledImg2);
    }
});

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