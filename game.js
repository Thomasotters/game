var playerhand = 0;
var dealerhand = 0;
var cardrange = 11;
const SUITS = ["sp","cl","he","di"]
const VALUES = ["1", "2", "3","4", "5", "6","7", "8", "9","10", "J", "Q","K", "A"]

//buttons and listeners
 class Deck
{
  constructor (cards = newdeck)
  {
    this.cards = cards;
  }
}
class cards
{
  constructor(suit, value)
  {
    this.suit = suit;
    this.value = value;
  }
}
console.log(deck.cards)
function newdeck()
{
  return SUITS.flatmap(suit => {
    return VALUES.map(value ){
    return new cards(suit, value)
  }
  })
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
