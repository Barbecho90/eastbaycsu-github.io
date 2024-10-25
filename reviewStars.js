// Access the stars and output element
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Function to update rating
function gfg(n) {
    console.log("Rating selected: " + n); // Check if the function is called
    remove(); // Call remove to reset star classes
    for (let i = 0; i < n; i++) {
        stars[i].classList.add(getClass(n)); // Add the appropriate class for the rating
    }
    output.innerText = "Rating is: " + n + "/5";
}

// Function to remove existing ratings
function remove() {
    for (let i = 0; i < stars.length; i++) {
        stars[i].className = "star"; // Reset star class
    }
}

// Function to get class name based on rating
function getClass(n) {
    switch (n) {
        case 1: return "one";
        case 2: return "two";
        case 3: return "three";
        case 4: return "four";
        case 5: return "five";
        default: return "";
    }
}
