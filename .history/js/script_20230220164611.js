"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");
let wrapperImg = document.querySelector(".catalog__wrapper-right");

console.log(wrapperImg);

function slider() {
  let i = 0;
  setInterval(() => {
    const nextIndex = i + 1 >= intro.length ? 0 : i + 1;
    intro[i].classList.remove("intro__img-active");
    intro[nextIndex].classList.add("intro__img-active");
    return (i = nextIndex);
  }, 3000);
}
slider();

let pos = 0;
let animation = setInterval(frame, 10);
function frame() {
  if (pos == 100) {
    clearInterval(animation);
  } else {
    pos++;
    wrapperImg.style.left = pos + "px";
  }
}
