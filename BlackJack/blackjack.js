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
      document.getElementById('result').innerHTML= this.name + " Gets Black Jack Game Over at first draw";
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
        console.log("New card: " + this.extraCard.value +"_Of_"+this.extraCard.suit + " Total Score: " + this.totalScore);


        if(this.isbust()){
            document.getElementById('result').innerHTML="Bust: "+ this.name + " Went Bust";
            console.log("Bust: "+ this.name + " Went Bust");
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
        }
        else if(this.isWin()){
            document.getElementById('result').innerHTML= "Game Over Black Jack: " + this.name + " Won";
            console.log("Game Over: " + this.name + " Won");
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
        }
        return this.extracard;
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
    var s = "file:///C:/Users/s1800083/Desktop/Kazi/Javascript/BlackJack/cards/image/png/";
    var t = s.concat(y,z);
    var x = document.createElement("IMG");
    x.src = t;
    x.setAttribute("width", "120");
    x.setAttribute("height", "180");
    x.setAttribute("alt", y);
    return x;
  }

  function hitMe(player){
    var p1="";
    player.hit();
    p1= player.extraCard.label +"_of_"+ player.extraCard.suit;
    document.getElementById('player').appendChild(cardUI(p1));
    document.getElementById('Pscore').innerHTML= player1.totalScore;
    updateDeck();
  }

  function createPlayers(){
    // window.location.reload();
    document.getElementById("hit").disabled = false;
    document.getElementById("stand").disabled = false;
   var p1 = "";
   var p2 = "";
   var d1 = "";
   var d1="";

   player1 = new Player("Player ", drawcard(), drawcard());
   player2 = new Player("Dealer ", drawcard(), drawcard());

   listOfPlayers.push(player1);
   listOfPlayers.push(player2);


     console.log("Name: "+player1.name);
     console.log("First card "+player1.firstCard.label+ "_of_"+player1.firstCard.suit);
     p1 = player1.firstCard.label+ "_of_"+player1.firstCard.suit;
     console.log("Second card "+player1.secondCard.label+ "_of_"+player1.secondCard.suit);
     p2 = player1.secondCard.label+ "_of_"+player1.secondCard.suit;
     console.log("total "+ player1.totalScore);
     document.getElementById('player').appendChild(cardUI(p1));
     document.getElementById('player').appendChild(cardUI(p2));
     document.getElementById('Pscore').innerHTML= player1.totalScore;

     console.log("Name: "+player2.name);
     console.log("First card "+player2.firstCard.label+ "_of_"+player2.firstCard.suit);
     d1 = player2.firstCard.label+ "_of_"+player2.firstCard.suit;
     console.log("Second card "+player1.secondCard.label+ "_of_"+player2.secondCard.suit);
     d2 = player2.secondCard.label+ "_of_"+player2.secondCard.suit;
     console.log("total "+ player2.totalScore);
     document.getElementById('dealer').appendChild(cardUI(d1));
     document.getElementById('dealer').appendChild(cardUI(d2));
     document.getElementById('Dscore').innerHTML= player2.totalScore;

   updateDeck();
}

  function start(){
    document.getElementById('player').innerHTML="";
    document.getElementById('dealer').innerHTML="";
    document.getElementById('result').innerHTML="";
    console.clear();
    listOfPlayers.length = 0;
    mydeck.length= 0;
    mydeck = new Deck();
    shuffle(mydeck);
    createPlayers();
  }

  function stand(){
    var p1="";
    document.getElementById("hit").disabled = true;
    document.getElementById("stand").disabled = true;
    // First check if dealer's hand === 21
    while (player2.totalScore < 17 ){
      player2.hit();
      p1= player2.extraCard.label +"_of_"+ player2.extraCard.suit;
      document.getElementById('dealer').appendChild(cardUI(p1));
      document.getElementById('Dscore').innerHTML= player2.totalScore;
    }
      decideWinner();
  }

  function decideWinner(){
    if((player1.totalScore > 21) || (player2.totalScore > 21)){
      return console.log("Game Over");
    }
    if(player1.totalScore === player2.totalScore){
      document.getElementById('result').innerHTML= "Draw";
      return console.log("Draw");
    }
    else if(player1.totalScore > player2.totalScore){
      document.getElementById('result').innerHTML= player1.name +" wins "+ " score " +player1.totalScore;
      return console.log(player1.name +" wins "+ " score " +player1.totalScore);
    }
    else if(player2.totalScore > player1.totalScore){
      document.getElementById('result').innerHTML= player2.name+ " wins " +" score "+ player2.totalScore;
      return console.log(player2.name+ " wins " +" score "+ player2.totalScore);
    }
  }

  function updateDeck()
  {
    document.getElementById('deckcount').innerHTML = mydeck.length;
  }
