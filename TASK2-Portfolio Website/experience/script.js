document.addEventListener("DOMContentLoaded", () => {
    const experienceItems = document.querySelectorAll(".exp-item");
    const description = document.getElementById("exp-description");
  
    experienceItems.forEach((item) => {
      item.addEventListener("click", () => {
        description.textContent = item.getAttribute("data-desc");
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle Hamburger Menu
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Click to Show Experience Description
    const experienceItems = document.querySelectorAll(".exp-item");
    const expDescription = document.getElementById("exp-description");
  
    experienceItems.forEach((item) => {
      item.addEventListener("click", () => {
        expDescription.textContent = item.getAttribute("data-desc");
      });
    });
  });
  

