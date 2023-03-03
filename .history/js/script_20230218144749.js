"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");
let x = 0;

function slider() {
  intro.forEach((element) => {
    element.classList.remove("intro__img-active");
  });
  for (let i = 0; i < 1; i++) {
    intro[x].classList.add("intro__img-active");
    x++;
  }
}
let timerId = setInterval(() => slider(), 3000);
