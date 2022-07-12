var gamePage = 1;
var url = `https://api.rawg.io/api/games?key=4f3c0ea6e4ab479a96a62ef7fb643ef2&page=${gamePage}`;
var cardContent  = document.querySelector(".area-cards");


// Bringing the games, make this a function
function getGames () {
  fetch(url)
  .then(response => response.json())
  .then(result => renderGames(result.results))
  .catch(error => console.log('error', error));
};
getGames();
/**************** DATE function ********************/
var formatDate = function (timestamp) {

	// Create a date object from the timestamp
	var date = new Date(timestamp);

	// Create a list of names for the months
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',	'November', 'December'];

	// return a formatted date
	return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};
/**************** END DATE function ********************/

/****** START the render game & observe the last game fot infinite scrolling ******/
/*I go though each game in the array with the FOR
Then create an HTML with innerHTML inside a var, to put it were it correspond*/

function renderGames(games) {
    for(let index = 0; index < games.length; index++) {
    cardContent.innerHTML += `
    <div class="card"> 
        <img class="card__image" src="${games[index].background_image}" alt="This is an image of ${games[index].name}">
        <div class="card__title-game">
            <h4 class="game-title">${games[index].name}</h4>
            <h6 class="game-number">#${games[index].id}</h6>
        </div>
        <div class="first-line">
            <p class="release-genres">Release date:</p>
            <p class="date-game">${formatDate(games[index].released)}</p>
            <div id="console-logo">
                <img src="./img/consolePlay.svg" alt="Playstation icon">
                <img src="./img/consoleXbox.svg" alt="Xbox icon">
                <img src="./img/consoleWindows.svg" alt="Windows icon">
            </div>
        </div>
        <div class="second-line">
            <p class="release-genres">Genres:</p>
            <p class="genres-game">${getGenres(games[index].genres)} RPG</p>
        </div>    
    </div> 
    `
  }
  const renderedGames = document.querySelectorAll(".area-cards .card");
  let lastGameOnScreen = renderedGames[renderedGames.length - 1];
  observer.observe(lastGameOnScreen);
};

//create the function observer callback
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      gamePage++;
      renderGames(result.results)
    }
  })
}, {
  rootMargin: '0px',
  threshold: 1.0
}); 

// STARTS function to get genres arrays
function getGenres(genres) {
  var genresNames = "";
  for (let index = 0; index < genres.length; index++) {
    genresNames += `${genres[index].name} `;
  }
  return getGames();
};

// light mode function ********************************
let lightMode = localStorage.getItem('lightMode');
const darkLightMode = document.querySelector('.button-dark-mode');
// see if it goes ***var mediaQueryLight = window.matchMedia('(prefers-color-scheme: light)');


// set enable and disable
const enableLightMode = () => {
  // apply class to the body
  document.body.classList.add('light-mode');
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
    console.log(lightMode);
  } else {
    disableLightMode();
    console.log(lightMode);
  }
});

