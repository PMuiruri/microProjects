function main(){

    console.log("Simple Adding");
    console.log(simpleAdding(12));
    console.log(simpleAdding(16));
    console.log(simpleAdding(20));
    console.log(simpleAdding(100));
    console.log(simpleAdding(1000));

    console.log("Facorial");
    console.log(factorial(4));
    console.log(factorial(5));
    console.log(factorial(16));

    console.log("Largest Number");
    console.log(findLargestNumber([2,-4,0,6,10,1]));
    console.log("Smallest Number");
    console.log(findSmallestNumber([2,-4,0,6,10,1]));
    console.log("Mean");
    console.log(findMean([1,2,3]));
    console.log("Range");
    console.log(findRange([2,-4,0,6,10,1]));
    console.log("Number Included");
    console.log(contains([2,-4,0,6,10,1], 11));
 }
/*Adds every number leading up to that number together. E.g. simpleAdding(4)
  returns 10 (because 1+2+3+4 = 10).
  Use the for loop to go through every number.*/
  function simpleAdding(number){
      var result = 0;

      for (let i = 1; i <= number; i++){
        result = result+i;
      }
      return result;

  }

  /*Returns the factorial of the given number. E.g. factorial(4)
  returns 24 (because 4*3*2*1 = 24)
  Use the for loop to go through every number.*/
  function factorial(number){
      var result = 1;
      for (let i = 1; i <= number; i++){
          result =result*i;
      }
      return result;
  }

  /*Returns the Largest number in an array*/
function findLargestNumber(numberset){
    var result= numberset[0];
    for(let i=0; i<=numberset.length; i++){
        if(numberset[i] > result){
          result = numberset[i];
        }
        //console.log(result);
    }
    return result;
}

/*Returns the smallest number in an array*/
function findSmallestNumber(numberset){
  var result = numberset[0];
  for(let i=0; i<=numberset.length; i++){
      if(numberset[i] < result){
        result = numberset[i];
      }
      //console.log(result);
  }
  return result;
}
// Returns the mean of an array
function findMean(numberset){
  var length = numberset.length;
  var result = 0;

  for (let i = 0; i < numberset.length; i++){
    result = result + numberset[i];
  }
  document.getElementById('result').innerHTML=result;
  return result/length;
}

//Returns the range of an array
function findRange(numberset){
  return findLargestNumber(numberset) - findSmallestNumber(numberset);
}

//Function returns true if a number is found within the array or false if it is not
function contains(numberset, number){
  var result = false;
  for(let i=0; i < numberset.length; i++){
      if(numberset[i] === number){
        console.log(numberset[i]);
        result = true;
      }
  }
  return result;
}
