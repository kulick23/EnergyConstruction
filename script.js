document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.content__slider--container .content__slider--line img');
    const sliderLine = document.querySelector('.content__slider--container .content__slider--line');
    const sliderNextBtn = document.querySelector('.slider__button--next');
    const sliderPrevBtn = document.querySelector('.slider__button--prev');
    const bars = document.querySelectorAll('.bar');
    let count = 0;
    let width;

    function init() {
        updateWidth();
        setEventListeners();
    }

    function updateWidth() {
        const containerWidth = document.querySelector('.content__slider--container').offsetWidth;
        if (window.innerWidth >= 1024) {
            width = containerWidth / 3;
            sliderLine.style.width = width * images.length + 'px';
            images.forEach(item => {
                item.style.width = width + 'px';
                item.style.height = 'auto';
            });
        } else {
            width = containerWidth;
            sliderLine.style.width = width * images.length + 'px';
            images.forEach(item => {
                item.style.width = width + 'px';
                item.style.height = 'auto';
            });
        }
        rollSlider();
        adjustButtonsPosition();
    }

    function setEventListeners() {
        sliderNextBtn.addEventListener('click', function () {
            if (window.innerWidth >= 1024) {
                moveSlidesForward();
            } else {
                count++;
                if (count >= images.length) {
                    count = 0;
                }
                rollSlider();
            }
            updateBars();
        });

        sliderPrevBtn.addEventListener('click', function () {
            if (window.innerWidth >= 1024) {
                moveSlidesBackward();
            } else {
                count--;
                if (count < 0) {
                    count = images.length - 1;
                }
                rollSlider();
            }
            updateBars();
        });

        window.addEventListener('resize', function () {
            updateWidth();
        });
    }

    function moveSlidesForward() {
        const firstSlide = sliderLine.firstElementChild;
        sliderLine.appendChild(firstSlide.cloneNode(true));
        sliderLine.removeChild(firstSlide);
    }

    function moveSlidesBackward() {
        const lastSlide = sliderLine.lastElementChild;
        sliderLine.insertBefore(lastSlide.cloneNode(true), sliderLine.firstElementChild);
        sliderLine.removeChild(lastSlide);
    }

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }

    function updateBars() {
        bars.forEach((bar, index) => {
            bar.classList.remove('active-bar');
            if (index === count) {
                bar.classList.add('active-bar');
            }
        });
    }

    function adjustButtonsPosition() {
        const sliderHeight = document.querySelector('.content__slider--container').offsetHeight;
        const buttonHeight = sliderNextBtn.offsetHeight;
        const topOffset = (sliderHeight - buttonHeight) / 2;

        sliderNextBtn.style.top = `${topOffset}px`;
        sliderPrevBtn.style.top = `${topOffset}px`;
    }

    init();
});