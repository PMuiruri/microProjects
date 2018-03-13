var deck = null;
var randomizedDeck = [];
var player;
var dealer;

function Card(value, label, suit){
  this.value = value;
  this.label = label;
  this.suit = suit;
}

function Deck(){
    this.cards = [];
    this.label = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.label.length; n++ ) {
            if (n > 9){
                this.cards.push(new Card(10, this.label[n], this.suits[s]));
            }else{
                this.cards.push(new Card(n+1, this.label[n], this.suits[s]));
            }
        }
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
function drawcard(adeck){
    try{
        if (adeck.length > 0){
            return adeck.pop();
        }else{
            throw "The deck could be empty, length: " + adeck.length;
        }
    } catch (error){
        console.log(error);
    }
}

// Function to create a hand
function Player(myname, card1, card2) {
    card1.value = card1.value == 1? 11 : card1.value;
    card2.value = ((card1.value < 11) && (card2.value == 1))? 11 : card2.value;
    this.name = myname;
    this.firstCard = card1;
    this.secondCard = card2;
    this.extraCard = null;
    if((this.firstCard.value + this.secondCard.value) == 21){
        document.getElementById("hit").disabled = true;
        this.totalScore = this.firstCard.value + this.secondCard.value;
        console.log("Game Over at first draw");
    }else{
        this.totalScore = this.firstCard.value + this.secondCard.value;
    }

    this.hit = function(adeck){
        this.extraCard = drawcard(adeck);
        if(this.extraCard.value == 1){
            if(this.totalScore < 11){
                this.extraCard.value = 11;
            }
        }
        this.totalScore = this.totalScore + this.extraCard.value;
        console.log("Got card: " + this.extraCard.value + " Total Score: " + this.totalScore);
        if(this.isbust()){
            console.log("Bust: "+ this.name + " Went Bust");
            document.getElementById("hit").disabled = true;
        } else if(this.isWin()){
            console.log("Game Over: " + this.name + " Won");
            document.getElementById("hit").disabled = true;
        }
    }

    this.getTotalScore = function(){
        return this.totalScore;
    }

    this.isbust = function(){
        if(this.totalScore > 21){
          document.getElementById("stand").disabled = true;
            return true;
        }
        else{
            return false;
        }
    }

    this.isWin = function(){
        if(this.totalScore == 21){
            return true;
        }
        else{
            return false;
        }
    }
    this.getcard = function(adeck){
        var c = adeck.drawcard();
        console.log(c)
    }

    this.stand = function(){
        // Delete the onclick() parameter of butt
        document.getElementById("hit").disabled = true;
    }

}

//Player.getcard = function(adeck){
//        return adeck.drawcard();
//    }


function start(){
    console.clear();
    deck = new Deck();
    shuffle(deck);
    document.getElementById("hit").disabled = false; //Enable if previously deactivated
    document.getElementById("stand").disabled = false;
    player = new Player("aplayer", drawcard(deck), drawcard(deck));
    dealer = new Player("adealer", drawcard(deck), drawcard(deck));

    console.log("First card: "+player.firstCard.label+ " Of: "+player.firstCard.suit);
    console.log("Second card "+player.secondCard.label+ " Of: "+player.secondCard.suit);
    console.log("Total Score for player: " + player.totalScore);
    console.log("First card: "+dealer.firstCard.label+ " Of: "+dealer.firstCard.suit);
    console.log("Second card "+dealer.secondCard.label+ " Of: "+dealer.secondCard.suit);
    console.log("Total Score for dealer "+ dealer.totalScore);
}
// This function returns the value of the card according to game rules
function dealerTurn(){
  player.stand();
  while (dealer.totalScore < 17){
    dealer.hit(deck);
  }
  decideWinner();
}

function decideWinner(){

  if((dealer.totalscore > 21) || (player.totalScore > 21)){
    return console.log("Game Over");
  }
  else if(player.totalscore > dealer.totalScore){
    return console.log(player.name+" wins "+ "Scores: Player "+ player.totalScore+ " Dealer"+ dealer.totalScore);
  }
  else if(dealer.totalScore > player.totalScore){
    return console.log(dealer.name+" wins "+ "Scores: Dealer "+ dealer.totalScore+ " Player: "+ player.totalScore);
  }
  else if(player.totalScore == dealer.totalScore){
    return console.log(" Draw "+ "Scores: Dealer "+ dealer.totalScore+ " Player: "+ player.totalScore);
  }
}
function updateDeck()
{
  document.getElementById('deckcount').innerHTML = mydeck.length;
}
function endgame(){

}

deck = []//new Deck();
