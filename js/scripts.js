
//Business Logic***************************************************
var topArray = [];
var inputtedToppings = 0;

function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.priceTotal = 0;
}

var sumTop = function(topArray) {
  for (i = 0; i < topArray.length; ++i) {
    inputtedToppings += topArray[i];
  }
  return inputtedToppings;
}

Pizza.prototype.priceFig = function() {
  this.priceTotal = this.toppings + this.size;
  return this.priceTotal;
}


//User Interface Logic**********************************************

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("input:radio[name=size]:checked").val());

    // var inputtedToppings = 0;
    $("input:checkbox[name=toppings]:checked").each(function () {
      topArray.push(parseInt($(this).val()));
    });

    inputtedToppings = sumTop(topArray);

    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    newPizza.priceFig();
    $("#pizzaPrice").append("$" + newPizza.priceTotal);
  });
});





// function add(a, b) {
//   topArray.reduce(add, 0);
//   return inputtedToppings = (a + b);
// };

// var sumTop = function(topArray) {

  // if (topArray.length === 1) {
  //   return inputtedToppings = (topArray[0]);
  // }
  // else if (topArray.length === 2) {
  //   return inputtedToppings = (topArray[0] + topArray[1]);
  // }
  // else if (topArray.lenght === 3) {
  //   return inputtedToppings = (topArray[0] + topArray[1] + topArray[2]);
  // }
  // else if (topArray.length === 4) {
  //   return inputtedToppings = (topArray[0] + topArray[1] + topArray[2] + topArray[3]);
  // }
  // else {
  //   return inputtedToppings = 0;
  // }
// };
