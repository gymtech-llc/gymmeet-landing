gsap.registerPlugin(ScrollTrigger);

// Navbar scroll effect
gsap.to('.navbar', {
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  backdropFilter: 'blur(15px)',
  scrollTrigger: {
    trigger: 'body',
    start: 'top -50',
    end: '+=100',
    scrub: true
  }
});

// Hero animations
gsap.timeline()
  .from('.hero-content h1', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  })
  .from('.hero-description', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.5')
  .from('.hero-actions', {
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=0.4')
  .from('.hero-image', {
    x: 50,
    opacity: 0,
    duration: 1,
    ease: 'power2.out'
  }, '-=0.8');


// Features section animations
gsap.from('.panel-setup .image', {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-setup',
    start: 'top 80%'
  }
});

gsap.from('.panel-setup .text', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-setup',
    start: 'top 80%'
  }
});

// Parent registration section
gsap.from('.panel-parent .image', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-parent',
    start: 'top 80%'
  }
});

gsap.from('.panel-parent .text', {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-parent',
    start: 'top 80%'
  }
});

// Calendar/Roster section
gsap.from('.panel-roster .text', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-roster',
    start: 'top 80%'
  }
});

gsap.from('.panel-roster .image', {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-roster',
    start: 'top 80%'
  }
});

// Billing section
gsap.from('.panel-billing .image', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-billing',
    start: 'top 80%'
  }
});

gsap.from('.panel-billing .text', {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-billing',
    start: 'top 80%'
  }
});

// Communication section animations
gsap.from('.section-header', {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.communication-section .section-header',
    start: 'top 80%'
  }
});

gsap.from('.panel-notifications .text', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-notifications',
    start: 'top 80%'
  }
});

gsap.from('.panel-notifications .image', {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-notifications',
    start: 'top 80%'
  }
});

// SMS Compliance section
gsap.from('.panel-sms-compliance .image', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-sms-compliance',
    start: 'top 80%'
  }
});

gsap.from('.panel-sms-compliance .text', {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-sms-compliance',
    start: 'top 80%'
  }
});

gsap.from('.compliance-item', {
  y: 30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.compliance-features',
    start: 'top 80%'
  }
});

// AI Assistant section
gsap.from('.panel-ai .image', {
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-ai',
    start: 'top 80%'
  }
});

gsap.from('.panel-ai .text', {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-ai',
    start: 'top 80%'
  }
});

// Final CTA
gsap.from('.panel-cta .inner', {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.panel-cta',
    start: 'top 80%'
  }
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }
  
  // Smooth scroll for navigation links
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lightbox functionality
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxBackdrop = document.querySelector('.lightbox-backdrop');
  
  // Function to open lightbox
  function openLightbox(imageSrc, imageAlt) {
    lightboxImage.src = imageSrc;
    lightboxImage.alt = imageAlt;
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }
  
  // Function to close lightbox
  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    // Clear image after animation completes
    setTimeout(() => {
      if (!lightboxModal.classList.contains('active')) {
        lightboxImage.src = '';
        lightboxImage.alt = '';
      }
    }, 300);
  }
  
  // Add click event to all screenshot images
  document.querySelectorAll('.panel .image img').forEach(img => {
    img.addEventListener('click', function() {
      openLightbox(this.src, this.alt);
    });
  });
  
  // Add click event to hero screenshot
  const heroScreenshot = document.querySelector('.hero-screenshot');
  if (heroScreenshot) {
    heroScreenshot.addEventListener('click', function() {
      openLightbox(this.src, this.alt);
    });
  }
  
  // Close lightbox events
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);
  
  // Close on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });
  
  // Prevent closing when clicking on the image itself
  lightboxImage.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
