let array = [16, 32, 64, 128, 999, 100000];
let list = [10, 16, 32, 64, 128, 999, 100000];
let hello ='hello';

// This uses the map function to double the values and find the square root of the values of an array
function mapArray(){
  let double = array.map(x => x * 2);
  let sqroot = array.map(x => Math.sqrt(x));
  console.log(double);
  console.log(sqroot);
}

// This is a function that creates an object literal from the parameters parsed into it
var myFunction = (currentValue, index)=>{
       return {'value': currentValue ,'index': index };
}

// This is a function to check if a number is divisible by 3
var divisor = (currentValue)=>{
       if(currentValue % 3 === 0){
         return 1;
       }
       else{
         return 0;
       }
}

// This is a varaiable to create a generic map function
var map = Array.prototype.map
// The generic map function is used to call back our functions
var obj = map.call(hello, myFunction);
var obj2 = map.call(array, divisor);

console.log(obj);
console.log(obj2);

mapArray();
