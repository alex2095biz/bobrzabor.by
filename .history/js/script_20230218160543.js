"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  for (let i = 0; i <= 4; i++) {
    setInterval(() => {
      if (i === 0) {
        intro[0].classList.add("intro__img-active");
        intro[1].classList.remove("intro__img-active");
        intro[2].classList.remove("intro__img-active");
      } else if (i === 1) {
        intro[1].classList.add("intro__img-active");
        intro[0].classList.remove("intro__img-active");
        intro[2].classList.remove("intro__img-active");
      } else if (i === 2) {
        intro[2].classList.add("intro__img-active");
        intro[0].classList.remove("intro__img-active");
        intro[1].classList.remove("intro__img-active");
      } else {
        i = 0;
      }
    }, 1000);
  }
}
slider();
