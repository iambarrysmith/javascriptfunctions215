var mpy = prompt("How many miles per year do you drive?"); 
var gas_price = prompt("What is the cost of gas per gallon in your area?");


function cost(mpg, gas, miles){
  var total = ((miles/mpg)*gas);
  total = total.toFixed(2);
  document.write("To drive a car with an MPG rating of "+mpg+ " for "+miles+ " miles at $"+gas+ " per gallon would cost "+total+ ". ")

};


cost(12, gas_price, mpy);
cost(17, gas_price, mpy);
cost(26, gas_price, mpy);
cost(29, gas_price, mpy);