"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");
console.log(intro.length);
function slider() {
  for (let x = 0; x < i; x++) {
    element.classList.remove("intro__img-active");
  }
}

let timerId = setInterval(() => slider(), 3000);
