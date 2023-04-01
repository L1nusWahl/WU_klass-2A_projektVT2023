const hamburgare_icon = document.getElementById('hamburgare_icon')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    hamburgare_icon.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
    
}

hamburgare_icon.addEventListener('click', toggleMenu)