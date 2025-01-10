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

window.addEventListener('resize', function() {
    let width = window.innerWidth;
    
    if (width <= devices.iPadPro.width) {
        console.log('Screen size is less than iPad Pro');
        enquire.register("screen and (min-width: 1024px) and (max-width: 1279px)", {
            deferSetup: true,
            setup: function() {
                // This code will run only once, the first time the media query is matched 
                console.log('Setup code executed'); 
                // Example setup code: Initialize some elements or variables
                const element = document.querySelector(".toggle-img-2"); 
                if (element) { 
                    element.style.backgroundColor = "blue"; 
                }
            }, match: function() {
                    document.querySelector(".toggle-img-2").classList.remove("d-none");
                    document.querySelector(".toggle-img-1").classList.add("d-none"); },
                unmatch: function() {
                    document.querySelector(".toggle-img-2").classList.add("d-none");
                    document.querySelector(".toggle-img-1").classList.remove("d-none");
            }, destroy: function() {
                console.log('Handler unregistered'); } });
        console.log(enquire.register());
    } else if (width >= 600 && width < 1200) {
        console.log('Screen size is between 600px and 1200px');
        
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