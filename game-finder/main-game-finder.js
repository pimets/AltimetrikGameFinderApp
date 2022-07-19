const key = 'd986d6502d6e4733b26426627377541b'; 
var gamePage = 1;
var url = `https://api.rawg.io/api/games?key=${key}&page=${gamePage}`;
/* var url = './json-games-fake/fake.json' */
var cardContent  = document.querySelector(".area-cards");

/* var requestOptions = {
  method: 'GET',
  headers: new Headers({ "Content-Type": "application/json" }),
  redirect: 'follow'
}; */
// Bringing the games, make this a function
function getGames() {
  fetch(url)
  .then(response => response.json())
  .then(result => renderGames(result.results))
  .catch(function(error) {
    cardContent.innerHTML += `
  <div class='message-container'>
    <p class = 'message-error'>There is a problem with the server. Please try again later</p>
  </div>
  `
  });
}; 

getGames();

/**************** DATE function ********************/
function formatDate(timestamp) {
  // Create a date object from the timestamp
  var date = new Date(timestamp);
  // Create a list of names for the months
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  // return a formatted date
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
};
/**************** END DATE function ********************/
/* error message  */

/****** START the render game & observe the last game fot infinite scrolling ******/
/*goes though each game in the array with the FOR
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
      
      getGames(); 
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
  return genresNames; 
};
