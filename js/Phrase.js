/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase){
        this.phrase = phrase.toLowerCase();
     }

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

     checkLetter(letter) {
         if(this.phrase.includes(letter.textContent)) {
            return true;
         } else {
            return false;
         }
     }

     showMatchedLetter(letter) {
         const char = letter.textContent;
         const matchBoxes = document.getElementsByClassName(char);
         
         for (let i = 0; i<matchBoxes.length; i++) {
            matchBoxes[i].classList.replace('hide','show');
         };
     }

 }