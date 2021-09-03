const showSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("sidebarHideAnimation");
  sidebar.classList.add("sidebarShowAnimation");
};

const hideSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("sidebarShowAnimation");
  sidebar.classList.add("sidebarHideAnimation");
};

const matchScreenSize = (screen) => {
  const sidebar = document.getElementById("sidebar");
  const menuHamburguer = document.getElementById("menubar__hamburguer");
  const menuOptions = document.getElementById("menubar__options");
  if (screen.matches) {
    sidebar.classList.remove("sidebarShowAnimation");
    menuHamburguer.classList.add("disable");
    menuOptions.classList.remove("disable");
  } else {
    menuHamburguer.classList.remove("disable");
    menuOptions.classList.add("disable");
  }
};

let screenSize = window.matchMedia("(min-width: 768px)");
matchScreenSize(screenSize);
screenSize.addEventListener("change", matchScreenSize);

window.addEventListener("scroll", function (e) {
  sidebar.classList.remove("sidebarShowAnimation");
});
