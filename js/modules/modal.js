function openModal(modalSelector, openTimer) {
    let modal = document.querySelector(modalSelector)
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'

    console.log(openTimer)
    if (openTimer) {
        clearInterval(openTimer)
    }  
}

function closeModal(modalSelector) {
    let modal = document.querySelector(modalSelector)
    modal.style.display = ''
    document.body.style.overflow = ''
}

function modal(triggerSelector, modalSelector, openTimer) {

    let modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalClose = document.querySelector('[data-close]')
    
    modalTrigger.forEach(element => {
        element.addEventListener('click', () => openModal(modalSelector, openTimer))
    })

    modalClose.addEventListener ('click', () => closeModal(modalSelector))

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal(modalSelector)
        }
    })

    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape" && modal.style.display == 'block') {
            closeModal(modalSelector)
        }
    })
    
    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
            openModal(modalSelector, openTimer)
            window.removeEventListener('scroll', showModalByScroll)
       }
    }
    
    window.addEventListener('scroll', showModalByScroll)
}

export default modal
export {openModal}
export {closeModal}