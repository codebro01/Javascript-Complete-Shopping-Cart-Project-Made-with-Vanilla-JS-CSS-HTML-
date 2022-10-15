



let toggleDropdown = document.querySelector('#toggle-dropdown');
toggleDropdown.addEventListener('click', () => {
  document.querySelector('.nav-dropdown').classList.toggle('show-nav-dropdown')
})

// control for mobile search

const searchBox = document.querySelector(".searchbox-mobiles");

searchBox.addEventListener("click", () => {
  searchBox.classList.toggle("show-mobile-search");
});
// control for sidenav on small screens

small_screen_sidenav = () => {

  const sidenav_toggler = document.querySelector(".sidenav-toggler"),
  side_nav = document.querySelector(".fixed-sidenav"),
  body = document.querySelector("body"),
  main = document.querySelector("main");
  
  sidenav_toggler.addEventListener("click", dtoggler);
  function dtoggler() {
    side_nav.classList.toggle("showSidenav");
    if (side_nav.classList.contains("showSidenav")) {

      sidenav_toggler.classList.add("is-active");
      body.style.overflow = "hidden";
      main.style.pointerEvents = "none";
    }

    if (side_nav.classList.contains("showSidenav") == false) {
      body.style.overflow = "auto";
      sidenav_toggler.classList.remove("is-active");
      main.style.pointerEvents = "all";

    }
  }
};

small_screen_sidenav();


