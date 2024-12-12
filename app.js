gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-one",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    markers: true,
    pin: true,
  },
});

tl.from(".line-one span", {
  opacity: 0,
  y: 100,
  stagger: 0.2,
  duration: 2.5,
  ease: "power4.out",
})
  .to(".line-one", {
    backgroundColor: "yellow",
    duration: 1,
  })
  .from(".sun", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
  })
  .to(
    ".sun",
    {
      x: -10000,
      duration: 1,
      ease: "power4.in",
    },
    "-=1"
  )
  .to(
    ".line-one span",
    {
      x: 10000,
      stagger: 0.2,
      duration: 1,
      ease: "power4.in",
    },
    "-=1"
  )
  .to(".line-one", {
    backgroundColor: "white",
    duration: 1,
  });

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-two",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    markers: true,
    pin: true,
  },
});

tl2
  .from(".line-two span", {
    scale: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "power4.out",
  })
  .to(".line-two span", {
    y: -50,
    stagger: 0.2,
    duration: 1,
  })
  .to(".line-two span", {
    y: 0,
    stagger: 0.2,
    duration: 1,
  });

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".line-three",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    markers: true,
    pin: true,
  },
});

tl3
  .from(".line-three span", {
    opacity: 0,
    y: 100,
    stagger: 0.2,
    duration: 2.5,
    ease: "power4.out",
  })
  .to(".line-three", {
    backgroundPositionX: "0%",
    duration: 1,
    ease: "power4.in",
  })
  .to(
    ".line-three span",
    {
      color: "white",
      duration: 1,
      ease: "power4.in",
    },
    "-=1"
  )
  .to(".moon", {
    x: "-100%",
    duration: 1,
    ease: "power2.inOut",
  });
