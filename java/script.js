var images = ["img/friidrott1.jpg", "img/relay.jpg", "img/100m.jpg", "img/hurdle.jpg"]; 
var currentIndex = 0; 


function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slideshow").src = images[currentIndex]; 
} 

setInterval(nextImage, 5000); 


const gallery = document.querySelector('.gallery');
const button = document.querySelector('#load-more');

const loadMoreImages = () => {
  const newImages = document.createDocumentFragment();
  for (let i = 1; i <= 3; i++) {
    const img = document.createElement('img');
    img.src = `img/image${i}.jpg`;
    newImages.appendChild(img);
  }
  gallery.appendChild(newImages);
}

button.addEventListener('click', loadMoreImages);



