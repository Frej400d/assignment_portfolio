gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome to my Portfolio");
  let headerText = document.querySelector(".header-text-ani");
  let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });

  tl.to(headerText, { duration: 0.75, opacity: 0, scale: 0.6 });
  tl.to(headerText, { duration: 2.5, opacity: 1, scale: 1 });

  frontpageScrollAnimations();
}
function frontpageScrollAnimations() {
  gsap.to(".intro-text", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#intro",
      start: "top 70%",
    },
  });

  gsap.to(".intro-graphic-container", {
    x: "0%",
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#intro",
      start: "top 70%",
    },
  });

  gsap.to(".ass-h2", {
    opacity: 1,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#intro",
      markers: true,
      scrub: 0.5,
      start: "bottom 70%",
      end: "150% 70%",
    },
  });

  let cardContainer = document.querySelector(".card-container");
  gsap.to(cardContainer, {
    duration: 3,
    y: "-10vw",
    opacity: 1,
    scrollTrigger: {
      trigger: ".assignments-container",
      scrub: 0.5,
      start: "top 50%",
      end: "bottom 65%",
    },
  });

  let conclusion = document.querySelector(".conclu-text");
  gsap.to(conclusion, {
    duration: 1,
    opacity: 1,
    scrollTrigger: {
      trigger: "#conclusion",
      start: "top 70%",
    },
  });
}
