const images = document.querySelectorAll('.content__slider--container .content__slider--line img');
const sliderLine = document.querySelector('.content__slider--container .content__slider--line');
const sliderNextBtn = document.querySelector('.slider__button--next');
const sliderPrevBtn = document.querySelector('.slider__button--prev');
const bars = document.querySelectorAll('.bar');
let count = 0;
let width;

function init() {
    width = document.querySelector('.content__slider--container').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
    adjustButtonsPosition();
}

init();
window.addEventListener('resize', function () {
    init();
});

sliderNextBtn.addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
    updateBars();
});

sliderPrevBtn.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
    updateBars();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

function updateBars() {
    bars.forEach(bar => bar.classList.remove('active-bar'));
    bars[count].classList.add('active-bar');
}

function adjustButtonsPosition() {
    const sliderHeight = document.querySelector('.content__slider--container').offsetHeight;
    const buttonHeight = sliderNextBtn.offsetHeight;
    const topOffset = (sliderHeight - buttonHeight) / 1.8;

    sliderNextBtn.style.top = topOffset + 'px';
    sliderPrevBtn.style.top = topOffset + 'px';
}
