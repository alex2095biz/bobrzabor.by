"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");
let wrapperImg = document.querySelector(".intro__slider");

function slider() {
  intro.forEach((element) => {
    element.classList.remove("intro__img-active");
  });

  let i = 1;
  intro.lastChild.classList.add("intro__img-active");
}

let timerId = setInterval(() => slider(), 3000);
