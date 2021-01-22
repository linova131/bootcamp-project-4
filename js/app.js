/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 const startButton = document.getElementById('btn__reset');
 const qwertyDiv = document.getElementById('qwerty');
 const qwerty = document.getElementsByClassName('key');

startButton.addEventListener('click', ()=>{
    const newGame = new Game();
    newGame.startGame();
 });

qwertyDiv.addEventListener('click', (e) => {
    if(e.target.nodeName === 'BUTTON') {
       //newGame.handleinteraction();
    };
});

