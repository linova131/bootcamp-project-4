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
    console.log(newGame.activePhrase);
 
 });

qwertyDiv.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON') {
       newGame.handleInteraction(e.target);
       console.log(e.target);
    };
});

document.addEventListener('keyup', (e) => {
    console.log(e.key);
    
});
