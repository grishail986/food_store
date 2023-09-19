import tabs from './modules/tabs'
import modal from './modules/modal'
import timer from './modules/timer'
import cards from './modules/cards'
import calc from './modules/calc'
import forms from './modules/forms'
import slide from './modules/slide'
import {openModal} from './modules/modal'

document.addEventListener('DOMContentLoaded', () => {

    let openTimer = setTimeout(() => openModal('.modal', openTimer), 4000)
    
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
    modal('[data-open]', '.modal', openTimer)
    timer('.timer', '2023-05-06')
    cards()
    calc()
    forms('form', openTimer)
    slide({
        container: '.offer__slider',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
    })
    
})