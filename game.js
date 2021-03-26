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
var cards;
var namesDisp;
var attacksDisp;

//cards will be:
// 0. card number - number
// 1. card suit - string
// 2. name = string
// 3. color - string
// 4. picture - string
// 5. alive? - boolean
// [[1, 2][3, 4][5, 6]]

//display
var playerHealthDisp = document.getElementById('playerHand');
var enemyHealthDisp = document.getElementById('enemyHand');
var infoDisp = document.getElementById('info');


//buttons and listeners
const doneButton = document.getElementById('Start');
doneButton.addEventListener('click', Start);
const upgradeButton = document.getElementById('Stay');
upgradeButton.addEventListener('click', Stay);
const attackButton = document.getElementById('Hit');
attackButton.addEventListener('click', Hit);

function Hit
{

}
function Stay
{

}

function Start
{
      attackButton.disabled = false;
      upgradeButton.disabled = false;

      initializeCards();
      initializeDisplay();
      console.log(playerCards);
      console.log(enemyCards);
      doneButton.innerHTML = 'Done';
      doneButton.removeEventListener('click', play);
      doneButton.addEventListener('click', game Started)
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
    if (playerHand < enemyHand && Stay = true) {
        infoDisp.innerHTML = "Sorry you lost try again";
        return true;
    }
    if (playerHand > enemyHand && Stay = true) {
        infoDisp.innerHTML = "Congrats on winning";
        return true;
    }

    return false;
}
