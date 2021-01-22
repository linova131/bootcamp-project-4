/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game{
    constructor() {
        this.missed = 0
        this.phrases = ['Hello World','Shaken not stirred','infinity and beyond','Cat Lady', 'plant mom'];
        this.activePhrase = null;
    }

    startGame() {
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        
        this.activePhrase = this.getRandomPhrase();
        const firstPhrase = new Phrase(this.activePhrase);
        firstPhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let phraseNum = Math.floor(Math.random()*this.phrases.length);
        return this.phrases[phraseNum];
    }

    handleInteraction() {
        console.log('oh hey an interaction happened');
    }

 }