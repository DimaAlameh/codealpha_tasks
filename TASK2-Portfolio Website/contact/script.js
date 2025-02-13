document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle Hamburger Menu
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Simple Form Validation (Optional)
    const contactForm = document.querySelector("form");
  
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Your message has been sent!");
        contactForm.reset();
      });
    }
  });
  