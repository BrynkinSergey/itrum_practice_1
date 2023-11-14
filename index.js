const setHeaderStyle = (style) => {
  const header = document.querySelector("header");
  const logo = document.querySelector(".main-logo");
  const menu = document.querySelector(".icon-menu_mobile");

  if (style === "blue") {
    header.classList.remove("bg-color-white");
    header.classList.add("bg-color-blue1");

    logo.src = "src/imgs/logo_mobile_white.svg";
    menu.src = "src/imgs/icon_menu_mobile_white.svg";
  }

  if (style === "white") {
    header.classList.remove("bg-color-blue1");
    header.classList.add("bg-color-white");

    logo.src = "src/imgs/logo_mobile_blue.svg";
    menu.src = "src/imgs/icon_menu_mobile_gray.svg";
  }
};

const scrollHandler = () => {
  if (window.pageYOffset > 0) {
    setHeaderStyle("white");
  } else {
    setHeaderStyle("blue");
  }
};

const clickMenuButtonHandler = () => {
  const modal = document.querySelector(".modal-menu");

  if (modal.style.display === "none") {
    modal.style.setProperty("display", "block");
    setHeaderStyle("white");
    window.removeEventListener("scroll", scrollHandler);
  } else {
    modal.style.setProperty("display", "none");
    setHeaderStyle("blue");
    window.addEventListener("scroll", scrollHandler);
  }
};

window.addEventListener("scroll", scrollHandler);
