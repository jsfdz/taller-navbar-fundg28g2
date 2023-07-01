const button = document.getElementById('button')
const menu = document.getElementById('menu')

button.addEventListener('click', function () {
  menu.classList.toggle('show')
})

menu.addEventListener('click', function (event) {
  if (event.target.classList.contains('menu-link')) {
    menu.classList.remove('show')
  }
})