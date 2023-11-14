scrollHandler = () => {
  const header = document.querySelector("header");
  const logo = document.querySelector(".main-logo");
  const menu = document.querySelector(".icon-menu_mobile");

  if (window.pageYOffset > 0) {
    header.classList.remove("bg-color-blue1");
    header.classList.add("bg-color-white");

    logo.src = "src/imgs/logo_mobile_blue.svg";
    menu.src = "src/imgs/icon_menu_mobile_gray.svg";
  } else {
    header.classList.remove("bg-color-white");
    header.classList.add("bg-color-blue1");

    logo.src = "src/imgs/logo_mobile_white.svg";
    menu.src = "src/imgs/icon_menu_mobile_white.svg";
  }
};

window.addEventListener("scroll", scrollHandler);
