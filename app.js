// Selecting html elements

const iconToggle = document.querySelector(".toggle_icon");
const navbarMenu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu_link");
const iconClose = document.querySelector(".close_icon");

iconToggle.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

iconClose.addEventListener("click", () => {
  navbarMenu.classList.remove("active");
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    navbarMenu.classList.remove("active");
  });
});

// Form Validation
const form = document.getElementById("myForm");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function (event) {
  if (!form.checkValidity()) {
    event.preventDefault();
    alert("Please fill out all the required fields.");
  } else {
    alert("Form submitted successfully.");
  }
});

let swiper = new Swiper(".mySwiper", {
  effect: "slide",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    400: {
      slidesPerView: 2,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next-uniq",
    prevEl: ".swiper-button-prev-uniq",
    clickable: true,
  },
});

// dropdown

function show_hide() {
  var click = document.getElementById("list-items");
  if (click.style.display === "none") {
    click.style.display = "block";
  } else {
    click.style.display = "none";
  }
}
