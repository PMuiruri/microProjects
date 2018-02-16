var text;
function split(){

  // Function to convert a string into an array
  text = document.getElementById('word').value;
  var textarray = text.split("");
  console.log(text);
  console.log(text + " when split becomes "+ textarray);
  // document.getElementById('text1').innerHTML = textarray;
  return textarray;
}

function opposite(){
  // Function to reverse string
  var backarray = [];
  var textarray1 = split();
  console.log(textarray1);

  for(i = textarray1.length-1; i>= 0; i--){
    backarray.push(textarray1[i]);
  }
  console.log("Array Backwards "+ backarray);
  return backarray;
}

function joinArray(){
  var joinarray = ""
    var backarray1 = opposite();

    for(i = 0; i < backarray1.length; i++){
      joinarray += backarray1[i];
    }
    console.log(" string Backwards "+joinarray);
    return joinarray;
}

function compare(){
  text = document.getElementById('word').value;

  var pall = false;
  var str = joinArray();

  if(text == str){
    pall = true;
  }
  if(pall === true){
    document.getElementById('text1').innerHTML = " Yes!!! it is";
  }
  else{
    document.getElementById('text1').innerHTML ="No it is not"
  }
  return
}
