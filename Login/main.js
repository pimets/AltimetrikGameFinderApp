/* 
login.addEventListener('submit', buttonLogin);  

function buttonLogin(e) {
   e.preventDefault();
   console.log('lpm');
} */

//Getting data from the post, see if is neccesary
fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => console.log(data)); 

// POST

var email = document.getElementById("email");
var password = document.getElementById("password");
var submit = document.getElementById("login");

submit.addEventListener("click", formSubmit);

function formSubmit(e) {
      e.preventDefault();
      // validation email && validation password
    if (validateEmail(email.value) && validatePassword(password.value)) {
    login(email.value, password.value);
    } else {
      snackbar();
    }
};

function snackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
};

function login(mail, password) {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: mail,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:3000/login", requestOptions)
    .then((response) => response.text())
    .then((result) => window.location.href = '../GameFinder/gameFinder.html') 
    .catch((error) => console.log("Something wrong happened", error));

};


