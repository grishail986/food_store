function slide({container, slide, nextArrow, prevArrow, totalCounter, currentCounter}) {
    
    // Slide: 

    let slides = document.querySelectorAll(slide),
        slider = document.querySelector(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slideIndex = 1
    
    showSlides(slideIndex)
    
    if (slides.length < 10) {
        total.textContent = `0${slides.length}`
    } else {
        total.textContent = slides.length
    }

    slider.style.position = 'relative'
    
    let indicators = document.createElement('ol'),
        dots = []
    indicators.classList.add('carousel-indicators')
    indicators.style.cssText =
    `   position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `
    slider.append(indicators)

    for (let i = 0; i < slides.length; i++) {
        let dot = document.createElement('li')
        dot.setAttribute('data-slide-to', i + 1)
        dot.style.cssText =
        `
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 30px;
        height: 6px;
        margin-right: 3px;
        margin-left: 3px;
        cursor: pointer;
        background-color: #fff;
        background-clip: padding-box;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        opacity: .5;
        transition: opacity .6s ease;
        `
        if (i == 0) {
            dot.style.opacity = 1
        }

        indicators.append(dot)
        dots.push(dot)
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }
        
        slides.forEach(elem => elem.style.display = 'none')
        slides[slideIndex - 1].style.display = ''
        
        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`
        } else {
            current.textContent = slideIndex
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n)
    }

    prev.addEventListener('click', () => {
        plusSlides(-1)
        dots.forEach(elem => elem.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
        
    })

    next.addEventListener('click', () => {
        plusSlides(1)
        dots.forEach(elem => elem.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
    })
}

export default slide