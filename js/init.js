// Initialize Swiper and AOS animations
window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.hero-swiper', {
    effect: 'fade',
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: '.hero-swiper .swiper-pagination',
      clickable: true,
    },
  });

  if (window.AOS) {
    AOS.init({
      once: true,
      duration: 600,
      easing: 'ease-out',
    });
  }
});
