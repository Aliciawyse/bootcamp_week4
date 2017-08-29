
//create random number between 19 and 120
var computerNumber;
var squareValue;
var rectangleValue;
var circleValue;
var triangleValue;
var totalScore;
var wins = 0;
var lose = 0;



//show scores on screen
function updateScreen(id, val) {
    document.getElementById(id).innerHTML = val;
}

$('.shape').click(function(evt) {

    totalScoreUpdate(this.id);
     });


//function to update totalScore
function totalScoreUpdate (theIdofCrystal) {
    if (theIdofCrystal === "square") {
        totalScore = totalScore + squareValue;
    } else if (theIdofCrystal === "rectangle"){
        totalScore = totalScore + rectangleValue;
    } else if (theIdofCrystal === "circle"){
        totalScore = totalScore + circleValue;
    } else {
        totalScore = totalScore + triangleValue;
    }
    updateScreen("totalScore", totalScore);

    checkGameStatus();
}

//function to check if game won or lost
function checkGameStatus() {
    if (totalScore > computerNumber) {
        updateScreen("loser","Uh-oh, you lost the game.");
        lose = lose + 1;
        updateScreen("loseCounter", lose);

    } else if (totalScore === computerNumber) {
        updateScreen("winner","You won the game!");
        wins = wins +1;
        updateScreen("winCounter", wins);
    }
}




//function to generate random number
function randomNumber(min, max) {
    return Math.floor((Math.random() * (max-min) + min));

}

function startGame(){
    computerNumber = randomNumber(19,120);
    squareValue = randomNumber(1,12);
    rectangleValue = randomNumber(1,12);
    circleValue = randomNumber(1,12);
    triangleValue = randomNumber(1,12);
    totalScore = 0;
    updateScreen("numberToGuess", computerNumber);
    updateScreen("totalScore", totalScore);

}

startGame();

//TODO: upon winning.. update divs and increment total wins and total losses. You need variables for wins and losses.