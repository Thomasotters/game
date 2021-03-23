var playerhand = 0;
var dealerhand = 0;
var cardrange = 11;
var cards = [[5, 3, 'bob the creature', 'daniel1.jpg', '#aaa', false], [5, 3, 'bob the creature', 'daniel1.jpg', '#aaa', false]];

//cards will be:
// 0. attack - number 
// 1. health - number
// 2. name = string
// 3. picture - string
// 4. color - string
// 5. inplay? - boolean 

//display
var playerHandDisp = document.getElementById('playerhand');
var ealerHandDisp = document.getElementById('dealerhand');
var infoDisp = document.getElementById('info');

//buttons and listeners 
var playButton = document.getElementById('play');
playButton.onclick = function(){
    play()
};
var playerTurnButton = document.getElementById('playerTurn');
playerTurnButton.onclick = function(){
    playerTurn()
};
var enemyTurnButton = document.getElementById('enemyTurn');
enemyTurnButton.onclick = function(){
    enemyTurn()
};

function play() {
    playerTurnButton.disabled = false;
    enemyTurnButton.disabled = false;
}

function playerTurn() {
    if (!gameOver()) {
    dealerhand += parseInt(Math.random() * cardRange + 1); 
    updateDisp();
    console.log("dealer is at: " + dealerhand);
    }
    gameOver();
    playerTurnButton.disabled = true;
    enemyTurnButton.disabled = false;

}

function enemyTurn() {
    if(!gameOver()) {
    playerhand += parseInt(Math.random() * cardRange + 1);
    updateDisp();
    console.log("player is at" + playerhand);
    }
    gameOver();
    enemyTurnButton.disabled = true;
    playerTurnButton.disabled = false;
}

function updateDisp() {
    playerHealthDisp.innerHTML = "Player Hand: " + playerhand;
    enemyHealthDisp.innerHTML = "Dealer Hand: " + dealerhand;
}

function gameOver() {

    if (dealerhand < playerhand && dealerhand < 22) {
        infoDisp.innerHTML = "You lost sorry dude";
        return true;
    }
    if (playerhand <dealerhand && playerhand < 22) {
        infoDisp.innerHTML = "You won let's go!";
        return true;
    }
    if (playerhand = 21)

    {
      
      infoDisp.innerHTML = "Congrats you got 21!"
      return true;
    }
    if (dealerhand = 21)
  
    {
      
      infoDisp.innerHTML = "Sorry the dealer got 21!"
      return true;
    }
    if (playerhand > 21)

    {
      
      infoDisp.innerHTML = "That is too many "
      return true;
    }
    if (playerhand = 21)

    {
      
      infoDisp.innerHTML = "You won because the dealer is bad"
      return true;
    }
    return false;
}
