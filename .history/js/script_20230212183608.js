"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  intro.forEach((element) => {
    if (elem.classList.contains("class")) {
      element.classList.add(".intro__img-active");
    }
  });
}
slider();
