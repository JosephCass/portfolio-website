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

allSubMenus.forEach(function (curr) {
  let currSubMenu = curr.querySelector(".sub-menu");
  curr.addEventListener("mouseover", function () {
    //If adding more sub-menus create a check to see if other sub menus are opened before opening a new sub menu

    currSubMenu.classList.add("sub-menu-active");
  });

  curr.addEventListener("mouseout", function () {
    currSubMenu.classList.remove("sub-menu-active");
  });
});

window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
