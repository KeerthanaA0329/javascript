

var quizQuestion1 = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    correctAnswer: 1 
};

var quizQuestion2 = {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctAnswer: 0 
};

var quizQuestion3 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
    correctAnswer: 0 
};

function showQuestionInfo(questionObj) {
    console.log("Question: " + questionObj.question);
    console.log("------------------------------");
    console.log("Options:");
    for (var i = 0; i < questionObj.options.length; i++) {
        console.log("(" + (i + 1) + ") " + questionObj.options[i]);
    }
    console.log("------------------------------");
}


console.log("Question 1:");
showQuestionInfo(quizQuestion1);

console.log("Question 2:");
showQuestionInfo(quizQuestion2);

console.log("Question 3:");
showQuestionInfo(quizQuestion3);



/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */