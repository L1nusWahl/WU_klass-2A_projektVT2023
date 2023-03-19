var images = ["img/friidrott1.jpg", "img/relay.jpg", "img/100m.jpg", "img/hurdle.jpg"]; // add the paths of the images you want to show in the array
var currentIndex = 0; // initialize the index of the current image to 0


function nextImage() {
  currentIndex = (currentIndex + 1) % images.length; // update the index of the current image
  document.getElementById("slideshow").src = images[currentIndex]; // set the source of the image to the next image in the array
} 

setInterval(nextImage, 5000); // call the nextImage function every 3 seconds to switch between the images

const burger = document.getElementById('burger')
const nav = document.getElementById('nav-links')

function toggleMenu() {
    burger.classList.toggle('burger_toggle')
    nav.classList.toggle('nav_active')
    
}

burger.addEventListener('click', toggleMenu)