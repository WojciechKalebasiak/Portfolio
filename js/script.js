document.addEventListener("DOMContentLoaded", () => {
  const menuColors = [
    "#49c8a7",
    "#c84949",
    "#c89049",
    "#bdc849",
    "#49c87d",
    "#497cc8",
    "#6a49c8",
    "#ad49c8",
    "#c849b6",
    "#c84978"
  ];
  const nav = document.getElementsByTagName("nav")[0];
  const menuToggler = document.getElementById("menu-toggler");
  const backdrop = document.getElementById("backdrop");
  const navLinks = document.getElementsByClassName("nav-link");
  Array.from(navLinks).forEach(navLink => {
    navLink.addEventListener("click", closeMenu);
  });
  function closeMenu() {
    const BackdropAnimation = backdrop.animate(
      [
        { opacity: 0.8, backgroundColor: "#000" },
        { opacity: 0, backgroundColor: "#000" }
      ],
      { duration: 500 }
    );
    BackdropAnimation.onfinish = () => {
      backdrop.classList.remove("toggled");
    };
    nav.classList.remove("toggled");
    nav.style.backgroundColor = "#3f3e3e";
    menuToggler.classList.remove("fa-times");
    menuToggler.classList.add("fa-bars");
  }
  function openMenu() {
    nav.classList.add("toggled");
    nav.style.backgroundColor = menuColors[Math.floor(Math.random() * 10)];
    backdrop.classList.add("toggled");
    menuToggler.classList.remove("fa-bars");
    menuToggler.classList.add("fa-times");
  }
  menuToggler.addEventListener("click", () => {
    //Close Modal
    if (nav.classList.contains("toggled")) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  backdrop.addEventListener("click", () => {
    if (nav.classList.contains("toggled")) {
      closeMenu();
    }
  });
});
