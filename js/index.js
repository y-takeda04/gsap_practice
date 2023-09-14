// top_text
gsap.fromTo('.text_1', 1, { y: 0, opacity: 0 }, { y: -70, delay: 1.5, opacity: 1 });
gsap.fromTo('.text_2', 1, { y: 0, opacity: 0 }, { y: 70, delay: 1.5, opacity: 1 });

// gernination_fade-in
document.querySelectorAll('.gn_text').forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        ease: 'expo',
      },
    }
  );
});

// gernimation_fade-in_img
document.querySelectorAll('.gn_img').forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        ease: 'expo',
      },
    }
  );
});

// root_fade-in
document.querySelectorAll('.root_text').forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        ease: 'expo',
      },
    }
  );
});

// root_scrub_left
gsap.to('.root_left img', {
  y: 100,
  duration: 2,
  scrollTrigger: {
    trigger: '.root_left',
    start: 'top center',
    scrub: true,
  },
});

// root_scrub_left
gsap.from('.root_right img', {
  y: 150,
  duration: 2,
  scrollTrigger: {
    trigger: '.root_right',
    start: 'top center',
    scrub: true,
  },
});

// virtue_scrub_section
gsap.to('.virtue_1 img', {
  y: -90,
  duration: 2,
  scrollTrigger: {
    trigger: '.virtue_1',
    start: 'top center',
    scrub: true,
  },
});

// virtue_scrub_section
gsap.to('.virtue_2 img', {
  y: -90,
  duration: 2,
  scrollTrigger: {
    trigger: '.virtue_2',
    start: 'top center',
    scrub: true,
  },
});

// face_fade-in
document.querySelectorAll('.face_right p').forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        ease: 'expo',
      },
    }
  );
});

// wear_横スクロール
const listWrapperEl = document.querySelector('.wear_wrapper');
const listEl = document.querySelector('.items');

gsap.to(listEl, {
  x: () => -(listEl.clientWidth - listWrapperEl.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.wear',
    start: 'top top',
    end: () => `+=${listEl.clientWidth - listWrapperEl.clientWidth}`,
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
  },
});

// logo_scale
gsap.to('.logo img', {
  scale: 1,
  scrollTrigger: {
    trigger: '.logo',
    start: 'top center',
    end: 'bottom top',
    pin: true,
    scrub: 1,
  },
});
