var basket;
function book(bookName, price, quantity) {
    // These are the data items they include strings and numbers
    this.book = bookName; //this refers to the object that "owns" the current code
    this.price = price;
    this.qty = quantity;
}

function createNewItem(){
  var newItem;
  book= document.getElementById('itemName').value;
  price = document.getElementById('price').value;
  quantity = document.getElementById('qty').value;

  newItem = new car(licensePlate, maker, model, color, price);
  // alert("Your car has been added to our system");
  listOfCars.push(newcar);
  // console.table(listOfCars);
  // console.log("hello "+ newCustomer());
  return listOfCars;
}
