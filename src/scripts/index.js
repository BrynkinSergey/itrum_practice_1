const blue2Color = "#192144";
const whiteColor = "#fff";

const setHeaderStyle = (style) => {
  const header = document.querySelector("header");
  const logoMobile = document.querySelector(".main-logo--mobile");
  const logoTablet = document.querySelector(".main-logo--tablet");
  const menu = document.querySelector(".icon-menu_mobile");
  const headerNavbar = document.querySelector(".header_navbar");
  const headerLogo = document.querySelector(".header_logo");

  if (style === "blue") {
    header.classList.remove("bg-color-white");
    header.classList.add("bg-color-blue");

    headerNavbar.classList.remove("font-color-blue2");
    headerNavbar.classList.add("font-color-white");

    headerLogo.style.setProperty("--after-bg", whiteColor);
    logoMobile.src = "src/imgs/header/logo_mobile_white.svg";
    logoTablet.src = "src/imgs/header/logo_tablet_white.svg";
    menu.src = "src/imgs/header/icon_menu_mobile_white.svg";
  }

  if (style === "white") {
    header.classList.remove("bg-color-blue");
    header.classList.add("bg-color-white");

    headerNavbar.classList.remove("font-color-white");
    headerNavbar.classList.add("font-color-blue2");

    headerLogo.style.setProperty("--after-bg", blue2Color);

    logoMobile.src = "src/imgs/header/logo_mobile_blue.svg";
    logoTablet.src = "src/imgs/header/logo_tablet_blue.svg";
    menu.src = "src/imgs/header/icon_menu_mobile_gray.svg";
  }

  if (style === "modal") {
    header.classList.remove("bg-color-blue");
    header.classList.add("bg-color-white");

    headerNavbar.classList.remove("font-color-white");
    headerNavbar.classList.add("font-color-blue2");

    headerLogo.style.setProperty("--after-bg", blue2Color);

    logoMobile.src = "src/imgs/header/logo_mobile_blue.svg";
    logoTablet.src = "src/imgs/header/logo_tablet_blue.svg";
    menu.src = "src/imgs/header/icon_menu_mobile_close.svg";
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
    window.removeEventListener("scroll", scrollHandler);
    modal.style.setProperty("display", "flex");
    setHeaderStyle("modal");
  } else {
    window.addEventListener("scroll", scrollHandler);
    modal.style.setProperty("display", "none");
    scrollHandler();
  }
};

window.addEventListener("scroll", scrollHandler);
