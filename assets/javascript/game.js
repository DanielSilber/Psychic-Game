


 var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


 var wins = 0;
 var losses = 0;
 var guesses = 0;
 var guessesLeft = 10;

 var computerGuess = letters[Math.floor(Math.random() * letters.length)];
 console.log(computerGuess) 

 document.onkeyup = function(event) {

     var userGuess = event.key;
     var computerGuess = letters[Math.floor(Math.random() * letters.length)]; 

 if (userGuess === computerGuess) {
     wins++;
     console.log(wins);
 }
 else {
     alert("Wrong"); {
         losses++;
         
     }
var html = 

 "<p>Guesses" + guesses + "</p>"
 "<p>Number of Guesses Left" + guessesLeft + "</p>"
 "<p>Wins" + wins + "</p>"
 "<p>Losses" + losses + "</p>"

 document.getElementById("game").innerHTML = html;
}
}




