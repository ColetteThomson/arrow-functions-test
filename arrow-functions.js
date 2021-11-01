/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
     // code block
    return a + b;
}
let sum = addTwoNumbers(3, 5);
console.log(sum); 

// Arrow Function With Parameters: used for more complex code block and will need to use curly braces

const addTwoNumbers1 = (a, b) => {
    // code block
    return a + b;
}
let sum1 = addTwoNumbers1 (3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters (no curly braces) 
// NB: the 'a + b' can also be (a + b) = both valid

const addTwoNumbers2 = (a, b) => a + b;

let sum2 = addTwoNumbers2 (3, 5);
console.log(sum);

// Implicit Returns:
// -example has only 1 parameter so doesn't need parenthesis. If more than one must have parentheses ()

const saySomething = message => console.log(message);
saySomething('Hello there');

// -if have function that has no parameters, still need empty () so JS knows its a function
const sayHello = () => console.log('hello');
sayHello();

// Returning Multiple Lines. NB: need to enclose in () if multi-line string

const returnMutlipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMutlipleLines());
