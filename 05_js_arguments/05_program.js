// Using the square function

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

var squareRoot;

squareRoot = function (number) {
  var result = Math.sqrt(number);
  console.log("The square root of " + number + " is " + result);
};

squareRoot(9);   
squareRoot(16);  
squareRoot(25);  
squareRoot(2);  

var cube;

cube = function (numberToCube) {
  var result;
  result = numberToCube * numberToCube * numberToCube;
  console.log(numberToCube + " * " + numberToCube + " * " + numberToCube + " = " + result);
};

cube(3);   // Output: 3 * 3 * 3 = 27
cube(-2);  // Output: -2 * -2 * -2 = -8
cube(0);   // Output: 0 * 0 * 0 = 0
cube(1.5); // Output: 1.5 * 1.5 * 1.5 = 3.375




/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */