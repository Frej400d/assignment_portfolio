gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  headerAnimation();
}

function headerAnimation() {
  let headerText = document.querySelector(".color-header");
  let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  tl.to(headerText, { duration: 0.2, opacity: 0, scale: 0.6 });
  tl.to(headerText, { duration: 0.5, opacity: 1, scale: 1 });
  animations();
}

function animations() {
  gsap.to(".color-mockup-left", {
    delay: 0.75,
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#framework-content",
      start: "top 70%",
    },
  });

  gsap.to(".color-mockup-right", {
    delay: 0.75,
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#color-mockup",
      start: "top 70%",
    },
  });

  gsap.to(".mock-up", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#color-mockup",
      markers: true,
      start: "60% center",
    },
  });

  gsap.to(".details", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mock-up",
      start: "40% 40%",
    },
  });

  gsap.to(".buttons", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".details",
      start: "20% 40%",
    },
  });
}
