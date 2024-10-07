// NAV ACTIVE

// Select all the navigation links
const navLinks = document.querySelectorAll('.nav-link');

 // Add click event listener to each link
 navLinks.forEach(link => {
     link.addEventListener('click', function() {
         // Remove active class from all links
         navLinks.forEach(link => link.classList.remove('active'));
        
         // Add active class to the clicked link
         this.classList.add('active');
     });
 });


// BACK TO TOP
// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 150
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

// Scroll to the top when the user clicks the button
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// To play video thumbnail on hover
document.querySelectorAll(".video-thumbnail").forEach((thumbnail) => {
  const video = thumbnail.querySelector("video");

  thumbnail.addEventListener("mouseover", () => {
    video.play();
  });

  thumbnail.addEventListener("mouseout", () => {
    video.pause();
    video.currentTime = 0;
  });
});

// GO BACK FUNCTION
function goBack() {
  window.history.back();
}

// Search box click handler
const searchBox = document.getElementById('searchBox');
const searchInput = searchBox.querySelector('input');

// Toggle active class on click
searchBox.addEventListener('click', function(e) {
    e.preventDefault();
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains('active')) {
        searchInput.focus(); // Focus the input when expanded
    } else {
        searchInput.value = ''; // Clear input if collapsed
    }
});
