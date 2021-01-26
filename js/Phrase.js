/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }

     //addPhraseToDisplay() generates the letter blocks used for gameplay, depending on chosen phrase
     addPhraseToDisplay() {
        let phraseList = document.getElementById('phrase').firstElementChild;

        for(let i = 0; i < this.phrase.length; i++){
             let li = document.createElement('li');
             if(this.phrase[i] !== ' '){
                li.className = `hide letter ${this.phrase[i]}`;
                li.textContent= `${this.phrase[i]}`
             } else if(this.phrase[i] === ' ') {
                li.className = 'space';
             }
             
             phraseList.appendChild(li);
         }
     }

     //checkLetter() is a helper function that examines a letter passed as a parameter to see if it
     // is present in the hidden phrase
     checkLetter(letter) {
         if(this.phrase.includes(letter.textContent)) {
            return true;
         } else {
            return false;
         }
     }

     //showMatchedLetter() is a helper function that changes the class of relevant letter boxes to
     //reveal the hidden letter, as the player correctly selects them
     showMatchedLetter(letter) {
         const char = letter.textContent;
         const matchBoxes = document.getElementsByClassName(char);
         
         for (let i = 0; i<matchBoxes.length; i++) {
            matchBoxes[i].classList.replace('hide','show');
         };
     }

 }