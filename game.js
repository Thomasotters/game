/*
TODO:
1. variables for enemy/player health, damage, cards
2. functions for detecting either score is 0 or less, subtracting with button press
3. scores go down, see game win/lose message
*/

//game logic
var playerHand = 0;
var playerHand2 = 0;
var playerHand3 = 0;
var playerHand4 = 0;
var playerHand5 = 0;
var playerHand6 = 0;
var enemyHande1 = 0;
var enemyHande2 = 0;
var enemyHande3 = 0;
var enemyHande4 = 0;
var enemyHande5 = 0;
var enemyHande6 = 0;
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
document.getElementById("card1img").src = parseInt(Math.random()*4) + ".jpg";
playerHand = document.getElementById("card1name").innerHTML;
}
if(playerin == 2)
{
document.getElementById("card2name").innerHTML = parseInt(Math.random()*10);
playerHand2 = document.getElementById("card2name").innerHTML;
playerHand = (playerHand*1) + (playerHand2*1);
document.getElementById("playerHand").innerHTML = "Player Hand =" + playerHand;
document.getElementById("card2img").src = parseInt(Math.random()*4) + ".jpg";
}
if(playerin == 3)
{
document.getElementById("card3name").innerHTML = parseInt(Math.random()*10);
playerHand3 = document.getElementById("card3name").innerHTML;
playerHand = (playerHand*1) + (playerHand3*1);
document.getElementById("playerHand").innerHTML = "Player Hand =" + playerHand;
document.getElementById("card3img").src = parseInt(Math.random()*4) + ".jpg";
}
if(playerin == 4)
{
document.getElementById("card4name").innerHTML = parseInt(Math.random()*10);
playerHand4 = document.getElementById("card4name").innerHTML;
playerHand = (playerHand*1) + (playerHand4*1);
document.getElementById("playerHand").innerHTML = "Player Hand =" + playerHand;
document.getElementById("card4img").src = parseInt(Math.random()*4) + ".jpg";
}
if(playerin == 5)
{
document.getElementById("card5name").innerHTML = parseInt(Math.random()*10);
playerHand5 = document.getElementById("card5name").innerHTML;
playerHand = (playerHand*1) + (playerHand5*1);
document.getElementById("playerHand").innerHTML = "Player Hand =" + playerHand;
document.getElementById("card5img").src = parseInt(Math.random()*4) + ".jpg";
}
if(playerin == 6)
{
document.getElementById("card6name").innerHTML = parseInt(Math.random()*10);
playerHand6 = document.getElementById("card6name").innerHTML;
playerHand = (playerHand*1) + (playerHand6*1);
document.getElementById("playerHand").innerHTML = "Player Hand =" + playerHand;
document.getElementById("card6img").src = parseInt(Math.random()*4) + ".jpg";
}

}
function Stay ()
{
HitButton.disabled = true;

enemyin++;

if(enemyin = 1)
{
  document.getElementById("carde1name").innerHTML = parseInt(Math.random()*10);
  document.getElementById("enemyHand").innerHTML = "Dealer Hand = " + document.getElementById("carde1name").innerHTML;
  document.getElementById("carde1img").src = parseInt(Math.random()*4) + ".jpg";
  enemyHand = document.getElementById("carde1name").innerHTML;
}
if(enemyin = 2 && enemyHand < 17)
{
  document.getElementById("carde2name").innerHTML = parseInt(Math.random()*10);
  enemyHande2 = document.getElementById("carde2name").innerHTML;
  enemyHand = (enemyHand*1) + (enemyHande2*1);
  document.getElementById("enemyHand").innerHTML = "Dealer Hand =" + enemyHand;
  document.getElementById("carde2img").src = parseInt(Math.random()*4) + ".jpg";
}
if(enemyin = 3 && enemyHand < 17)
{
  document.getElementById("carde3name").innerHTML = parseInt(Math.random()*10);
  enemyHande3 = document.getElementById("carde3name").innerHTML;
  enemyHand = (enemyHand*1) + (enemyHande3*1);
  document.getElementById("enemyHand").innerHTML = "Dealer Hand =" + enemyHand;
  document.getElementById("carde3img").src = parseInt(Math.random()*4) + ".jpg";
}
if(enemyin = 4 && enemyHand < 17)
{
    document.getElementById("carde4name").innerHTML = parseInt(Math.random()*10);
    enemyHande4 = document.getElementById("carde4name").innerHTML;
    enemyHand = (enemyHand*1) + (enemyHande4*1);
    document.getElementById("enemyHand").innerHTML = "Dealer Hand =" + enemyHand;
    document.getElementById("carde4img").src = parseInt(Math.random()*4) + ".jpg";
}
if(enemyin = 5 && enemyHand < 17)
{
  document.getElementById("carde5name").innerHTML = parseInt(Math.random()*10);
  enemyHande5 = document.getElementById("carde5name").innerHTML;
  enemyHand = (enemyHand*1) + (enemyHande5*1);
  document.getElementById("enemyHand").innerHTML = "Dealer Hand =" + enemyHand;
  document.getElementById("carde5img").src = parseInt(Math.random()*4) + ".jpg";
}
if(enemyin = 6 && enemyHand < 17)
{
  document.getElementById("carde6name").innerHTML = parseInt(Math.random()*10);
  enemyHande6 = document.getElementById("carde6name").innerHTML;
  enemyHand = (enemyHand*1) + (enemyHande6*1);
  document.getElementById("enemyHand").innerHTML = "Dealer Hand =" + enemyHand;
  document.getElementById("carde6img").src = parseInt(Math.random()*4) + ".jpg";
}
if(enemyHand > 17)
{
  gameOver();
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
