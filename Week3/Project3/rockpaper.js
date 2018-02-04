function getInput(){
  var user = document.getElementById("userInput").value;
  // console.log(user.options[user.selectedIndex].text);
  console.log(user);
  return user;
}

function getComputerMove(){
  var choice = ["Rock", "Paper","Scissors"];
  var i = getRandomInt(3);
  console.log(choice[i]);
  return choice[i];
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function decideWinner(){
  var usermove = getInput();
  var computer = getComputerMove();

  document.getElementById('user').innerHTML= usermove;
  document.getElementById('computer').innerHTML= computer;
  var result;

  if(usermove === computer){
          return  "The result is a tie!";
      }
      if(usermove =="Rock"){
          if(computer =="Scissors"){
            return   "Rock wins";
          }
          else{
            return   "Paper wins";
          }
      }
      if(usermove =="Paper"){
          if(computer =="Rock"){
            return   "Paper wins";
          }
          else{
            return   "Scissors wins";
          }
      }
      if(usermove =="Scissors"){
          if(computer =="Rock"){

            return   "Rock wins";
          }
          else{
            return  "Scissors wins";
          }
      }

}
function compare(){
  result = decideWinner();
  document.getElementById('winner').innerHTML=result;
}
