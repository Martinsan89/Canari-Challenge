// Desktop
const navLink = document.querySelector(".navItemConnect");

const subNav = document.querySelector(".subNav");

const arrowTransform = document.querySelector(".arrowDesktopConnect");

// Toggle arrow
navLink.addEventListener("click", () => {
  subNav.classList.toggle("subNavDisplay");
  if (arrowTransform.classList.contains("arrowTransform")) {
    arrowTransform.classList.remove("arrowTransform");
  } else {
    arrowTransform.classList.add("arrowTransform");
  }
});

// Mobile

const navMobileLink = document.querySelector(".hamburgerIcon");

const subNavMobile = document.querySelector(".subNavMobileContainer");

const navMobileItem = document.querySelector(".navMobileItemConnect");

const subNavContent = document.querySelector(".subNavMobileContent");

const arrowLink = document.querySelector(".arrowMobileConnect");

const iconClose = document.querySelector(".iconClose");
const iconOpen = document.querySelector(".iconOpen");

// Toggle Dropdown
navMobileLink.addEventListener("click", () => {
  subNavMobile.classList.toggle("subNavMobileDisplay");
  if (iconOpen.classList.contains("iconCloseDisplay")) {
    iconOpen.classList.remove("iconCloseDisplay");
    iconClose.classList.add("iconCloseDisplay");
  } else {
    iconOpen.classList.add("iconCloseDisplay");
    iconClose.classList.toggle("iconCloseDisplay");
  }
});

// Toggle arrow
navMobileItem.addEventListener("click", () => {
  subNavContent.classList.toggle("subNavDisplay");
  if (arrowLink.classList.contains("arrowTransform")) {
    arrowLink.classList.remove("arrowTransform");
  } else {
    arrowLink.classList.add("arrowTransform");
  }
});
