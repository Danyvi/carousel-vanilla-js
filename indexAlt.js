const prevBtn = document.getElementById("carousel-button-prev");
const nextBtn = document.getElementById("carousel-button-next");
const slides = document.querySelectorAll('.carousel-item');

let slidePosition = 0;

const moveToPrevSlide = () => {
	slidePosition -= 1;
	if (slidePosition < 0) {
		slidePosition = 2;
		slides[0].classList.toggle('carousel-item-visible');
		slides[2].classList.toggle('carousel-item-visible');
	} else {
		slides[slidePosition+1].classList.toggle('carousel-item-visible');
		slides[slidePosition].classList.toggle('carousel-item-visible');
	}
	// console.log(slides[slidePosition]);
};

const moveToNextSlide = () => {
	slidePosition += 1;
	if (slidePosition > 2) {
		slidePosition = 0;
		slides[0].classList.toggle('carousel-item-visible');
		slides[2].classList.toggle('carousel-item-visible');
	} else {
		slides[slidePosition-1].classList.toggle('carousel-item-visible');
		slides[slidePosition].classList.toggle('carousel-item-visible');
	}
	// console.log(slides[slidePosition]);
};

prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);