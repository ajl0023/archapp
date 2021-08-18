const body = document.body;
const leftContainer = document.getElementById("left-container-scroll");
const rightContainer = document.getElementById("right-container-scroll");
let shouldScroll = true;


let windowHeight = window.innerHeight;
let calcWindowHeight = 0;

let currentPage = 0;
let currentContainerSizeLeft = 0;
let currentContainerSizeRight = -1874;

window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    console.log("scrolling down");
  }
  if (e.deltaY < 0 && currentPage === 0) {
    return;
  }
  if (e.deltaY > 0 && shouldScroll) {
    currentPage += 1;
    currentContainerSizeLeft += windowHeight;
    currentContainerSizeRight += 937;
    console.log(currentContainerSizeLeft);
    leftContainer.style.transform = `translate3d(0px, -${currentContainerSizeLeft}px, 0px)`;
    rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;
    this.setTimeout(() => {
      shouldScroll = true;
    }, 2000);

    shouldScroll = false;
  }
  if (e.deltaY < 0 && shouldScroll && currentPage > 0) {
    currentContainerSizeLeft -= windowHeight;
    currentContainerSizeRight -= windowHeight;
    currentPage -= 1;
    leftContainer.style.transform = `translate3d(0px, -${currentContainerSizeLeft}px, 0px)`;
    rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;
    this.setTimeout(() => {
      shouldScroll = true;
    }, 2000);
    shouldScroll = false;
  }
});
// window.addEventListener("scroll", function () {
//   calcWindowHeight -= windowHeight;
//   rightContainer.style.transform = `translate3d(0px, -${calcWindowHeight}px, 0px)`;
//   leftContainer.style.transform = `translate3d(0px, ${calcWindowHeight}px, 0px)`;
// });
