// light mode function ********************************
let lightMode = localStorage.getItem('lightMode');
const darkLightMode = document.querySelector('.button-dark-mode');
const backgroungImage1 = document.getElementsByClassName('carousel__image1');




// set enable and disable
const enableLightMode = () => {
  // apply class to the body
  document.body.classList.add('light-mode');
  /* backgroungImage1.classList.toggle('carousel__image1-light1');  */
  //update dark mode on localStorage key&value pair lightmode&enabled
  localStorage.setItem('lightMode', 'enabled');
};

const disableLightMode = () => {
  // apply class to the body
  document.body.classList.remove('light-mode');
  //update dark mode on localStorage key&value pair lightmode&null or disable
  localStorage.setItem('lightMode', null);
};

//checking for the localStorage previus reference
if (lightMode === 'enable') {
  enableLightMode();
}

darkLightMode.addEventListener('click', () => {
  //store in localStorage
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enabled') {
    enableLightMode();
    
  } else {
    disableLightMode();
    
  }
});