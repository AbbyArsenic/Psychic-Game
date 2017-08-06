/*jshint strict:false */
//create variables
var wins = 0;
var showWin = document.getElementById("winNum");
var losses = 0;
var showLoss = document.getElementById("lossNum");
var remaining = 9;
var showLeft = document.getElementById("guessLeft");
var guesses = [];
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
            "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var psychicLetter;

var random = function() {
    psychicLetter = letters[Math.floor(Math.random() * letters.length)];
};
random();
console.log(psychicLetter);

    //gather user input from keypress
    document.onkeyup = function(e) {
        //check that there are guesses remaining and entry is a letter
        if (remaining > 0 && e.which >= 65 && e.which <= 90) {
            console.log(remaining);
            //assign key to userGuess
            var userGuess = e.key;
            //check for win condition
            if (userGuess.toUpperCase() === psychicLetter) {
                //add to win count
                wins++;
                showWin.innerHTML = wins;
                //reset guesses
                remaining = 9;
                guesses = [];
                //call new psychicLetter
                random();
                console.log(psychicLetter);
            } else {
                //add each guess to the guesses array
                guesses.push(userGuess);
                console.log(guesses);
                //decrement remaining guesses
                remaining--;
                showLeft.innerHTML = remaining;
            }
        } else if (remaining === 0) {
            //add to losses count
            losses++;
            showLoss.innerHTML = losses;
            //reset guesses
            remaining = 9;
            guesses = [];
            //call new psychicLetter
            random();
            console.log(psychicLetter);
        }
    };
//}