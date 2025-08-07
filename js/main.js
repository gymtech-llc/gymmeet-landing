gsap.registerPlugin(ScrollTrigger);

// Section 1: Meet Setup
 gsap.from('.panel-setup .image', {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-setup',
    start: 'top 80%'
  }
});

gsap.from('.panel-setup .text', {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-setup',
    start: 'top 80%'
  }
});

// Section 2: Parent Registration
 gsap.from('.panel-parent .image', {
  y: 80,
  opacity: 0,
  scrollTrigger: {
    trigger: '.panel-parent',
    start: 'top bottom',
    end: 'bottom top',
    scrub: true
  }
});

gsap.from('.panel-parent .text', {
  y: 50,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-parent',
    start: 'top 80%'
  }
});

// Section 3: Roster Management
 ScrollTrigger.create({
  trigger: '.panel-roster',
  start: 'top top',
  end: '+=300',
  pin: true
});

gsap.from('.panel-roster .image', {
  clipPath: 'inset(0 100% 0 0)',
  scrollTrigger: {
    trigger: '.panel-roster',
    start: 'top center',
    end: 'bottom center',
    scrub: true
  }
});

gsap.from('.panel-roster .text', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-roster',
    start: 'top 80%'
  }
});

// Section 4: Billing and Invoicing
 gsap.from('.panel-billing .image', {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-billing',
    start: 'top 80%'
  }
});

const billingPara = document.querySelector('.panel-billing .text p');
if (billingPara) {
  const words = billingPara.textContent.split(' ');
  billingPara.innerHTML = words.map(w => `<span class="word">${w}</span>`).join(' ');
  gsap.from('.panel-billing .word', {
    opacity: 0,
    duration: 0.3,
    stagger: 0.05,
    scrollTrigger: {
      trigger: '.panel-billing',
      start: 'top 80%'
    }
  });
}

// Section 5: Notifications
 gsap.from('.panel-notifications .image', {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-notifications',
    start: 'top 80%'
  }
});

gsap.from('.panel-notifications .text', {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-notifications',
    start: 'top 80%'
  }
});

// Section 6: AI Assistant
 gsap.from('.panel-ai .image', {
  opacity: 0,
  scale: 0.8,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-ai',
    start: 'top 80%'
  },
  onComplete: () => {
    gsap.to('.panel-ai .image', {
      scale: 1.05,
      duration: 1,
      repeat: -1,
      yoyo: true
    });
  }
});

gsap.from('.panel-ai .text', {
  opacity: 0,
  scale: 0.95,
  filter: 'blur(6px)',
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-ai',
    start: 'top 80%'
  }
});

// Final CTA
gsap.from('.panel-cta .inner', {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: '.panel-cta',
    start: 'top 80%'
  }
});
