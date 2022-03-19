gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome");
  headerAnimation();
}

function headerAnimation() {
  let headerText = document.querySelector(".assign-header");
  let tl = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  tl.to(headerText, { duration: 0.2, opacity: 0, scale: 0.6 });
  tl.to(headerText, { duration: 0.5, opacity: 1, scale: 1 });

  animations();
}

function animations() {
  gsap.to(".fw-mockup", {
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

  gsap.to(".fw-details", {
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

  gsap.to(".buttons", {
    delay: 2.25,
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".fw-details",
      start: "top 100%",
    },
  });
}
