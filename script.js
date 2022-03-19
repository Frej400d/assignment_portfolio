let headerText;
let tl;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Welcome to my Portfolio");
  headerText = document.querySelector(".header-text-ani");
  tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });

  tl.to(headerText, { duration: 0.75, opacity: 0, scale: 0.6 });
  tl.to(headerText, { duration: 2.5, opacity: 1, scale: 1 });
}
