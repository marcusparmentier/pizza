//Business Logic***************************************************

function Pizza (size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.priceTotal = 0;
}

Pizza.prototype.priceFig = function() {


  this.priceTotal = this.size + this.toppings;
  return this.priceTotal;
}



// var currentPizza = new Pizza

//User Interface Logic**********************************************

$(document).ready(function() {
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var inputtedSize = parseInt($("input:radio[name=size]:checked").val());
    var inputtedToppings = parseInt($("input:radio[name=toppings]:checked").val());
    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    newPizza.priceFig();

    $("#pizzaPrice").text(newPizza.priceTotal);
  });
});












//
// //Business Logic***************************************************
//
// function Pizza (size, toppings) {
//   this.size = size;
//   this.toppings = toppings;
//   this.priceTotal = 0;
// }
//
// Pizza.prototype.priceFig = function() {
//
//
//   this.priceTotal = this.toppings + this.size;
//   return this.priceTotal;
// }
//
//
//
// // var currentPizza = new Pizza
//
// //User Interface Logic**********************************************
//
// $(document).ready(function() {
//   $("form#pizzaForm").submit(function(event) {
//     event.preventDefault();
//
//     var inputtedSize = parseInt($("input:radio[name=size]:checked").val());
//
//     var topArray = [];
//
//     $("input:checkbox[name=toppings]:checked").each(function () {
//       debugger;
//       topArray.push(parseInt($("input:checkbox[name=toppings]:checked").val()));
//
//     });
//
//     var sumTop = function() {
//       debugger;
//       var toppings = 0;
//       if (topArray.length === 1) {
//         debugger;
//         var toppings = (topArray[0]);
//         // return inputtedToppings;
//       }
//       else if (topArray.length === 2) {
//         debugger;
//         var toppings = (topArray[0] + topArray[1]);
//         // return inputtedToppings;
//       }
//       else if (topArray.lenght === 3) {
//         toppings = (topArray[0] + topArray[1] + topArray[2]);
//         // return inputtedToppings;
//       }
//       else if (topArray.length === 4) {
//         toppings = (topArray[0] + topArray[1] + topArray[2] + topArray[3]);
//         // return inputtedToppings;
//       }
//       else {
//         debugger;
//         toppings = 0;
//         // return inputtedToppings;
//       }
//     };
//
//     var inputtedToppings = toppings;
//
//     var newPizza = new Pizza(inputtedSize, inputtedToppings);
//
//     newPizza.priceFig();
//
//     $("#pizzaPrice").text(newPizza.priceTotal);
//   });
// });
