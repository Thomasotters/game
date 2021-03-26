/*
TODO:
1. variables for enemy/player health, damage, cards
2. functions for detecting either score is 0 or less, subtracting with button press
3. scores go down, see game win/lose message
*/

//game logic
var playerHand = 0;
var enemyHand = 0;
var cardRange = 10;
var cardBankLength = 100;

var playerCards = [];
var enemyCards = [];
var card1;
var card2;
var card3;
var card4;
var card5;
var card6;
var carde1;
var carde2;
var carde3;
var carde4;
var carde5;
var carde6;
var playerin = 0;
var enemyin = 0;

//display
var playerHealthDisp = document.getElementById('playerHand');
var enemyHealthDisp = document.getElementById('enemyHand');
var infoDisp = document.getElementById('info');


//buttons and listeners
const doneButton = document.getElementById('Start');
doneButton.addEventListener('click', Start);
const StayButton = document.getElementById('Stay');
StayButton.addEventListener('click', Stay);
const HitButton = document.getElementById('Hit');
HitButton.addEventListener('click', Hit);

function Hit ()
{
playerin ++;
if(playerin == 1)
{
  card1-name.innerHTML == parseInt(Math.random() * 10);
  //card1-attack
}
}
function Stay ()
{
HitButton.disabled = true;
}

function Start()
{
      StayButton.disabled = false;
      HitButton.disabled = false;
      console.log(playerCards);
      console.log(enemyCards);
}


function gameOver() {

    if (enemyHand > 21) {
        infoDisp.innerHTML = "Thats too many computer";
        return true;
    }
    if (playerHand > 21) {
        infoDisp.innerHTML = "Sorry you lost try again";
        return true;
    }
    if (playerHand < enemyHand && Stay == true) {
        infoDisp.innerHTML = "Sorry you lost try again";
        return true;
    }
    if (playerHand > enemyHand && Stay == true) {
        infoDisp.innerHTML = "Congrats on winning";
        return true;
    }

    return false;
}
