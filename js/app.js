/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message')
const startButton = document.getElementById('btn__reset');
const phraseUL = document.querySelector('ul');
const qwertyDiv = document.getElementById('qwerty');
const qwerty = qwertyDiv.querySelectorAll('button');
const heartsList = document.querySelector('ol');
const newGame = new Game();

startButton.addEventListener('click', ()=>{
    newGame.startGame();
 
 });

qwertyDiv.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON') {
       newGame.handleInteraction(e.target);
    };
});

document.addEventListener('keyup', (e) => {
    let matchedKey = '';
    
    for(let i=0;i<qwerty.length;i++){
        if(qwerty[i].textContent === e.key){
            matchedKey = qwerty[i];
        };
    };

    if(matchedKey !== ''){
        newGame.handleInteraction(matchedKey);
    };
});
