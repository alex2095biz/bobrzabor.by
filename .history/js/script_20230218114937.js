"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

intro.forEach((element) => {
  element.classList.toggle("intro__img-active");
});
