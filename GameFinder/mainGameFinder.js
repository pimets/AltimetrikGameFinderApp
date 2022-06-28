const url = 'https://api.rawg.io/api/games?key=4f3c0ea6e4ab479a96a62ef7fb643ef2';
var cardContent  = document.querySelector(".area-cards");

var requestOptions = {
  method: 'GET',
  headers: new Headers({ "Content-Type": "application/json" }),
  redirect: 'follow'
};
//I request the games from the API, this is a promise
fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => renderGames(result.results))
  .catch(error => console.log('error', error));

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
            <p class="genres-game">${games[index].genres.name} RPG</p>
        </div>    
    </div> 
    `
  }
};






  //other way of showing unfinished 

/* const url = 'https://api.rawg.io/api/games?key=4f3c0ea6e4ab479a96a62ef7fb643ef2';
const area = document.querySelector('.area.cards');


function readGames(){ 
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.results);
            for(var i=0; i < data.results.lenght; i++) {
                console.log('holargwrgergeg');
                newGame(data.results, i)
        }
    })
};



//create the function that creates each card for the game

function newGame(game, i){
    console.log('hola lpm');
    const img = document.createElement('img');
    img.src = game[i].backround_image;
    console.log('hola lpm');
    const card = document.createElement('div');
    card.appendChild(img)
    card.classList.add('card');
    area.appendChild(card);
    console.log(area);
}

//this isn't finished and doesen't work */