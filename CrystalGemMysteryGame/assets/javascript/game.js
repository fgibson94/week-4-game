//establish crytals with vars, image files
var CrystalGems = [
    "Ruby",
    "Sapphire",
    "Garnet",
    "YellowDi",
    "BlueDi",
    "Opal",
    "Stevonnie",
    "Sugalite",
    "Topaz"]


console.log(typeof (CrystalGems))
console.log(CrystalGems)
//pick random image file
var randomGem = CrystalGems[Math.floor(Math.random() * CrystalGems.length)];

console.log(randomGem)
//set intializing rules

var gameTotal = document.createElement("div");
gameTotal.innerHTML= 0;
console.log(gameTotal);
//function to add value of crystal to gameTotal
function addCryst() {
    //if a crystal clicked add the value to game total

    if (onclick(cryst1)){
        crystArray[0] += gameTotal;
    } 
    else if (onclick(cryst2)){
        crystArray[1] += gameTotal;
    } 
    else if (onclick(cryst3)){
        crystArray[2] += gameTotal;
    } 
    else{
        crystArray[3] += gameTotal;
    }
};
console.log(addCryst)

document.getElementById("totalvalue").appendChild(gameTotal);



var gameGoal = document.createElement("div")
gameGoal.innerHTML=Math.floor(Math.random() * 101) + 19;
console.log(gameGoal)
document.getElementById("goalvalue").appendChild(gameGoal)



//create array of player pieces
var crystArray = ["cryst1", "cryst2", "cryst3", "cryst4"]

// assign random value to crystal 1-12
for (i = 0; i < crystArray.length; i++) {
    crystArray[i] = Math.floor(Math.random() * 12) + 1;
}
console.log(crystArray)

//Create div for crystals

var cryst1 = document.createElement("p");
cryst1.innerHTML = '<img src ="assets/images/Stevonnie_with_Sword_and_Shield_by_Lenhi.png">';

var cryst2 = document.createElement("p");
cryst2.innerHTML = '<img src="assets/images/GarnetbyKmes.png" alt="Garnet">'
    ;

var cryst3 = document.createElement("p");
cryst3.innerHTML = '<img src = "assets/images/Opal_Gen_3_by_Lenhi.png">';

var cryst4 = document.createElement("p");
cryst4.innerHTML = '<img src = "assets/images/SomberDiamond_by_koo.png">';

console.log(cryst1)
console.log(cryst2)
console.log(cryst3)
console.log(cryst4)
//move crystals to html

document.getElementById("crystalgems").appendChild(cryst1);
document.getElementById("crystalgems").appendChild(cryst2);
document.getElementById("crystalgems").appendChild(cryst3);
document.getElementById("crystalgems").appendChild(cryst4);


//var randomValue = Math.floor(Math.random()*12)+1; 

// console.log(randomValue)
//give random numbers ( with each refresh)

//on click events

////add value to totals

//show total

//var for totals
////var for win
////if match win

////else loss restart


// option1-
// random number 19-120//
// 4crystals- hidden number value- 1-12//
// click- adds hidden value
// -alerts total so far
// -goal: match total to random number
// win-perfect match
// loss- too high value
// resets to different number
// reset hidden value
// resets total to 0