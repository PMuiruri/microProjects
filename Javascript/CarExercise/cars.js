  var listOfCars = [];
  var header;
  var tbody;

  function Car(licensePlate, maker, model, color, price) {
      // These are the data items they include strings and numbers
      this.licenseNumber = licensePlate; //this refers to the object that "owns" the current code
      this.manufacturer = maker;         //For example, when object called fiat calls the functions here,
      this.model = model;               //it gets different result than when an object called tesla calls these functions.
      this.paint = color;
      this.price = price;

  }

  //Creating some sample car objects

    // var head = new car("License Plate", "Manufacturer", "Model", "Color", "Price");
    var fiat = new Car("ABC-123", "Fiat", "Punto", "blue", 2500);
    var tesla = new Car("OUI-658", "Tesla", "Model 3", "#ff2800", 50000);
    // listOfCars.push(head);
    listOfCars.push(fiat);
    listOfCars.push(tesla);

/*  1. Complete the function "createNewCar". The function takes data that the user input (use the DOM) and creates a new car object with this data.
    Log to the console the new car that was added.*/
  function createNewCar(){
    var newcar;
    licensePlate= document.getElementById('license-plate').value;
    maker = document.getElementById('manufacturer').value;
    model = document.getElementById('model').value;
    color = document.getElementById('paint').value;
    price = document.getElementById('price').value;

    newcar = new Car(licensePlate, maker, model, color, price);
    listOfCars.push(newcar);
    console.table(listOfCars);
    return listOfCars;
  }

  function createTable(){

      var table = document.getElementById('table');
      table.border = "1";

       var columnCount = listOfCars.length;
       console.log(columnCount);
       tbody = document.createElement('tbody');


       //Add the header row.
       var row = table.insertRow(-1);
       header = Object.keys(listOfCars[0]);

       for (var i = 0; i < header.length; i++) {
           var headerCell = document.createElement("TH");
           headerCell.innerHTML = header[i];
           row.appendChild(headerCell);
       }

       //Add the data rows.
       for (var i = 0; i < listOfCars.length; i++) {
           row = table.insertRow(-1);
           for (var j = 0; j < header.length; j++) {
               var cell = row.insertCell(-1);
               cell.innerHTML = listOfCars[i][Object.keys(listOfCars[i])[j]];
              // console.log(listOfCars[i][j]);
           }
       }
      document.getElementById("table").appendChild(tbody);
  }

  function updatTable(){
    createNewCar();
        let i = listOfCars.length-1;
        row = table.insertRow(-1);
        for (var j = 0; j < header.length; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = listOfCars[i][Object.keys(listOfCars[i])[j]];
           // console.log(listOfCars[i][j]);
        }
   document.getElementById("table").appendChild(tbody);

  }

  function deleteTable(){
    console.log(listOfCars.length-1);
    if(listOfCars.length > 0){
      document.getElementById("table").deleteRow(-1);
      document.getElementById("table").appendChild(tbody);
      listOfCars.pop();
    }
      else{
        alert('There are no more cars');
      }

    console.log(listOfCars.length-1);
  }


  // 3. Sort the array based on the price of each car so that the cheapest cars are first in the array
  // If you struggle to come up with a sorting algorithm by yourself, use Google to find examples of how to do sorting in JavaScript

  function sortArray(){
      listOfCars.sort(function(a, b){
      return a.price-b.price;
    })
    console.table(listOfCars);
    document.getElementById("table").innerHTML = "";
    createTable();
  }

  // 4. Create a function that allows the user to search for a specific car based on a license plate.
  function searchFromArray(){

    var searchValue = document.getElementById('license-plate').value;
    console.log(searchValue);

    if(searchValue == ""){
			console.log("Please enter a valid license plate number");
      return;
		}
    else{
      for(let i=0; i<listOfCars.length; i++){
          if(listOfCars[i].licenseNumber === searchValue){
            // results=listOfCars[i];
            console.table(listOfCars[i]);
            console.log("car discount: "+ car.discount(listOfCars[i]));
            return listOfCars[i];
          }
        }
        console.log("car not found");
        return;
    }
  }

  /*6. Create a new object called customer() that has attributes like name, age, disposableIncome etc.,
       and methods such as buyCar(car)
    */
    var customerList = [customer];
    function customer(custName, custAge, custIncome) {
        this.name = custName;
        this.age = custAge;
        this.income = custIncome;
    }

    function addNewCustomer(){

      custName= document.getElementById('cust-name').value;
      custAge = document.getElementById('cust-age').value;
      custIncome =document.getElementById('cust-income').value;

      var newPerson = new customer(custName, custAge,custIncome);

      customerList.push(newPerson);
      console.table(customerList);
      return
    }
    createTable();
    // customer.buyCar(car){
        // listOfCars.splice(car);
        //console.table(listOfCars);
        // console.log("Congratulations you just bought a new" +car);
    // }
