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

document.addEventListener("scroll", console.log(event));

// window.addEventListener("scroll", function () {
//   document.getElementById("showScroll").innerHTML = pageYOffset + "px";
//   console.log(pageYOffset);
// });
