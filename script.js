document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.content__slider--container .content__slider--line img');
    const sliderLine = document.querySelector('.content__slider--container .content__slider--line');
    const sliderNextBtn = document.querySelector('.slider__button--next');
    const sliderPrevBtn = document.querySelector('.slider__button--prev');
    const bars = document.querySelectorAll('.bar');
    let count = 0;
    let width;
    let autoSlideInterval;
    const autoSlideDelay = 3000;

    function init() {
        updateWidth();
        setEventListeners();
        startAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            if (window.innerWidth >= 1024) {
                rotateSlides('next');
            } else {
                count++;
                if (count >= images.length) {
                    count = 0;
                }
                rollSlider();
            }
            updateBars();
        }, autoSlideDelay);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resumeAutoSlide() {
        stopAutoSlide();
        startAutoSlide();
    }

    function updateWidth() {
        const containerWidth = document.querySelector('.content__slider--container').offsetWidth;
        width = window.innerWidth >= 1024 ? containerWidth / 3 : containerWidth;
        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
        adjustButtonsPosition();
    }

    function adjustButtonsPosition() {
        const sliderHeight = document.querySelector('.content__slider--container').offsetHeight;
        const buttonHeight = sliderNextBtn.offsetHeight;
        const topOffset = (sliderHeight - buttonHeight) / 1.5;

        sliderNextBtn.style.top = `${topOffset}px`;
        sliderPrevBtn.style.top = `${topOffset}px`;
    }

    function setEventListeners() {
        sliderNextBtn.addEventListener('click', () => {
            if (window.innerWidth >= 1024) {
                rotateSlides('next');
            } else {
                count++;
                if (count >= images.length) {
                    count = 0;
                }
                rollSlider();
            }
            updateBars();
            resumeAutoSlide();
        });

        sliderPrevBtn.addEventListener('click', () => {
            if (window.innerWidth >= 1024) {
                rotateSlides('prev');
            } else {
                count--;
                if (count < 0) {
                    count = images.length - 1;
                }
                rollSlider();
            }
            updateBars();
            resumeAutoSlide();
        });

        bars.forEach((bar, index) => {
            bar.addEventListener('click', () => {
                count = index;
                rollSlider();
                updateBars();
                resumeAutoSlide();
            });
        });

        window.addEventListener('resize', () => {
            updateWidth();
            adjustButtonsPosition();
        });
    }

    function rollSlider() {
        if (window.innerWidth < 1024) {
            sliderLine.style.transform = 'translateX(-' + count * width + 'px)';
        }
    }

    function updateBars() {
        bars.forEach((bar, index) => {
            bar.classList.remove('active-bar');
            if (index === count) {
                bar.classList.add('active-bar');
            }
        });
    }

    function rotateSlides(direction) {
        const slides = Array.from(sliderLine.children);
        if (direction === 'next') {
            sliderLine.appendChild(slides[0]);
            count = (count + 1) % images.length;
        } else if (direction === 'prev') {
            sliderLine.insertBefore(slides[slides.length - 1], slides[0]);
            count = (count - 1 + images.length) % images.length;
        }
        updateBars();
    }

    init();
});
