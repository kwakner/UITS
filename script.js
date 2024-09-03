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

// Form Validation

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  var firstName = document.getElementById('firstName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var description = document.getElementById('description').value.trim();

  // Basic validation
  if (!firstName || !lastName || !email || !phone || !description) {
      alert('Please fill in all fields.');
      return;
  }

  // Email validation
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
  }

  // Phone number validation (basic, can be extended for specific formats)
  var phonePattern = /^\+?[0-9\s-]{7,15}$/;
  if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
  }

  alert('Form submitted successfully!');
  // Optionally, send data to the server here
});


// GO BACK FUNCTION
function goBack() {
  window.history.back();
}


