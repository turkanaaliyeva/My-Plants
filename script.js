const slidesContainer = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const totalSlides = slidesContainer.children.length;
let currentSlide = 0;

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlidePosition();
});

function updateSlidePosition() {
  const slideWidth = slidesContainer.clientWidth / totalSlides;
  slidesContainer.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function toggleNavItems() {
  var navItems = document.getElementById("navItems");
  navItems.classList.toggle("show");
}