// script.js
const wrapper = document.querySelector('.image-wrapper');
const images = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

// Clone the first and last image for smooth looping
const firstImage = images[0].cloneNode(true);
const lastImage = images[images.length - 1].cloneNode(true);

// Append the first image at the end and last image at the start
wrapper.appendChild(firstImage);
wrapper.insertBefore(lastImage, wrapper.firstChild);

function updateGallery() {
  const offset = -currentIndex * 100;
  wrapper.style.transition = 'transform 0.5s ease';
  wrapper.style.transform = `translateX(${offset}%)`;
}

// Move to the next image (loop to first after the last one)
nextButton.addEventListener('click', () => {
  currentIndex++;
  
  if (currentIndex === images.length) {
    wrapper.style.transition = 'none';  // No transition while resetting position
    currentIndex = 0;  // Go back to the first image
    wrapper.style.transform = `translateX(0%)`;
    setTimeout(() => {
      wrapper.style.transition = 'transform 0.5s ease';  // Re-enable smooth transition
      updateGallery();
    }, 50); // Small delay before transitioning to the first image
  } else {
    updateGallery();
  }
});

// Move to the previous image (loop to last after the first one)
prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    wrapper.style.transition = 'none';  // No transition while resetting position
    currentIndex = images.length - 1;  // Go to the last image
    wrapper.style.transform = `translateX(${-currentIndex * 100}%)`;
    setTimeout(() => {
      wrapper.style.transition = 'transform 0.5s ease';  // Re-enable smooth transition
      updateGallery();
    }, 50); // Small delay before transitioning to the last image
  } else {
    currentIndex--;
    updateGallery();
  }
});

// Resize images dynamically based on the window size
function resizeImages() {
  images.forEach(img => {
    img.style.height = window.innerWidth <= 768 ? '300px' : '500px'; // Mobile vs desktop height adjustment
    img.style.width = '100%'; // Ensure full width
  });
}

window.addEventListener('load', () => {
  resizeImages(); // Resize on page load
});

window.addEventListener('resize', () => {
  resizeImages(); // Resize on window resize
});
