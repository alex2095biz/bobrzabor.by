"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

function slider() {
  for (let i = 0; i < 3; i++) {
    setInterval(() => {
      if (i === 0) {
        intro[i].classList.add("intro__img-active");
        intro[i + 1].classList.remove("intro__img-active");
        intro[i + 2].classList.remove("intro__img-active");
      }
    }, 3000);

    setInterval(() => {
      if (i === 1) {
        intro[i].classList.add("intro__img-active");
        intro[i - 1].classList.remove("intro__img-active");
        intro[i + 2].classList.remove("intro__img-active");
      }
    }, 3000);

    setInterval(() => {
      if (i === 1) {
        intro[i].classList.add("intro__img-active");
        intro[i - 2].classList.remove("intro__img-active");
        intro[i - 1].classList.remove("intro__img-active");
      }
    }, 3000);
  }
}
