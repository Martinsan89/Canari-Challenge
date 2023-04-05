// ------Desktop

// Connect Link
const navLink = document.querySelector(".navItemConnect");

// Dropdown
const subNav = document.querySelector(".subNav");

// Arrow link
const arrowTransform = document.querySelector(".arrowDesktopConnect");

// Toggle arrow Desktop
navLink.addEventListener("click", () => {
  subNav.classList.toggle("subNavDisplay");
  if (arrowTransform.classList.contains("arrowTransform")) {
    arrowTransform.classList.remove("arrowTransform");
  } else {
    arrowTransform.classList.add("arrowTransform");
  }
});

// -----Mobile

// Icon hamburger
const navMobileLink = document.querySelector(".hamburgerIcon");

// Container
const subNavMobile = document.querySelector(".subNavMobileContainer");

// Link 'Connect'
const navMobileItem = document.querySelector(".navMobileItemConnect");

// Dropdown
const subNavContent = document.querySelector(".subNavMobileContent");

// Arrow link
const arrowLink = document.querySelector(".arrowMobileConnect");

const iconClose = document.querySelector(".iconClose");
const iconOpen = document.querySelector(".iconOpen");

// Toggle Dropdown Mobile
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

// Toggle arrow Mobile
navMobileItem.addEventListener("click", () => {
  subNavContent.classList.toggle("subNavDisplay");
  if (arrowLink.classList.contains("arrowTransform")) {
    arrowLink.classList.remove("arrowTransform");
  } else {
    arrowLink.classList.add("arrowTransform");
  }
});
