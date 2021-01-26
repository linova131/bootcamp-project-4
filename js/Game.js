/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
 
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('hold your horses'),
            new Phrase('Shaken not stirred'),
            new Phrase('To Infinity and Beyond'),
            new Phrase('Close but no cigar'),
            new Phrase('Go for broke'),
            new Phrase('walking on sunshine'),
            new Phrase('curiosity Killed the Cat')];
        this.activePhrase = null;
    }
    
    //getRandomPhrase() chooses a random phrase object from the preset array greated with the game object
    getRandomPhrase() {
        let phraseNum = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[phraseNum];
    }
    
    //startGame() creates the game board, refills the hearts, and generates the empty boxes for gameplay
    startGame() {
        //reset board
        while(phraseUL.lastChild) {
            phraseUL.removeChild(phraseUL.lastChild);
        }
       for(let i=0; i<qwerty.length; i++) {
           qwerty[i].className = 'key';
           qwerty[i].disabled = false;
       };
       for(let i=0; i<5;i++){
            const heartImg = heartsList.children[i].firstElementChild;
            heartImg.src = 'images/liveHeart.png'
       };
       this.missed = 0;

        //set board
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //handleInteraction() accepts a keystroke or click and determines calls helper functions to determine
    //what game actions need to occur vis a vis right/wrong letter choices
    handleInteraction(button) {
        const isPresent = this.activePhrase.checkLetter(button);

        if(isPresent === true && button.disabled === false){
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button);
            const winCheck = this.checkForWin();
            if(winCheck){
                this.gameOver('win');
            };
        } else if (isPresent === false && button.disabled === false) {
            button.className = 'wrong';
            this.removeLife();
          };
        
        button.disabled = true;
    }
    
    //removeLife() is a helper function that handles accelerating the missed property and replaces heart images
    removeLife() {
        this.missed += 1;
        const heartNum = this.missed - 1;
        const heartImg = heartsList.children[heartNum].firstElementChild;
        heartImg.src = 'images/lostHeart.png'
      
        if (this.missed === 5) {
            this.gameOver('loss');
        };
    }

    //checkForWin() is a helper function that examines the revealed letters to determine if the player has won.
    //Returns a Boolean
    checkForWin() {
        const hiddenLetters = document.getElementsByClassName('hide');
        let didWin = false;
        if(hiddenLetters.length === 0) {
            didWin = true;
        };
        return didWin;
    }
    
    //gameOver() is a helper function that generates endgame behaviors and different endgame messages.
    gameOver(outcome) {  
        overlay.style.display = 'block';
        
        if(outcome === 'loss') {
            overlay.className = 'lose';
            if(playerName !== ''){
                gameOverMessage.textContent = `Sorry, ${playerName}, you lost!`;
            } else {
                gameOverMessage.textContent = 'Sorry! You lost.'
            };
        } else if (outcome === 'win') {
            overlay.className = 'win';
            if(playerName !== ''){
                gameOverMessage.textContent = `YOU WON, ${playerName.toUpperCase()}`;
            } else {
                gameOverMessage.textContent = 'YOU WON!!!!';
            } ;
        };
    }

 }