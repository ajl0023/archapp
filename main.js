if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}
const body = document.body;
const leftContainer = document.getElementById("left-container-scroll");

const rightContainer = document.getElementById("right-container-scroll");

let shouldScroll = true;

let windowHeight = window.innerHeight;

let calcWindowHeight = 0;

let currentPage = 0;
let currentContainerSizeLeft = 0;
let currentContainerSizeRight = -windowHeight * 4;

rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;

window.addEventListener("wheel", function (e) {
  if (rightContainer.style.transition !== "all 1s ease-out") {
    rightContainer.style.transition = "all 1s ease-out";
  }

  if (e.deltaY < 0 && currentPage === 0) {
    return;
  }
  if (e.deltaY > 0 && shouldScroll && currentPage < 4) {
    currentPage += 1;
    currentContainerSizeLeft += windowHeight;
    currentContainerSizeRight += windowHeight;
    console.log(currentContainerSizeLeft);
    leftContainer.style.transform = `translate3d(0px, -${currentContainerSizeLeft}px, 0px)`;
    rightContainer.style.transform = `translate3d(0px, ${currentContainerSizeRight}px, 0px)`;
    this.setTimeout(() => {
      shouldScroll = true;
    }, 1100);

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
    }, 1100);
    shouldScroll = false;
  }
  console.log(currentPage);
});
const modalSelector = document.getElementById("modal-trigger");

modalSelector.addEventListener("click", function () {
  const modalWrapper = document.getElementById("modal-wrapper-trigger");
  if (modalWrapper) {
    modalWrapper.style.display = "flex";
    return;
  }
  const container = document.createElement("div");
  container.className = "modal-wrapper";
  container.setAttribute("id", "modal-wrapper-trigger");
  container.innerHTML = /* HTML */ ` <div
    id="modal-backdrop"
    class="modal-container"
  >
    <iframe
      width="1086"
      height="611"
      src="https://www.youtube.com/embed/nTS10ZQM5Ms?enablejsapi=1&version=3&playerapiid=ytplayer"
      title="YouTube video player"
      id="main-video-player"
      allowfullscreen
    ></iframe>
  </div>`;
  body.appendChild(container);
  const backdrop = document.getElementById("modal-wrapper-trigger");
  const player = document.getElementById("main-video-player");
  backdrop.addEventListener("click", function (e) {
    if (e.target === backdrop) {
      container.style.display = "none";
    }

    player.contentWindow.postMessage(
      '{"event":"command","func":"' + "pauseVideo" + '","args":""}',
      "*"
    );
  });
});
