document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.mahorka-button')
    const text = document.querySelector('.mahorka')
    const el = document.querySelector('.mahorka-not-funny')
    const img = document.querySelector('.baldurs-brick')
    const pen = document.querySelector('.pen')
    button.addEventListener('click', function() {
        if (text.innerHTML === 'Балдурс aka махорочник') {
            text.innerHTML = 'Угадай кто';
            el.classList.add('mahorka-not-funny--hidden')
            img.classList.remove('baldurs-brick--top')
            pen.classList.add('pen--hidden')
        }
        else {
            text.innerHTML = 'Балдурс aka махорочник';
            el.classList.remove('mahorka-not-funny--hidden');
            img.classList.add('baldurs-brick--top')
            pen.classList.remove('pen--hidden')
        }
    })
})