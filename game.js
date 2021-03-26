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
var defenseDisp;

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
const doneButton = document.getElementById('done');
doneButton.addEventListener('click', play);
const upgradeButton = document.getElementById('Stay');
upgradeButton.addEventListener('click', upgrade);
const attackButton = document.getElementById('Hit');
attackButton.addEventListener('click', cardBattle);
