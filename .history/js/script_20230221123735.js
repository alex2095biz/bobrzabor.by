"use strict";

let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

let catalogImg = document.querySelectorAll(".catalog__wrapper-left");
let catalogTextLeft = document.querySelectorAll(".catalog__label-left");
let catalogTextRight = document.querySelectorAll(".catalog__label-right");

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

document.addEventListener("scroll", function () {
  if (pageYOffset === 0) {
  }
  // console.log(pageYOffset);
});
const scrollAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  catalogImg.forEach((element) => {
    let scrollOffset = element.offsetTop + element.offsetHeight;
    if (windowCenter >= scrollOffset) {
      element.classList.add("fadeInSlide-left");
    }
  });
};
scrollAnimation();
