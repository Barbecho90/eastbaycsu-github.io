let currentSlide = 0;
const slideInterval = 3000; // Change slide every 3 seconds
let intervalId;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    
    // Update currentSlide based on the index
    if (index >= slides.length) {
        currentSlide = 0; // Reset to the first slide
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Go to the last slide
    } else {
        currentSlide = index; // Set to the current index
    }
    
    // Calculate the offset for the translation
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
    clearInterval(intervalId); // Stop automatic sliding
    showSlide(currentSlide + direction);
    intervalId = setInterval(autoSlide, slideInterval); // Restart automatic sliding
}

// Automatic slide function
function autoSlide() {
    moveSlide(1); // Move to the next slide
}

// Start the automatic sliding
intervalId = setInterval(autoSlide, slideInterval);

// Initial display
showSlide(currentSlide);