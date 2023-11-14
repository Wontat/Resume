const hambuergerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton() {
  navList.classList.toggle('show')
}

hambuergerButton.addEventListener('click', toggleButton)