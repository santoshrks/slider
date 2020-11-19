const carouselSlide = document.querySelector('.slider')
const carouselImages = document.querySelectorAll('.slider img')


const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");


let counter = 1;
const size = carouselImages[0].clientWidth; //getting the width of the image using clientwidth

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



next.addEventListener('click', () => {
    if(counter >= carouselImages.length -1) return
    carouselSlide.style.transition = "transform .4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})
prev.addEventListener('click', () => {
    if(counter<=0) return
    carouselSlide.style.transition = "transform .5s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

})

carouselSlide.addEventListener('transitionend', () => {
    // console.log("fired")
     console.log(carouselImages[counter]);

    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length -2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }

    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }

})