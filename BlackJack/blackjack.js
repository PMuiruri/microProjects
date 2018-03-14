var mydeck=[];
var randomizedDeck = [];
var card;
var listOfPlayers = [];
var player1;
var player2;
var score;

function Card(value, label, suit){
this.value = value;
this.label = label;
this.suit = suit;
}

function Deck(){
    var cards = [];
    this.label = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.label.length; n++ ) {
            if (n > 9){
                cards.push(new Card(10, this.label[n], this.suits[s]));
            }else{
                cards.push(new Card(n+1, this.label[n], this.suits[s]));
            }
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
        if (mydeck.length > 0){
            return mydeck.pop();
        }else{
            console.log("The deck could be empty, length: " + adeck.length);
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
      document.getElementById("stand").disabled = true;
      this.totalScore = this.firstCard.value + this.secondCard.value;
      console.log("Game Over at first draw");
  }else{
      this.totalScore = this.firstCard.value + this.secondCard.value;
  }

    this.hit = function(){
        this.extraCard = drawcard();
        if(this.extraCard.value == 1){
            if(this.totalScore < 11){
                this.extraCard.value = 11;
            }
        }
        this.totalScore = this.totalScore + this.extraCard.value;
        console.log("New card: " + this.extraCard.value + " Total Score: " + this.totalScore);

        if(this.isbust()){
            console.log("Bust: "+ this.name + " Went Bust");
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
        }
        else if(this.isWin()){
            console.log("Game Over: " + this.name + " Won");
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
        }
      }

        this.getValue = function(card){
          if (card.value == 1){
            if(this.totalScore > 10){
              return 11;}
            }
            else{
              return card.value;
          }
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
}


  function cardUI(y) {
    var z = ".png";
    var s = "file:///C:/Users/s1800083/Desktop/Kazi/Javascript/BlackJack/image/png/";
    var t = s.concat(y,z);
    var x = document.createElement("IMG");
    x.src = t;
    x.setAttribute("width", "120");
    x.setAttribute("height", "180");
    x.setAttribute("alt", y);
    // document.getElementById('Pcard1').appendChild(x);
    document.body.appendChild(x);
  }

  function hitMe(player){
    player.hit();

    // if(player.totalScore > 21){
    //   return console.log("Game Busted "+ player.name +" Loses " + player.totalScore);
    // }
    // else if(player.totalScore === 21){
    //   if(checkScoreWin(player.totalScore) == true){
    //     return console.log("Game over " + player.name + " wins");
    //   }
    // }
    // else{
    //   return console.log("Hit or Stand???" );
    // }
  }
  //
  // function checkScoreWin(score){
  //   if(score === 21){
  //     return true;
  //   }
  //   else{
  //     return;
  //   }
  // }

  function createPlayers(){
    document.getElementById("hit").disabled = false;
    document.getElementById("stand").disabled = false;
   var y = "";
   var n = "";

   player1 = new Player("Player ", drawcard(), drawcard());
   player2 = new Player("Dealer ", drawcard(), drawcard());

   listOfPlayers.push(player1);
   listOfPlayers.push(player2);

   for(let i = 0; i<=listOfPlayers.length-1; i++){
     console.log("Name: "+listOfPlayers[i].name);
     console.log("First card "+listOfPlayers[i].firstCard.label+ "_of_"+listOfPlayers[i].firstCard.suit);
     y = listOfPlayers[i].firstCard.label+ "_of_"+listOfPlayers[i].firstCard.suit;
     console.log("Second card "+listOfPlayers[i].secondCard.label+ "_of_"+listOfPlayers[i].secondCard.suit);
     n = listOfPlayers[i].secondCard.label+ "_of_"+listOfPlayers[i].secondCard.suit;
     console.log("total "+ listOfPlayers[i].totalScore);
     cardUI(y);
     cardUI(n);
   }

   updateDeck();
}

  function start(){
    console.clear();
    listOfPlayers.length = 0;
    mydeck.length= 0;
    mydeck = new Deck();
    shuffle(mydeck);
    createPlayers();
  }

  function stand(){
    // First check if dealer's hand === 21
    while (player2.totalScore < 17 ){
      hitMe(player2);
    }
      decideWinner();
  }

  function decideWinner(){
    if((player1.totalScore > 21) || (player2.totalScore > 21)){
      return console.log("Game Over");
    }
    if(player1.totalScore === player2.totalScore){
      return console.log("Draw");
    }
    else if(player1.totalScore > player2.totalScore){
      return console.log(player1.name +" wins "+ " score " +player1.totalScore);
    }
    else if(player2.totalScore > player1.totalScore){
      return console.log(player2.name+ " wins " +" score "+ player2.totalScore);
    }
  }

  function updateDeck()
  {
    document.getElementById('deckcount').innerHTML = mydeck.length;
  }
