/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
     missed = 0;
     phrases = [];
    activePhrase = null;

    constructor() {
        this.missed = 0;
        this.phrases = ['Hello World','Shaken not stirred','infinity and beyond','Greased Lightning', 'Go for broke'];
        this.activePhrase = null;
    }

    getRandomPhrase() {
        let phraseNum = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[phraseNum];
    }
    
    startGame() {
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase();
        const firstPhrase = new Phrase(this.activePhrase);
        firstPhrase.addPhraseToDisplay();
    }

    handleInteraction(button) {
        //console.log(this.activePhrase);
        console.log(button.textContent);
        console.log(this.activePhrase);
        //checkLetter()
        //showMatchedLetter()
    }

 }