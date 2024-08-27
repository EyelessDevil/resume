// Скролл вниз для кнопки

document.getElementById("contact-btn").addEventListener("click", function() {
    const nameInput = document.getElementById("name")
    const emailInput = document.getElementById("email")
    const messageInput = document.getElementById("message")

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
    

    // Удаление класса
    setTimeout(function() {
        nameInput.classList.remove("highlight")
        emailInput.classList.remove("highlight")
        messageInput.classList.remove("highlight")
    }, 2600)
})