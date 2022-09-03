const toggleBtn = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const toggleIcon = document.querySelector(".toggle-img");
const allSubMenus = document.querySelectorAll(".has-sub-menu");
const nav = document.querySelector("nav");

function toggleMenu() {
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    toggleIcon.src = "assets/x-solid.svg";
  } else {
    toggleIcon.src = "assets/bars-solid.svg";
  }
}

toggleBtn.addEventListener("click", toggleMenu);

const isTouchDevice = () => {
  return window.matchMedia("(pointer: coarse)").matches;
};

allSubMenus.forEach(function (curr) {
  let currSubMenu = curr.querySelector(".sub-menu");

  if (isTouchDevice()) {
    console.log("here");
    curr.addEventListener("click", function () {
      currSubMenu.classList.toggle("sub-menu-active");
    });
  } else {
    curr.addEventListener("mouseover", function () {
      //If adding more sub-menus create a check to see if other sub menus are opened before opening a new sub menu

      currSubMenu.classList.add("sub-menu-active");
    });

    curr.addEventListener("mouseout", function () {
      currSubMenu.classList.remove("sub-menu-active");
    });

    curr.addEventListener("click", function () {});
  }
});
