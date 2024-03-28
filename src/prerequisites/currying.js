function add(a, b) {
  return a + b;
}

// this is currying
function add1(a) {
  return function (b) {
    return a + b;
  };
}

//N => 1
console.log(add1(1)(5));

const add2 = (a) => (b) => a + b;
console.log(add2(1)(5));

const sub = (a) => (b) => a - b;
console.log(sub(5)(2));

//function currying, create a copy of functioin with preset parameters
function multiply(a, b) {
  return a * b;
}

//these two are the same, why pass this? we acutally does NOT care this, we can pass anything in, we only care about parameters
var multiplyByTwo = multiply.bind(this, 2); // it create a copy of the mutiply function with a set to 2
console.log(multiplyByTwo(3)); // 6

function _multiplyByTwo(b) {
  var a = 2;
  return a * b;
}

var multiply4 = multiply.bind(this, 2, 2);

function _multiply4() {
  var a = 2;
  var b = 2;
  return a * b;
}
console.log(multiply4(3)); // 4
