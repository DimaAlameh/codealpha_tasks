document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle Hamburger Menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Hover effect on the home heading
  const homeHeading = document.querySelector(".home-section h1");
  homeHeading.addEventListener("mouseover", () => {
    homeHeading.style.color = "var(--primary-light-blue)";
  });

  homeHeading.addEventListener("mouseout", () => {
    homeHeading.style.color = "var(--primary-dark-blue)";
  });

  // Dynamic Typing Effect
  const typingText = document.getElementById("typing-text");
  const phrases = ["Welcome to My Portfolio", "Explore My Projects", "Discover My Skills"];
  let phraseIndex = 0;
  let charIndex = 0;

  function typePhrase() {
    if (charIndex < phrases[phraseIndex].length) {
      typingText.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typePhrase, 100);
    } else {
      setTimeout(deletePhrase, 2000); // Wait before deleting
    }
  }

  function deletePhrase() {
    if (charIndex > 0) {
      typingText.textContent = typingText.textContent.slice(0, -1);
      charIndex--;
      setTimeout(deletePhrase, 50);
    } else {
      phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through phrases
      setTimeout(typePhrase, 500);
    }
  }

  typePhrase();
});
