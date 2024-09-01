const form = document.querySelector('#myForm')
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const messageInput = document.getElementById("message")
const overlay = document.getElementById('overlay')
const popup = document.getElementById('popup')
const contact = document.getElementById("contact-btn")

// Скролл вниз для кнопки
contact.addEventListener("click", function() {
    
    // Прокрутка к секции с плавным эффектом
    nameInput.scrollIntoView({
        behavior: "smooth"
    })

    // Добавление класса для подсветки
    setTimeout(() => {
        nameInput.classList.add("highlight")  
        emailInput.classList.add("highlight")
        messageInput.classList.add("highlight")
    }, 600)
    
    setTimeout(function() {
        nameInput.classList.remove("highlight")
        emailInput.classList.remove("highlight")
        messageInput.classList.remove("highlight")
    }, 2600)
})


// Визуал для формы
form.addEventListener('submit', function(event) {
    
    event.preventDefault(); // Предотвращает отправку формы

    let isValid = true;

    // Проверка поля имени
    if (nameInput.value.trim() === '') {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    // Проверка поля email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
        window.alert('Заполните правильно форму. Ну или не заполняйте. Как хотите в принципе')
    } else {
        emailInput.classList.remove('error');
    }

    // Проверка поня сообщения
    if (messageInput.value.trim() === '') {
        messageInput.classList.add('error');
        isValid = false;
    } else {
        messageInput.classList.remove('error');
    }

    if(isValid) {

        // Вычисляет позицию для центрирования окна относительно текущего положения на странице
        const scrollY = window.scrollY || window.pageYOffset
        const viewportHeight = window.innerHeight
        const popupHeight = popup.offsetHeight

        const topPosition = scrollY + (viewportHeight - popupHeight) / 2.6

        popup.style.top = topPosition + 'px'
        popup.style.left = '50%'

        overlay.style.display = 'block'
        popup.style.display = 'block'

    
        // Класс для показа всплывающего окна с анимацией
        setTimeout(function() {
            overlay.style.opacity = '1'
            popup.classList.add('show')
        }, 10)

        // Скрывает затемнение и всплывающее окно через 3 секунды
        setTimeout(function() {
            overlay.style.opacity = '0'
            popup.classList.remove('show')
            setTimeout(function() {
                overlay.style.display = 'none'
                popup.style.display = 'none'
            }, 500) // Дает время завершиться анимации
            document.getElementById('myForm').reset() // Сбрасывает форму
        }, 3000)
    }
})

// Удаление класса error
function removeErrorClassAll() {
    document.querySelectorAll('.error').forEach((field) => field.classList.remove('error'))
}

form.addEventListener('click', removeErrorClassAll)

/*  1. Уменьшить размер авы DONE!!!
    2. Избавиться от белого фона при вставке с гугла DONE!!!
    3. Убрать залипание клавишь
    4. Обработать кнопку что-то еще
    5. Добавить ссылку на гит  
    6. Обработать отправку формы
*/