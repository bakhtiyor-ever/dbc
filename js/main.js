const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add("open");
        navList.classList.add("nav-open");
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        navList.classList.remove("nav-open");
        menuOpen = false;
    }
})

const galeryLinkOpen = document.querySelector(".more-galery__link");

galeryLinkOpen.addEventListener("click", function(e) {
    e.preventDefault();
    const hiddenList = document.querySelector(".hidden-gallery__list");
    const hiddenList2 = document.querySelector(".hidden-gallery__list-2");
    hiddenList.classList.add("appear-list");
    hiddenList2.classList.add("appear-list");
    this.classList.add("none");
})