// Function to toggle visibility based on screen size
function toggleVisibility() {
    if (typeof window !== "undefined") {
      var navbarEnd = document.getElementById("navbarEnd");
      if (window.innerWidth <= 768) { // Adjust the screen width threshold as needed
        navbarEnd.classList.remove("hidden");
      } else {
        navbarEnd.classList.add("hidden");
      }
    }
  }
  
  // Call the toggleVisibility function when the window loads and when it's resized
  if (typeof window !== "undefined") {
    window.addEventListener('load', toggleVisibility);
    window.addEventListener('resize', toggleVisibility);
  }
  