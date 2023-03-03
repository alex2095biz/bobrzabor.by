"use strict";
let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

let catalogImgLeft = document.querySelectorAll(".catalog__wrapper-left");
let catalogImgRight = document.querySelectorAll(".catalog__wrapper-right");
let catalogTextLeft = document.querySelectorAll(".catalog__label-left");
let catalogTextRight = document.querySelectorAll(".catalog__label-right");
let scrollLeft = document.querySelectorAll(".scroll-left");

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

const scrollAnimation = () => {
  let x = 5;
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  console.log(windowCenter);
  scrollLeft.forEach((element) => {
    let scrollOffset = element.offsetTop;

    if (windowCenter >= scrollOffset || window.pageYOffset == undefined) {
      element.classList.add("fadeInSlide-left");
    } else {
      element.classList.remove("fadeInSlide-left");
    }
  });
};

document.addEventListener("scroll", () => {
  scrollAnimation();
});

window.onscroll = function () {
  let posLeft =
    window.pageXOffset !== undefined
      ? window.pageXOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollLeft;
  let posTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  console.log("x=" + posLeft + ", y=" + posTop);
};
