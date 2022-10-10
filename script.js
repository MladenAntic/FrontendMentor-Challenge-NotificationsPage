const markAsRead = document.querySelector('.mark-as-read')
const unreadMessagesNum = document.querySelector('.number')
const redCircle = document.querySelectorAll('.red-circle')
const persons = document.querySelectorAll('.person')

markAsRead.addEventListener('click', () => {
    unreadMessagesNum.innerText = 0
    redCircle.forEach((circle) => {
        circle.style.display = 'none'
    })

    persons.forEach((person) => {
        person.classList.remove('unread')
    })
})