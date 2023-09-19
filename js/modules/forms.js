import {postData} from '../services/services'

function forms(formSelector, openTimer) {
    
    // Forms: 

    let forms = document.querySelectorAll(formSelector)

    let message = { 
        loading: 'Загрузка',
        succes: 'Спасибо, скоро мы с Вами свяжемся',
        failture: 'Что-то пошло не так...'
    }
    
    forms.forEach(elem => {
        bindPostData(elem)
    })
    
    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault()

            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            statusMessage.textContent = message.loading
            form.append(statusMessage)

            let formData = new FormData(form)
            
            let json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/requests', json)
            .then(data => {
                    console.log(data)
                    statusMessage = message.succes
                    statusMessage.remove()
            })
            .catch(() => {
                statusMessage = message.failture
            }).finally(() => {
                form.reset()
            })
        })
    }

    // Используем fetch, GET: 

    // fetch('https://jsonplaceholder.typicode.com/todos/1')           // адрес сервера, возвращается промис, который обрабатываем, используя then 
    //     .then(response => response.json())                          // получаем response, т.е. ответ в формате json, который fetch превращает в объект js, используя метод json и возвращает промис 
    //     .then(json => console.log(json))                            // полученный объект выводим в консоль 
    

    // Используем fetch, POST: 

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: 'POST',                                             // тип запроса 
    //     body: JSON.stringify({name: 'Harry'}),                      // что отправляем: мы можем поместить как строку, так и объект, после чего переводим данные в JSON 
    //     headers: {                                                  // заголовки 
    //         'Content-type': 'application/json'
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    
    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        // .then(res => console.log(res))
}

export default forms