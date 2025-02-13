document.addEventListener("DOMContentLoaded", () => {
    const projectItems = document.querySelectorAll(".project-card");
    const description = document.getElementById("project-description");
  
    projectItems.forEach((item) => {
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

  // Click to Show Project Description
  const projectItems = document.querySelectorAll(".project-card");
  const projectDescription = document.getElementById("project-description");

  projectItems.forEach((item) => {
    item.addEventListener("click", () => {
      projectDescription.textContent = item.getAttribute("data-desc");
    });
  });
});

  