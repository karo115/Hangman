var words;
var wordToGuess;
var guesses;

function startGame() {
    guesses = [];
    wordToGuess = getRandomWord();
    updateGuesses();
    updateSecretWord();
}

function updateSecretWord(){
    var hasWon = true;
    var progressArray = [];
    
    for(var i = 0; i < wordToGuess.length; i++){
        var letter = wordToGuess.charAt(i)

        if(guesses.indexOf(letter) != -1){
            progressArray.push(letter + "")
        } else {
            hasWon = false;
            progressArray.push("_ ")
        }
    }
        document.getElementById("word").innerHTML = progressArray.toString();
        if(hasWon == true){
            alert("You Won! The word was '" + wordToGuess + " ' it took you " + guesses.length + " guesses")
        }
}

function updateGuesses(){
    document.getElementById("guesses").innerHTML = "" + guesses.toString();
}

function makeGuess(){
    var userGuess = prompt("Enter a letter");

    if(userGuess != null && userGuess.length == 1) {
        userGuess = userGuess.toLocaleLowerCase();
        guesses.push(userGuess.charAt(0));
        updateGuesses();
        updateSecretWord();
    } else {
        alert("You can only guess 1 letter at a time, Try Again!")
    }
}

function getRandomWord() {
    words = [
    "anger",
    "basketball",
    "cactus",
    "earthquake",
    "funger",
    "ghost",
    "hope",
    "income",
    "judge",
    "lamp",
    "month",
    "north",
    "ocean",
    "plane",
    "riddle",
    "sheet",
    "thrill",
    "apple",
    "underwear",
    "vacation",
    "year"
    ]
    return words[Math.floor(Math.random() * words.length)];
}