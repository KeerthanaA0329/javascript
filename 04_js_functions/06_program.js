// Calling the sayHello function three times

sayHello = function () {
    console.log("Hello\nWorld!");
};

sayHello();
sayHello();
sayHello();


function printLetters(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
}

// Calling printLetters with "Hello World!"
printLetters("Hello World!");

/* Further Adventures
 *
 * 1) Change the message from the sayHello function.
 *
 * To add a line-break to a string, insert '\n'
 * e.g. "Line One\nLine Two"
 *
 * 2) Break the Hello World! message across two lines.
 *
 * 3) Create a function that prints the letters
 *    of "Hello World!" one by one down the page
 *
 */