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


// Search box click handler
const searchBox = document.getElementById("searchBox");
const searchInput = searchBox.querySelector("input");

// Toggle active class on click
searchBox.addEventListener("click", function (e) {
  e.preventDefault();
  searchBox.classList.toggle("active");
  if (searchBox.classList.contains("active")) {
    searchInput.focus(); // Focus the input when expanded
  } else {
    searchInput.value = ""; // Clear input if collapsed
  }
});


// Slide data: images and corresponding text
const slides = [
  {
    image: "img/codec.jpeg",
    title: "UITS Holds Something Something",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ducimus repudiandae saepe non dicta error aliquid id itaque asperiores quidem debitis harum officiis blanditiis repellat iure reiciendis rem, velit cupiditate!",
  },
  {
    image: "img/coding.jpg",
    title: "Another Event by UITS",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ducimus repudiandae saepe non dicta error aliquid id itaque asperiores quidem debitis harum officiis blanditiis repellat iure reiciendis rem, velit cupiditate!",
  },
  {
    image: "img/cods.jpeg",
    title: "UITS Workshop 2023",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ducimus repudiandae saepe non dicta error aliquid id itaque asperiores quidem debitis harum officiis blanditiis repellat iure reiciendis rem, velit cupiditate!",
  },
];

let currentIndex = 0; // Track the current slide
let isTransitioning = false; //prevent overlap during transitions

// Function to update the slide
function updateSlide() {
  const sliderImage = document.getElementById("sliderImage");
  const sliderText = document.getElementById("sliderText");

 // Add "hidden" class to trigger fade-out effect
 sliderImage.classList.add('hidden');
 sliderText.classList.add('hidden');

 // Wait for the fade-out transition to complete
 setTimeout(() => {
  // Update the image and text
  sliderImage.src = slides[currentIndex].image;
  sliderText.innerHTML = `<h3>${slides[currentIndex].title}</h3><p>${slides[currentIndex].text}</p>`;

  // Remove "hidden" class to trigger fade-in effect
  sliderImage.classList.remove('hidden');
  sliderText.classList.remove('hidden');
}, 1000); // Match the CSS transition duration
}


// Go to the next slide
function nextSlide() {
  if (isTransitioning) return; // Prevent multiple clicks during transition
  isTransitioning = true;

  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start
  updateSlide();

  setTimeout(() => (isTransitioning = false), 1000); // Allow transition to finish
}

// Go to the previous slide
function prevSlide() {
  if (isTransitioning) return; // Prevent multiple clicks during transition
  isTransitioning = true;

  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop to the end
  updateSlide();

  setTimeout(() => (isTransitioning = false), 1000); // Allow transition to finish
  
}

// Automatically change slides every 5 seconds
setInterval(() => {
  if (!isTransitioning) {
      nextSlide();
  }
}, 3000);



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

//PEOPLE TAB
function openRank(evt, rankName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(rankName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();

// PROJECT TAB
function openProjects(evt, projectsName) {
  var i, tabcont, tablink;
  tabcont = document.getElementsByClassName("tabcont");
  for (i = 0; i < tabcont.length; i++) {
    tabcont[i].style.display = "none";
  }
  tablink = document.getElementsByClassName("tablink");
  for (i = 0; i < tablink.length; i++) {
    tablink[i].className = tablink[i].className.replace(" active", "");
  }
  document.getElementById(projectsName).style.display = "flex";
  evt.currentTarget.className += " active";
}

// MOBILE FOR OPTION-SELECT

function updateList() {
  const category = document.getElementById("category").value;
  const namesList = document.getElementById("names-list");

  let namesHTML = "";

  if (category === "leadership") {
    namesHTML = `
      <div>
        <h3>Steve Ambuul</h3>
        <p>Director of Revenue Operations</p>
      </div>
      <div>
        <h3>Mel Phelps Cevik</h3>
        <p>Regional Director, APAC</p>
      </div>
    `;
  } else if (category === "team") {
    namesHTML = `
      <div>
        <h3>Jane Doe</h3>
        <p>Software Engineer</p>
      </div>
      <div>
        <h3>John Smith</h3>
        <p>Product Manager</p>
      </div>
    `;
  } else if (category === "advisors") {
    namesHTML = `
      <div>
        <h3>Alex Johnson</h3>
        <p>Strategy Advisor</p>
      </div>
      <div>
        <h3>Sara Lee</h3>
        <p>Business Advisor</p>
      </div>
    `;
  }

  namesList.innerHTML = namesHTML;
}
