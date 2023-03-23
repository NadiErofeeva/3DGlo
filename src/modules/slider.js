const slider = (params) => {

    let slideActiveClass = 'slide-active';
    let dotActiveClass = 'dot-active';

    if (params.hasOwnProperty('slideActive')) {
        slideActiveClass = params.slideActive;
    }

    if (params.hasOwnProperty('dotActive')) {
        dotActiveClass = params.dotActive;
    }


    if(params.hasOwnProperty('slider') && !document.querySelector(`.${params.slider}`)) {
        console.log('Неверный класс слайдера');
        return;
    }

    if(params.hasOwnProperty('items') && document.querySelectorAll(`.${params.items}`).length === 0) {
        console.log('Неверный класс элементов');
        return;
    }

    const sliderBlock = document.querySelector(`.${params.slider}`);
    const slides = document.querySelectorAll(`.${params.items}`);
    const timeInterval = 2000;

    let dots = [];
    let currentSlide = 0;
    let interval;

    for (let i = 0; i < slides.length; i++) {
        const newEl = document.createElement('li');
        newEl.classList.add('dot');
        if(i === 0) {
            newEl.classList.add(dotActiveClass);
        }
        document.querySelector('.portfolio-dots').append(newEl);
        dots.push(newEl);
    }


    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlide = () => {
        prevSlide(slides, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    }

    const startSlide = (timer = 1500) => {
        interval = setInterval(autoSlide, timer);
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if(!e.target.matches('.dot, .portfolio-btn')) {
            return
        }

        prevSlide(slides, currentSlide, slideActiveClass);
        prevSlide(dots, currentSlide, dotActiveClass);

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, slideActiveClass);
        nextSlide(dots, currentSlide, dotActiveClass);
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if(e.target.matches('.dot, .portfolio-btn')) {
            stopSlide();
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if(e.target.matches('.dot, .portfolio-btn')) {
            startSlide(timeInterval);
        }
    }, true)

    startSlide(timeInterval);
}

export default slider