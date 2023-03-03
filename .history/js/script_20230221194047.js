"use strict";
let activeIntro = document.querySelector(".intro__img-active");
let intro = document.querySelectorAll(".intro__img");

let catalogImgLeft = document.querySelectorAll(".catalog__wrapper-left");
let catalogImgRight = document.querySelectorAll(".catalog__wrapper-right");
let catalogTextLeft = document.querySelectorAll(".catalog__label-left");
let catalogTextRight = document.querySelectorAll(".catalog__label-right");
let scrollLeft = document.querySelectorAll(".scroll-left");
let scrollRight = document.querySelectorAll(".scroll-right");

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

let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.5,
};
let callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeInSlide-left");
      observer.unobserve(entry.target);
    }
  });
};
let observer = new IntersectionObserver(callback, options);

scrollLeft.forEach((target) => {
  observer.observe(target);
});

let rightScroll = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeInSlide-rihgt");
      observerRight.unobserve(entry.target);
    }
  });
};
let observerRight = new IntersectionObserver(rightScroll, options);

scrollRight.forEach((target) => {
  observerRight.observe(target);
});

// const scrollAnimationLeft = () => {
//   // scrollLeft.scrollTo(0, 100);
//   let windowCenter = window.innerHeight / 2 + window.scrollY;

//   scrollLeft.forEach((element) => {
//     let scrollOffset = element.offsetTop + element.offsetHeight / 2;

//     if (windowCenter >= scrollOffset || window.scrollY === 0) {
//       element.classList.add("fadeInSlide-left");
//     } else {
//       element.classList.remove("fadeInSlide-left");
//     }
//   });
// };

// const scrollAnimationRight = () => {
//   // scrollLeft.scrollTo(0, 100);
//   let windowCenter = window.innerHeight / 2 + window.scrollY;

//   scrollRight.forEach((element) => {
//     let scrollOffset = element.offsetTop + element.offsetHeight / 2;

//     if (windowCenter >= scrollOffset || window.scrollY === 0) {
//       element.classList.add("fadeInSlide-right");
//     } else {
//       element.classList.remove("fadeInSlide-right");
//     }
//   });
// };

// scrollAnimationRight();
// scrollAnimationLeft();
// document.addEventListener("scroll", () => {
//   scrollAnimationLeft();
//   scrollAnimationRight();
// });
