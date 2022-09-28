const shareImg = document.querySelector(".share-img");
const infoFooter = document.querySelector(".info-footer");
const hiddenIcons = document.querySelector(".info-javascript");

function shareImgClicked() {
    console.log("hello");
    infoFooter.classList.toggle("alt");
    hiddenIcons.classList.toggle("shown");
}

shareImg.addEventListener("click", shareImgClicked);