const body = document.body;
const leftContainer = document.getElementById("left-container-scroll");
const rightContainer = document.getElementById("right-container-scroll");
let letScroll = true;

const button = document.getElementById("test-button");
const button2 = document.getElementById("test-button2");
let windowHeight = window.innerHeight;
let calcWindowHeight = 0;
window.addEventListener("scroll", function () {});
button.addEventListener("click", function () {
  calcWindowHeight += windowHeight;
  leftContainer.style.transform = `translate3d(0px, -${calcWindowHeight}px, 0px)`;
  rightContainer.style.transform = `translate3d(0px, ${calcWindowHeight}px, 0px)`;
});
button2.addEventListener("click", function () {
    calcWindowHeight -= windowHeight;
  rightContainer.style.transform = `translate3d(0px, -${calcWindowHeight}px, 0px)`;
  leftContainer.style.transform = `translate3d(0px, ${calcWindowHeight}px, 0px)`;
});
