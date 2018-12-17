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
  const jumbotronArrow = document.getElementById("jumbotronArrow");
  const nav = document.getElementsByTagName("nav")[0];
  const menuToggler = document.getElementById("menu-toggler");
  const backdrop = document.getElementById("backdrop");
  const navLinks = document.getElementsByClassName("nav-link");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const slide = document.getElementById("slide");
  const projects = document.getElementsByClassName("project");
  //Carousel
  let counter = 1;
  slide.style.transform = `translateX(${-100 * counter}%)`;
  nextButton.addEventListener("click", () => {
    if (counter >= 7) {
      return;
    }
    counter++;
    slide.style.transition = "transform .3s ease-in";
    slide.style.transform = `translateX(${-100 * counter}%)`;
  });
  prevButton.addEventListener("click", () => {
    if (counter <= 0) {
      return;
    }
    counter--;
    slide.style.transition = "transform .3s ease-in";
    slide.style.transform = `translateX(${-100 * counter}%)`;
  });
  slide.addEventListener("transitionend", () => {
    if (projects[counter].id === "fristClone") {
      counter = 1;
      slide.style.transition = "none";
      slide.style.transform = `translateX(${-100 * counter}%)`;
    }
    if (projects[counter].id === "lastClone") {
      counter = projects.length - 2;
      slide.style.transition = "none";
      slide.style.transform = `translateX(${-100 * counter}%)`;
    }
  });

  //Navigation
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      moveTo(".main", i + 2);
      closeMenu();
    });
  }
  jumbotronArrow.addEventListener("click", () => {
    moveDown(".main");
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
  const technologies = document.getElementsByClassName("logo-tech-wrapper");
  const contactLinks = document.querySelectorAll(".contact a");
  let techAlreadyShowed = false;
  let contactAlreadyShowed = false;
  //SmoothScroll
  onePageScroll(".main", {
    sectionContainer: "section",
    animationTime: 500,
    pagination: false,
    updateURL: false,
    loop: true,
    keyboard: true,
    responsiveFallback: false,
    afterMove: index => {
      if (index == 2 && !contactAlreadyShowed) {
        for (let i = 0; i < contactLinks.length; i++) {
          contactLinks[i].style.transition = `opacity .5s ease ${500 +
            i * 250}ms`;
          contactLinks[i].style.opacity = 1;
        }
        contactAlreadyShowed = true;
      }
      if (index == 3 && !techAlreadyShowed) {
        for (let i = 0; i < technologies.length; i++) {
          technologies[i].style.transition = `opacity .5s ease ${250 +
            i * 200}ms`;
          technologies[i].style.opacity = 1;
        }
        techAlreadyShowed = true;
      }
    }
  });
});
