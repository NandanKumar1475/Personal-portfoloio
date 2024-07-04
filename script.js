const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".image");
const lengthOfImages = images.length;
let currentIndex = 0;

right.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % lengthOfImages;
    updateSlide();
});

left.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + lengthOfImages) % lengthOfImages;
    updateSlide();
});

function updateSlide() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Automatically update the slide every 1 second
setInterval(() => {
    currentIndex = (currentIndex + 1) % lengthOfImages;
    updateSlide();
}, 5000);

// typing animiation code 
var typed = new Typed('#element', {
    strings: ['<h4>Fronted Developer</h4>.', '&amp; <h4>Full Stack Developer</h4>.','<h4>MERN Developer </h4>','<h4>Video Editior</h4>'],
    typeSpeed: 50,
  });
