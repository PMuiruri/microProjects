var textManipulator = {};

textManipulator.checkTheDataType = function(argument){

  if (argument === null){
    return 'null';
  }

  if(argument === undefined){
    return 'need an argument';
  }
  return typeof argument;
}

textManipulator.longestWord = function(text){

  if(typeof text  != "string"){
    return null;
  }

  var textInArray = text.split(' ');
  var longest = textInArray[0];

  for (let i = 1; i< textInArray.length; i++){
        if(textInArray[i].length > longest.length){
          longest = textInArray[i];
        }
      }
  return longest;
}

textManipulator.howManyVowels = function(text){

  if(typeof text  != "string"){
    return 0;
  }

  var vowelCount = 0;
  //turn the input into a string
  var textInArray = text.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u'];


  //loop through the string
  for (let i = 0; i < textInArray.length-1; i++) {
    if(vowels.includes(textInArray[i])){
        vowelCount += 1;
      }
    }
  return vowelCount;
}


module.exports = textManipulator;
