var images = ["img/friidrott1.jpg", "img/relay.jpg", "img/100m.jpg", "img/hurdle.jpg"]; 
var currentIndex = 0; 


function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slideshow").src = images[currentIndex]; 
} 

setInterval(nextImage, 5000); 




