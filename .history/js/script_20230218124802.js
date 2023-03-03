"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  for () {
  intro.classList.remove("intro__img-active");

  let i = 1;
  intro.childNodes[i].classList.add("intro__img-active");
}
}

let timerId = setInterval(() => slider(), 3000);
