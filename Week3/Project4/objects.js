
  //Prototype of a car. Each car object has these variables and functions.
  function car(licensePlate, maker, model, color, price) {
      this.licenseNumber = licensePlate; //this refers to the object that "owns" the current code
      this.manufacturer = maker;         //For example, when object called fiat calls the functions here,
      this.model = model;               //it gets different result than when an object called tesla calls these functions.
      this.paint = color;
      this.price = price;
      this.ignition = false;

      this.start = function () {
          // console.log("Vroom Vroom! " + this.getname() + " is ready to go!");
          this.ignition = true;
      }

      this.stop = function(){
          // console.log("Screech! " + this.getname() + " is stopped.");
          this.ignition = false;
      }

      this.drive = function(){
        if(this.ignition) console.log("When this baby hits 88 miles per hour... you're gonna see some serious shit");
        else console.log("Need to start the car first");
      }

      this.getname = function(){
        return this.manufacturer + " " + this.model;
      }
  }

  //Creating some sample car objects
    var fiat = new car("ABC-123", "Fiat", "Punto", "blue", 2500);
    var tesla = new car("OUI-658", "Tesla", "Model 3", "#ff2800", 50000);
    // listOfCars.push(fiat);
    // listOfCars.push(tesla);

    fiat.start(); //Note what happens when these methods are called
    fiat.drive();
    tesla.drive();
    tesla.start();
    fiat.stop();

    //Adding a new method to an existing object:
    fiat.repair = function () {
      console.log("Fiat is now repaired.");
    };

//TODO:

/*  1. Complete the function "createNewCar". The function takes data that the user input (use the DOM) and creates a new car object with this data.
    Log to the console the new car that was added.*/
  function createNewCar(){
    var newcar;
    licensePlate= document.getElementById('license-plate').value;
    maker = document.getElementById('manufacturer').value;
    model =document.getElementById('model').value;
    color = document.getElementById('paint').value;
    price = document.getElementById('price').value;

    newcar = new car(licensePlate, maker, model, color, price);
    alert("Your car has been added to our system");
    listOfCars.push(newcar);
    console.table(listOfCars);
  }
  // 2. Create an array of objects called listOfCars that contains every car object. When a user adds a car, the list should update as well.
  // Use the console.table() command to print the resulting array in console.
  var listOfCars = [car];

  // console.table(listOfCars);

  // 3. Sort the array based on the price of each car so that the cheapest cars are first in the array
  // If you struggle to come up with a sorting algorithm by yourself, use Google to find examples of how to do sorting in JavaScript

  function sortArray(){
      listOfCars.sort(function(a, b){
      return a.price-b.price;
})
    console.table(listOfCars);
    // console.log("Insert your code here.");
  }

  // 4. Create a function that allows the user to search for a specific car based on a license plate.
  function searchFromArray(){
    var results = "";
    console.table("Search results: " + results);
  }

  /*5. Create a method discount() for the car -object that returns a discounted price of the vehicle. The discounted price depends
       on the price of the car. If the price is over 20 000, discount is 25%. If it is under 5000, it is 10%. Otherwise the discount is 15%.
       console.log(tesla.discount());
       console.log(fiat.discount()); */

  /*6. Create a new object called customer() that has attributes like name, age, disposableIncome etc.,
       and methods such as buyCar(car)
    */
