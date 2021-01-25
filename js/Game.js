/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
 
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('Hello World'),
            new Phrase('Shaken not stirred'),
            new Phrase('infinity and beyond'),
            new Phrase('Greased Lightning'),
            new Phrase('Go for broke')];
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
        this.activePhrase.addPhraseToDisplay();
    }

    handleInteraction(button) {
        //console.log(this.activePhrase);
        console.log(button.textContent);
        console.log(this.activePhrase);
        //checkLetter()
        //showMatchedLetter()
    }

 }