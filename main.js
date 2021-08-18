const body = document.body;
const leftContainer = document.getElementById("left-container-scroll");
const rightContainer = document.getElementById("right-container-scroll");
let letScroll = true;

const button = document.getElementById("test-button");
button.addEventListener("click", function () {
  if (letScroll) {
    letScroll = false;

    leftContainer.style.transform = "translate3d(0px, -1240px, 0px)";
    rightContainer.style.transform = "translate3d(0px, 1240px, 0px)";
  }
});
