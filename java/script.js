var images = ["img/friidrott1.jpg", "img/relay.jpg", "img/100m.jpg", "img/hurdle.jpg"]; 
var currentIndex = 0; 


function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slideshow").src = images[currentIndex]; 
} 

setInterval(nextImage, 5000); 

const burger = document.getElementById('burger')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
    
}

burger.addEventListener('click', toggleMenu)