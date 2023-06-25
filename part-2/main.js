const string = 'The revolution will not be televised.';

console.log(string);

const newStr = string;
console.log(newStr);

const escapeChr = "I've got no right to take my place...";
console.log(escapeChr);

const testNum = 123;
const myString = testNum.toString();
console.log(typeof testNum);
console.log(typeof myString);

// String methods

let text = '1 3 5';
console.log(text.length);

text = 'Hello, Hello, Hello, world!';
console.log(text.slice(0, 5));
console.log(text.slice(-6));
console.log(text.slice(-9, -3));

console.log(text.substring(1, 5));

console.log(text.replaceAll(/HellO,/gi, 'Hi,').trim());
console.log(text.split(','));

let word = 'Word';
let padded = word.padStart(4, 'x');
console.log(padded);

let txt = 'I can eat bananas all day';

console.log(txt.slice(10, 16));

let age = 5;

// let userName = prompt("Who's there?");

// if (!userName) {
//   alert('Canceled');
// } else if (userName.toLowerCase() != 'admin') {
//   alert("I don't know you.");
// } else {
//   let password = prompt('Password?');
//   if (password === '' || password === null) {
//     alert('Canceled');
//   } else if (password === 'TheMaster') {
//     alert('Welcome!');
//   } else {
//     alert('Wrong password');
//   }
// }

// let userInput = prompt("What's the 'official' name of JavaScript?");

// if (userInput) {
//   userInput == 'ECMAScript'
//     ? alert('Right!')
//     : alert('You don\'t know? \n "ECMAScript!"');
// }

// let userNum = prompt('number');

// if (userNum < 0 || userNum > 0){
//   userNum > 0 ? alert(1) : alert(-1)
// } else {
//   alert(0)
// }
let a = 1;
let b = 5;

let result;

a + b < 4 ? (result = 'Below') : (result = 'Over');
console.log(result);

let message =
  login === 'Employee'
    ? 'Hello'
    : login === 'Director'
    ? 'Greetings'
    : login === ''
    ? 'No login'
    : '';
