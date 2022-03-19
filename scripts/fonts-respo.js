gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  headerAnimation();
}

function headerAnimation() {
  let headerText = document.querySelector(".header-text");
  let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  tl.to(headerText, { duration: 0.2, opacity: 0, scale: 0.6 });
  tl.to(headerText, { duration: 0.5, opacity: 1, scale: 1 });
  tl.to(".mock-up", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
  });

  animations();
}

function animations() {
  gsap.to(".details", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mock-up",
      start: "top 40%",
    },
  });

  gsap.to(".buttons", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".details",
      start: "top 40%",
    },
  });
}
