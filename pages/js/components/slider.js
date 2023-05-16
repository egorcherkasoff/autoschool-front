class Slider {
    constructor() {
        this.leftButton = document.querySelector(".slider__arrow--left");
        this.leftButton.addEventListener("click", this.prevSlide);
        this.rightButton = document.querySelector(".slider__arrow--right");
        this.rightButton.addEventListener("click", this.nextSlide);

        this.slidesContainer = document.querySelector(".slider__slides");
        this.slidesContainer.addEventListener("touchend", this.getDeltaX);
        this.slidesContainer.addEventListener("touchstart", this.getInitX);

        this.slidesNum = document.querySelectorAll(".slider__slide").length - 1;
        this.currentSlide = 0;

        this.interval = setInterval(() => {
            this.nextSlide();
        }, 8000);
    }

    getInitX = (event) => {
        this.initX = event.touches[0].clientX;
    };
    getDeltaX = (event) => {
        const deltaX = this.initX - event.changedTouches[0].clientX;
        if (deltaX >= 70) {
            this.nextSlide();
        } else if (deltaX <= -70) {
            this.prevSlide();
        }
    };
    prevSlide = () => {
        if (this.currentSlide <= 0) {
            this.currentSlide = this.slidesNum;
        } else {
            this.currentSlide--;
        }
        this.moveSlide();
        this.resetInterval();
    };
    nextSlide = () => {
        if (this.currentSlide >= this.slidesNum) {
            this.currentSlide = 0;
        } else {
            this.currentSlide++;
        }
        this.moveSlide();
        this.resetInterval();
    };
    moveSlide = () => {
        this.slidesContainer.style.transform = `translateX(${
            this.currentSlide * -100
        }%)`;
    };
    resetInterval = () => {
        /* when user changes slide, interval resets */
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.nextSlide();
        }, 8000);
    };
}

export default Slider;
