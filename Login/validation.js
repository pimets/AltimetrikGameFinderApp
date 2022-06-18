/* const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');

const login = document.querySelector('.form1'); */


/* const form = document.querySelector('#login'); */

  

function validateEmail(mail) {
    //Regular expression
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }
  
  function validatePassword(password) {
    //Regular expression
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/.test(
        password
      )
    ) {
      return true;
    }
    return false;
  }

