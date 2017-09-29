//Business Logic***************************************************

function Pizza (size) {
  this.size = size;
  // this.toppings = toppings;
  this.priceTotal = 0;
}

Pizza.prototype.priceFig = function() {


  this.priceTotal += this.size;
  return this.priceTotal;
}



// var currentPizza = new Pizza

//User Interface Logic**********************************************

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("input:radio[name=size]:checked").val());
    // var inputtedToppings = parseInt($("input:checkbox[name=toppings]:checked").val());
    var newPizza = new Pizza(inputtedSize);

    newPizza.priceFig();

    $("#pizzaPrice").text(newPizza.priceTotal);
  });
});
