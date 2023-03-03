"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");
function slider() {
  for (let i = 0; i <= 4; i++) {
    intro[i].classList.add("intro__img-active");

    setTimeout(() => {
      intro[i].classList.remove("intro__img-active");
    }, 2000);
    i = 0;
  }

  setInterval(
    () => {
      for (let i = 0; i <= 4; i++) {
        setTimeout(() => {
          if (i === 0) {
            intro[i].classList.add("intro__img-active");
            intro[i + 1].classList.remove("intro__img-active");
            intro[i + 2].classList.remove("intro__img-active");
          }
        }, 2000);

        setTimeout(() => {
          if (i === 1) {
            intro[i].classList.add("intro__img-active");
            intro[i - 1].classList.remove("intro__img-active");
            intro[i + 1].classList.remove("intro__img-active");
          }
        }, 4000);

        setTimeout(() => {
          if (i === 2) {
            intro[i].classList.add("intro__img-active");
            intro[i - 2].classList.remove("intro__img-active");
            intro[i - 1].classList.remove("intro__img-active");
          } else {
          }
        }, 6000);
      }
    },

    6000
  );
}
slider();
