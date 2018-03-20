
//GLOBAL VARIABLES//

//Array for crystal pieces
var gemArray = ["gem1", "gem2", "gem3", "gem4"]

//Pick a random gem

//Counters
var gameTotal = 0;
var gameGoal = 0;
var gameWins = 0;
var gameLosses = 0;

//Random Value Generators//

//Picks value 19-120
var randomGoal = Math.floor(Math.random() * 101) + 19;
var newValues = false;
gameGoal = randomGoal

console.log("Try to add the gems to a value of " + gameGoal)

//Picks value 1-12
// var gemRandomValue = Math.floor(Math.random()* 12) + 1;
//Loops through array to assign values to items
function crystValues(){
    for (i = 0; i < gemArray.length; i++) {
    gemArray[i] = Math.floor(Math.random() * 12) + 1;
}   
//prints values of each item
    //console.log(gemArray);
}

//Prints hidden values
//console.log(gemArray);

//HTML Updates//
//Create element with DOM
var cryst1 = document.createElement("button");
cryst1.id = "cryst1"
cryst1.innerHTML = '<img src ="assets/images/Stevonnie_with_Sword_and_Shield_by_Lenhi.png">';

var cryst2 = document.createElement("button");
cryst2.id = "cryst2";
cryst2.innerHTML = '<img src="assets/images/GarnetbyKmes.png" alt="Garnet">'
    ;
//HTML
var cryst3 = '<button id="cryst3"> <img src = "assets/images/Opal_Gen_3_by_Lenhi.png"></button>';

var cryst4 = '<button id="cryst4"> <img src = "assets/images/sapphire.png"></button>';

//Append the new elements

$("#crystalgems").append(cryst1, cryst2, cryst3, cryst4);

//div for gameGoal

$("#goalvalue").append("Goal Number:" + gameGoal)
//div for gameTotal
//$("#totalvalue").append("Number so Far:"+ gameTotal)
//div for wins and losses
//$("#scoreboard").html("Wins:"+ gameWins).append(" Losses:"+gameLosses)
//div for instructions
var rules = "<p> 'When the player clicks on a crystal, it will add a specific amount of points to the player's total score.<p> When they do click one, update the player's score counter. The player wins if their total score matches the random number <p>from the beginning of the game. The player loses if their score goes above the random number. <p>The game restarts whenever the player wins or loses.'</p>"

$("#noclass").append(rules)

//Game Functions//

//function playgame() to begin game
function playGame() {
    //function resetgame() to reset values
    function resetGame() {
        location.reload();
        var resetGoal = Math.floor(Math.random() * 101) + 19;
        resetGoal = randomGoal;
        crystValues();
    }

    //Functions to Play//
    function gameRules() {
        //functions to win if goal met or lose or continue game
        if (randomGoal === gameTotal) {
            console.log("You Win");
            gameWins++;
            console.log(gameWins);
            $("#totalvalue").html("Number so Far:" + gameTotal);
            $("#Wins").html("Wins:" + gameWins);
            //function () to reset game
            resetGame();

        }
        else if (gameTotal > randomGoal) {
            console.log("LOSER");
            gameLosses++;
            console.log(gameLosses);
            $("#Losses").html("Losses:" + gameLosses);
            resetGame();
        }
        else {
            console.log("keeptrying")
            $("#totalvalue").html("Number so Far:" + gameTotal)
        }

    }
//function click events

    //function to add values
    $("#cryst4").on("click", function () {
        gameTotal += gemArray[3];
        gameRules();
    });

    $("#cryst3").on("click", function () {
        gameTotal += gemArray[2];
        gameRules();

    })
    $("#cryst2").on("click", function () {
        gameTotal += gemArray[1];
        gameRules();

    })
    $("#cryst1").on("click", function () {
        gameTotal += gemArray[0];
        gameRules();

    });

}
crystValues();
playGame();