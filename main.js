// Mobile Menu //

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleMobileMenu)



let sliderImages = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");
var current = 0;

// Clear all images 
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = "none";
    }
}

// Init slider
function startSlide(){
    reset();
    sliderImages[0].style.display = "block";
}

// Show prev 
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next 
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}

// Left arrow click 
arrowLeft.addEventListener("click", function(){
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
})

// Right arrow click 

arrowRight.addEventListener("click", function(){
    if(current === sliderImages.length -1){
        current =- 1;
    }
    slideRight();
})

startSlide();


// Images 

const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');
const image3 = document.querySelector('.image3');
const image4 = document.querySelector('.image4');
const image5 = document.querySelector('.image5');
const image6 = document.querySelector('.image6');
const image7 = document.querySelector('.image7');
const image8 = document.querySelector('.image8');
const image9 = document.querySelector('.image9');
const image10 = document.querySelector('.image10');
const image11 = document.querySelector('.image11');
const image12 = document.querySelector('.image12');
const image13 = document.querySelector('.image13');
const image14 = document.querySelector('.image14');
const image15 = document.querySelector('.image15');

var clickedImage = () => {
    image1[0].classList.toggle('active');
}

image1.addEventListener('click', (clickedImage) => {
    image1.classList.toggle('active');
})

image2.addEventListener('click', (clickedImage) => {
    image2.classList.toggle('active');
})


image3.addEventListener('click', (clickedImage) => {
    image3.classList.toggle('active');
})


image4.addEventListener('click', (clickedImage) => {
    image4.classList.toggle('active');
})


image5.addEventListener('click', (clickedImage) => {
    image5.classList.toggle('active');
})


image6.addEventListener('click', (clickedImage) => {
    image6.classList.toggle('active');
})


image7.addEventListener('click', (clickedImage) => {
    image7.classList.toggle('active');
})


image8.addEventListener('click', (clickedImage) => {
    image8.classList.toggle('active');
})


image9.addEventListener('click', (clickedImage) => {
    image9.classList.toggle('active');
})

image10.addEventListener('click', (clickedImage) => {
    image10.classList.toggle('active');
})


image11.addEventListener('click', (clickedImage) => {
    image11.classList.toggle('active');
})


image12.addEventListener('click', (clickedImage) => {
    image12.classList.toggle('active');
})


image13.addEventListener('click', (clickedImage) => {
    image13.classList.toggle('active');
})

image14.addEventListener('click', (clickedImage) => {
    image14.classList.toggle('active');
})


image15.addEventListener('click', (clickedImage) => {
    image15.classList.toggle('active');
})




