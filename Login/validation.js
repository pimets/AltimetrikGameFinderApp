const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');

const login = document.querySelector('.form1');


/* const form = document.querySelector('#login'); */

login.addEventListener('submit', buttonLogin);  

 function buttonLogin(evt) {
    evt.preventDefault();
    console.log('lpm');
} 

