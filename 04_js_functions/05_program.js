

var number1, number2, result;


number1 = 10;
number2 = 20;

var findTotal = function () {
    result = number1 + number2;
};

var displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(9) Quit");
};

findTotal();


console.log("The total is: " + result);


displayMenu();


/* Further Adventures
 
 * 1) Declare number1, number2 and result variables.
 *
 * 2) Assign values to the variables.
 *
 * 3) Run the findTotal function by writing its name
 *    followed by parentheses: findTotal();
 *
 * 4) Display the result on the console.
 *
 * 5) Run the displayMenu function.
 *
 */