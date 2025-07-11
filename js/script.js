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
  

  
  