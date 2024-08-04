/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

function NAV() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('nav-visible'); // Toggle the visibility of the navigation menu
}

const name = document.getElementById('name')
const name = document.getElementById('email')
const name = document.getElementById('number')
const name = document.getElementById('form')
const errorElement = docucument.getElementById('error')

Form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        message.push('Name is required')
    }

    if (message.lehgth > 0) {
    e.preventDefault()
    errorElement.innerText = message.join(', ')
    }
})