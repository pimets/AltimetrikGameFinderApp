const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);


const slideSize = slides[0].getBoundingClientRect();
const slideWith = slideSize.width;
//const slideWith = slides[0].getBoundingClientRect().width; this is another option
//console.log(slideWith);

// arrange the slides next to one another
/* slides[0].style.left = slideWith * 0 + 'px';
slides[1].style.left = slideWith + 1 * 'px';
slides[2].style.left = slideWith * 2 + 'px';
slides[3].style.left = slideWith * 3 + 'px';
slides[4].style.left = slideWith * 4 + 'px'; 
I can do this or a loop*/
/*the sabe code using regular named functions:
*/
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWith * index + 'px';
};
slides.forEach(setSlidePosition);
//this is an anonymus function
/* slides.forEach((slide, index) => {
    slide.style.left = slideWith * index + 'px';
}) */

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    //to paint the dots i moved the current-slide class to the actual current slide
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

}

// when I click left, moves to the next slide y moving to the right
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
});

// when I click right, moves to the next slide y moving to the left
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
});

//making the dots read the position of slide and select them
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
   
    if(!targetDot)return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot);
})




    //to move to the next slide
    /* const amountToMove = nextSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')'; */
    /* now I change the current-slide class to move to the other slide, first erase then apply to the next one*/
    /* currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide'); */
    //I replaced by the function moveToSlide


