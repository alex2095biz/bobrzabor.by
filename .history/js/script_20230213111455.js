"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

addEventListener("DOMContentLoaded", () => {
  let count = 0;
  setInterval(() => {
    intro.forEach((img, index) => {
      if (count === index) {
        intro[count].style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
    count++;
    if (count === 3) {
      count = 0;
    }
  }, 5000);
});
