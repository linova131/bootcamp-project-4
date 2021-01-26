/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Declaration of variables
const playerName = prompt(`Before we get started...what's your name?`);
const overlay = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
const startButton = document.getElementById('btn__reset');
const phraseUL = document.querySelector('ul');
const qwertyDiv = document.getElementById('qwerty');
const qwerty = qwertyDiv.querySelectorAll('button');
const heartsList = document.querySelector('ol');

let newGame;

//Event listener for start button, should clear 'board' and call new game
startButton.addEventListener('click', ()=>{
    newGame = new Game();
    newGame.startGame();
 
 });

//Event listener for gameplay. Tracks clicks on the onscreen keyboard.
qwertyDiv.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON') {
       newGame.handleInteraction(e.target);
    };
});

//Event listener for gameplay. Tracks physical keyboard strokes and matches them to onscreen buttons.
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

