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
document.getElementById("card1name").innerHTML = parseInt(Math.random()*10);
}
if(playerin == 2)
{
document.getElementById("card2name").innerHTML = parseInt(Math.random()*10);
}
if(playerin == 3)
{
document.getElementById("card3name").innerHTML = parseInt(Math.random()*10);
}
if(playerin == 4)
{
document.getElementById("card4name").innerHTML = parseInt(Math.random()*10);
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
