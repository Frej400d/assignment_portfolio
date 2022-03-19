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
    duration: 3,
    y: "-10vw",
    opacity: 1,
    scrollTrigger: {
      trigger: "#conclusion",
      scrub: 0.5,
      markers: true,
      start: "top 90%",
      end: "40% 70%",
    },
  });
}
