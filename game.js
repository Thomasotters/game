/*
TODO:
1. variables for enemy/player health, damage, cards
2. functions for detecting either score is 0 or less, subtracting with button press
3. scores go down, see game win/lose message
*/

//game logic
var playerHand = 0;
var enemyHand = 0;
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
document.getElementById("playerHand").innerHTML = "Player Hand = " + document.getElementById("card1name").innerHTML;
}
if(playerin == 2)
{
document.getElementById("card2name").innerHTML = parseInt(Math.random()*10);
//document.getElementById("playerHand").innerHTML =
}
if(playerin == 3)
{
document.getElementById("card3name").innerHTML = parseInt(Math.random()*10);
}
if(playerin == 4)
{
document.getElementById("card4name").innerHTML = parseInt(Math.random()*10);
}
if(playerin == 5)
{
document.getElementById("card5name").innerHTML = parseInt(Math.random()*10);
}
if(playerin == 6)
{
document.getElementById("card6name").innerHTML = parseInt(Math.random()*10);
}

}
function Stay ()
{
HitButton.disabled = true;
for (enemyin = 0; enemyin < 7; enemyin++) {
if(enemyin = 1)
{
  document.getElementById("card1name").innerHTML = parseInt(Math.random()*10);
}
if(enemyin = 2 && enemyHand < 17)
{
  document.getElementById("card2name").innerHTML = parseInt(Math.random()*10);
}
if(enemyin = 3 && enemyHand < 17)
{
  document.getElementById("card3name").innerHTML = parseInt(Math.random()*10);
}
if(enemyin = 4 && enemyHand < 17)
{
  
}
if(enemyin = 5 && enemyHand < 17)
{

}
if(enemyin = 6 && enemyHand < 17)
{

}
}
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
        StayButton.disabled = true;
        HitButton.disabled = true;
    }
    if (playerHand > 21) {
        infoDisp.innerHTML = "Sorry you lost try again";
        return true;
        StayButton.disabled = true;
        HitButton.disabled = true;
    }
    if (playerHand < enemyHand && Stay == true) {
        infoDisp.innerHTML = "Sorry you lost try again";
        return true;
        StayButton.disabled = true;
        HitButton.disabled = true;
    }
    if (playerHand > enemyHand && Stay == true) {
        infoDisp.innerHTML = "Congrats on winning";
        return true;
        StayButton.disabled = true;
        HitButton.disabled = true;
    }

    return false;
}
