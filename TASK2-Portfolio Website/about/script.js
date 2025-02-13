document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    const aboutHeading = document.querySelector(".about-section h1");
    aboutHeading.addEventListener("mouseover", () => {
      aboutHeading.style.color = "var(--primary-light-blue)";
    });
  
    aboutHeading.addEventListener("mouseout", () => {
      aboutHeading.style.color = "var(--primary-dark-blue)";
    });
  });
  