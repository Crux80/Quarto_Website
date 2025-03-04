// Slideshow functionality
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow-container img");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Initially show the first slide
showSlide(slideIndex);


// Voting functionality
let hasVoted = false;

function vote(option) {
    if (hasVoted) {
        alert('You have already voted.');
        return;
    }

    hasVoted = true;

    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const pollResults = document.getElementById('poll-results');

    yesBtn.disabled = true;
    noBtn.disabled = true;

    pollResults.innerText = `Thank you for voting: ${option.charAt(0).toUpperCase() + option.slice(1)}`;
}

// Comment posting functionality
document.getElementById("btn-post").addEventListener("click", function () {
    const newComment = document.getElementById("new-comment").value;
    if (newComment.trim()) {
        const commentContainer = document.getElementById("comment-container");
        const commentElement = document.createElement("p");
        commentElement.innerText = newComment;
        commentContainer.appendChild(commentElement);
        document.getElementById("new-comment").value = "";
    }
});
