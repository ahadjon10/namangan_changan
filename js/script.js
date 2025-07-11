// js/script.js
document.addEventListener("DOMContentLoaded", () => {
    const path = window.location.pathname;
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach(link => {
      if (path.includes(link.getAttribute("href"))) {
        link.style.fontWeight = "bold";
      }
    });
  });
  

  
  const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
