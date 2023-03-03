"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  intro.forEach((element) => {
    element.classList.remove("intro__img-active");
  });
  let x = 0;
  for (let i = 0; i <= 3; i++) {
    intro[x].classList.add("intro__img-active");
    x++;
    break;
  }
}
let timerId = setInterval(() => slider(), 3000);
