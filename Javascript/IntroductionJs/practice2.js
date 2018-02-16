
var x;
function randomNum() {
    x = Math.floor((Math.random() * 10) + 1);
    return x;
  }

function check(){
    x= randomNum();
    var user = document.getElementById('num').value;

    if(num === x){
      return document.getElementById('demo').innerHTML = "You are Correct";
    }
    else{
      return document.getElementById('demo').innerHTML = "Sorry that is incorrect the random number is: " +x;
    }
  }
