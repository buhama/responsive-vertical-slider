const sliderContainter = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightButton = document.querySelector('.right-button');
const leftButton = document.querySelector('.left-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

const width = window.innerWidth || document.documentElement.clientWidth ||
    document.body.clientWidth;

window.onresize = () => screenResize();

const screenResize = () => {
    const width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    console.log(width);
    if (width > 768) {
        console.log('we are pased 768');
        slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
        slideLeft.style.left = '0';
        slideRight.style.transform = 'translateY(0px)';
        slideLeft.style.transform = 'translateX(0px)';
    } else {
        slideLeft.style.top = '0';
        slideLeft.style.left = `-${(slidesLength - 1) * 100}vw`;
    }
}

if (width > 768) {
    slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
} else {
    slideLeft.style.left = `-${(slidesLength - 1) * 100}vw`;
}


upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));
rightButton.addEventListener('click', () => changeSlide('right'));
leftButton.addEventListener('click', () => changeSlide('left'));



const changeSlide = (direction) => {
    const sliderHeight = sliderContainter.clientHeight;
    const sliderWidth = sliderContainter.clientWidth;
    console.log(sliderHeight);
    console.log(direction);
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    } else if (direction == 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    } else if (direction == 'right') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1;
        }
    } else if (direction == 'left') {
        activeSlideIndex++;
        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0;
        }
    }

    if (direction == 'up' || direction == 'down') {
        slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`;
        slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`;
    } else if (direction == 'right' || direction == 'left') {
        slideRight.style.transform = `translateX(-${activeSlideIndex*sliderWidth}px)`;
        slideLeft.style.transform = `translateX(${activeSlideIndex*sliderWidth}px)`;
    } else {
        slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`;
        slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`;
        slideRight.style.transform = `translateX(-${activeSlideIndex*sliderWidth}px)`;
        slideLeft.style.transform = `translateX(${activeSlideIndex*sliderWidth}px)`;
    }

}