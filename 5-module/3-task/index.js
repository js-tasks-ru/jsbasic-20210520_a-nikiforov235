function initCarousel() {
  // ваш код...
const slideWidth = document.querySelector('.carousel__slide').offsetWidth;
const carouselArrowRight = document.querySelector('.carousel__arrow_right');
const carouselArrowLeft = document.querySelector('.carousel__arrow_left');
const carouselInner = document.querySelector('.carousel__inner'); 
const slidesCount = document.querySelectorAll('.carousel__slide').length;
let currentSlide = 0;

function setPosition (position) {
  carouselInner.style.transform = `translateX(${position + 'px'})`
}

function checkArrows () {
    carouselArrowLeft.style.display = currentSlide === 0 ? 'none': 'block'
    carouselArrowRight.style.display = currentSlide === slidesCount - 1 ? 'none': 'block'
}

function moveSlideRight () {
  if ((currentSlide + 1) < slidesCount) {
    currentSlide += 1
    setPosition(-slideWidth * currentSlide)
    checkArrows()
  } 
}
carouselArrowRight.addEventListener('click', moveSlideRight)

function moveSlideLeft () {
  if ((currentSlide - 1) >= 0) {
    currentSlide -= 1
    console.log(currentSlide, slideWidth * currentSlide)
    setPosition(-slideWidth * currentSlide)
    checkArrows(); 
  } 
}
carouselArrowLeft.addEventListener('click', moveSlideLeft);
checkArrows();
}
