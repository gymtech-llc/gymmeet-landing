window.addEventListener('DOMContentLoaded', () => {
  const heroSwiper = new Swiper('.hero', {
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    fadeEffect: {
      crossFade: true,
    },
  });

  if (window.AOS) {
    AOS.init({
      duration: 600,
      once: true,
    });
  }
});
