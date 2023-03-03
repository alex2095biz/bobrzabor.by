"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  intro.forEach((element) => {
    element.classList.remove("intro__img-active");
  });
  for (let i = 0; i < 3; i++) {
    if(i === 0) {
    intro[i].classList.add("intro__img-active");
  }
  if(i === 1) {
    intro[i].classList.add("intro__img-active");
  
  }
  if(i === 2) {
    intro[i].classList.add("intro__img-active");
  
}
  }
let timerId = setInterval(() => slider(), 3000);
