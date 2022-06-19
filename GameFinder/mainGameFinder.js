const url = 'https://api.rawg.io/api/games?key=4f3c0ea6e4ab479a96a62ef7fb643ef2';
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

//this isn't finished and doesen't work