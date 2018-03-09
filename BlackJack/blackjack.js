var mydeck;
var randomizedDeck = [];
var card;
var listOfPlayers = [];
var player1;
var player2;

function Card(value, label, suit){
  this.value = value;
  this.label = label;
  this.suit = suit;

  this.getCardValue = function(){
    let cardValue = parseInt(this.value);
    if (cardValue > 10) {
      return 10;}
      else if(cardValue == 1){
        return 11;
      }
    else {
      return cardValue;}
    }
}

function Deck(){
  var cards = [];
  this.label = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];

  for( var s = 0; s < this.suits.length; s++ ) {
    for( var n = 0; n < this.label.length; n++ ) {
      cards.push( new Card( n+1, this.label[n], this.suits[s] ) );
    }
  }

  return cards;
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
function drawcard(){
  // let index = cards.length-1;
  // return cards.splice(index, 1);
  return mydeck.pop();
}

// Function to create a hand
function Player(name) {
  this.name = name;
  this.firstCard = drawcard();
  this.secondCard = drawcard();
  this.totalScore = this.firstCard.getCardValue() + this.secondCard.getCardValue();
  this.extraCard = "";

  this.hit = function(){
      this.extraCard = drawcard();
      var card3 = this.extraCard.getCardValue();
      if(card3 === 11){
        if(this.totalScore > 10){
          card3 = 1;}
          else{
            card3 = 11;
          }

      this.totalScore = this.totalScore + card3;
      console.log("new card "+ this.extraCard.label + " of "+ this.extraCard.suit + " new score "+ this.totalScore);
      checkBustWin(this.totalScore);
      return this.totalScore;
  }

  this.getTotalScore = function(){
    return this.totalScore;
  }

  this.isbust = function(score){
    if(this.totalScore > 21){
      return true;
    }
    else{ return false;}
  }

  this.isWin = function(score){
    if(this.totalScore == 21){
      return true;
    }
    else{ return false;}
    }
  }
}
function createPlayers(){
  player1 = new Player("Player 1");
  player2 = new Player("Dealer ");

  listOfPlayers.push(player1);
  listOfPlayers.push(player2);

  // console.table(listOfPlayers);

  for(let i = 0; i<=listOfPlayers.length-1; i++){
    console.log("Name: "+listOfPlayers[i].name);
    console.log("First card "+listOfPlayers[i].firstCard.label+ " of "+listOfPlayers[i].firstCard.suit);
    console.log("Second card "+listOfPlayers[i].secondCard.label+ " of "+listOfPlayers[i].secondCard.suit);
    console.log("total "+ listOfPlayers[i].totalScore);
}
}

function start(){
  mydeck = new Deck();
  shuffle(mydeck);
  createPlayers();
}

function checkBustWin(score){
  if(score.isbust() === true){
    console.log("Game Busted "+ name.player +" wins " + player.totalScore);
  }
  else if(player.isWin() === true){
    console.log( player.name+ " has won");
  }
  return true;
}
// This function returns the value of the card according to game rules
function stand(){
  // Functions stops game and calculates the winner
  let i = listOfPlayers.length-1;
    if(checkBustWin(listOfPlayers[i]) === true){
      return console.log("Game Over");
    }
    else if(listOfPlayers[i].getTotalScore() < 17 ){
      listOfPlayers[i].hit(player2);
      if(checkBustWin(listOfPlayers[i]) ===true){
        return console.log("Game Over");
      }
    }
    else{
          return decideWinner();
        }
}

function decideWinner(){
    if(player2.totalScore === player.totalScore){
      return console.log("Draw");
    }
    else if(player2.totalScore > player.totalScore){
      return console.log("player2 wins "+ player2.totalScore);
    }
    else if(player2.totalScore < player.totalScore){
      return console.log("Player wins "+ player.totalScore);
    }
}
