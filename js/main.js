// ===== SHOW HEADER MENU =====
function showMenu(menuId, toggleId, closeId) {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);
  const close = document.getElementById(closeId);

  if (menu && toggle && close) {
    toggle.addEventListener("click", () => {
      menu.classList.add("show-menu");
    });
    close.addEventListener("click", () => {
      menu.classList.remove("show-menu");
    });
  }
}
showMenu("header-menu", "header-toggle", "header-close");

// ===== STICKY HEADER =====
const scrollY = window.pageYOffset;
function stickyHeader() {
  const header = document.getElementById("header");

  this.scrollY > 10
    ? header.classList.add("sticky-header")
    : header.classList.remove("sticky-header");
}
window.addEventListener("scroll", stickyHeader);

// ===== SCROLLUP SECTION =====
function scrollUp() {
  const scrollup = document.getElementById("scroll-up");

  this.scrollY > 150
    ? scrollup.classList.add("scroll-action")
    : scrollup.classList.remove("scroll-action");
}
window.addEventListener("scroll", scrollUp);
