function cards() {

    // Используем классы для создания карточек меню: 

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.parent = document.querySelector(parentSelector)
        }

        render() {
            let element = document.createElement('div')
            element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
            `
            this.parent.append(element)        
        }
    }

    let getResource = async (url) => {
        let res = await fetch(url)
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json()
    }
    
    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => {
    //             new MenuCard(img, altimg, title, descr, price * 69, '.menu .container').render()
    //         })
    //     })

    axios.get('http://localhost:3000/menu')
        .then(data => {
            console.log(data)
            console.log(data.data)
            data.data.forEach(({img, altimg, title, descr, price}) => { 
                new MenuCard(img, altimg, title, descr, price * 69, '.menu .container').render()
            })
        })
}

export default cards