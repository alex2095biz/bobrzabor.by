"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");
let wrapperImg = document.querySelector(".intro__slider");

// function slider() {

// let i = 0;
// setInterval(() => {
//   const nextIndex = i + 1 > intro.length ? 0 : i + 1;
//   intro[i].classList.remove("intro__img-active");
//   intro[nextIndex].classList.add("intro__img-active");
//   return (i = nextIndex);
// }, 2000);

let i = 0;
setInterval(
  () => {
    console.log(i);
    intro.forEach((element) => {
      element.classList.remove("intro__img-active");
    });
    console.log(i);
    intro[i].classList.add("intro__img-active");
    i++;

    if (i === intro.length) {
      i = 0;
    }
    // else {
    //   i = 0;
    // }
  },

  3000
);

// }
// slider();

// setInterval(
//   () => {
//     for (let i = 0; i <= 4; i++) {
//       setTimeout(() => {
//         if (i === 0) {
//           intro[i].classList.add("intro__img-active");
//           intro[i + 1].classList.remove("intro__img-active");
//           intro[i + 2].classList.remove("intro__img-active");
//         }
//       }, 2000);

//       setTimeout(() => {
//         if (i === 1) {
//           intro[i].classList.add("intro__img-active");
//           intro[i - 1].classList.remove("intro__img-active");
//           intro[i + 1].classList.remove("intro__img-active");
//         }
//       }, 4000);

//       setTimeout(() => {
//         if (i === 2) {
//           intro[i].classList.add("intro__img-active");
//           intro[i - 2].classList.remove("intro__img-active");
//           intro[i - 1].classList.remove("intro__img-active");
//         } else {
//         }
//       }, 6000);
//     }
//   },

//   6000
// );
