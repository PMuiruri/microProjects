var mydeck;
var randomizedDeck = [];
var card;
var listOfPlayers = [];
var player;
var dealer;

function Card(value, label, suit){
  this.value = value;
  this.label = label;
  this.suit = suit;

  this.getCardValue = function(){
    let cardValue = parseInt(this.value);
    if (cardValue > 10) {
      return 10;}
    else {
      return cardValue;}
    }
}

function Deck(){
  this.cards = [];
  this.label = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];

  for( var s = 0; s < this.suits.length; s++ ) {
    for( var n = 0; n < this.label.length; n++ ) {
      this.cards.push( new Card( n+1, this.label[n], this.suits[s] ) );
    }
  }

  this.drawcard = function(){
    // let index = cards.length-1;
    // return cards.splice(index, 1);
    return this.cards.pop();
  }
  return this.cards;
}

// Function that shuffles the cards using fisher-yates random
function shuffle(array) {
  var m = array.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  console.table(array);
  return array;
}
// function that removes the top card from the deck

// Function to create a hand
function Player(mydeck) {
  this.firstCard = mydeck.drawcard();
  this.secondCard = mydeck.drawcard();
  this.totalScore = this.firstCard.getCardValue + this.secondCard.getCardValue;
  this.extraCard = "";

  this.hit = function(){
      this.extraCard = drawcard();
      // console.table();
      this.totalScore = this.totalScore + extraCard.getCardValue;
      // console.log(getCardValue(card3));
      console.log("new score "+ player.totalScore);
      if(this.isbust() === true){
        console.log("Game Bust" + player.totalScore);
      }
      else if(this.isWin() === true){
        console.log(" You have won");
      }
  }

  this.getTotalScore = function(){
    return this.totalScore;
  }

  this.isbust = function(){
    if(this.totalScore > 21){
      return true;
    }
    else{ return false;}
  }

  this.isWin = function(){
    if(this.totalScore == 21){
      return true;
    }
    else{ return false;}
  }
}

function start(){
  player = new Player();
  dealer = new Player();

  listOfPlayers.push(player);
  listOfPlayers.push(dealer);

  console.table(listOfPlayers);

  for(let i = 0; i<=listOfPlayers.length-1; i++){
    // console.log("Card 1 "+listOfPlayers[i].firstCard[0].value+ " card 2 "+listOfPlayers[i].secondCard[0].value);
    // console.log("Card 1 "+listOfPlayers[i].firstCard[0].label+ " card 2 "+listOfPlayers[i].secondCard[0].label);
    // console.log("Card 1 "+listOfPlayers[i].firstCard[0].suit+ " card 2 "+listOfPlayers[i].secondCard[0].suit);
    // console.log("Card 1 "+listOfPlayers[i].firstCard.value+ " card 2 "+listOfPlayers[i].secondCard.value);
    console.log("First card"+listOfPlayers[i].firstCard.label+ " Second card "+listOfPlayers[i].secondCard.label);
    console.log("First card"+listOfPlayers[i].firstCard.suit+ " second card "+listOfPlayers[i].secondCard.suit);
    console.log("total "+ listOfPlayers[i].totalScore);
  }
}

// This function returns the value of the card according to game rules



function stand(){
  // Functions stops game and calculates the winner

}
mydeck = new Deck();
