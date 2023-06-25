const inputBox = document.querySelectorAll('input');
const submitBtn = document.querySelector('.btn');
const para = document.querySelector('.para');

submitBtn.addEventListener('click', () => {
  para.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;
});

function randomColor() {
  return Math.random() * 150;
}

function checkAge() {
  return age > 18 ? true : confirm('test');
}

function min(a, b) {
  return a < b ? a : b;
}

// just test default

function getFirstValue() {
  return 3;
}

function getSecondValue() {
  return 5;
}

function getMin(a = getFirstValue(), b = getSecondValue()) {
  return a < b ? a : b;
}

// arrow function

let ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
};

// ask(
//   'Do you agree?',
//   () => {
//     alert('You agreed.');
//   },
//   () => {
//     alert('You cancelled the execution.');
//   }
// );

//Assignment

function addSeven(x) {
  return x + 7;
}

function multiply(firstVal, secondVal) {
  return firstVal * secondVal;
}

// function capitalize(str) {
//   let tempStr = str.toLowerCase().substr(1, str.length);
//   let tempChar = str[0].toUpperCase();
//   return tempChar + tempStr;
// }

function capitalize(str) {
  let firstChar = str.charAt(0).toUpperCase();
  let restOfStr = str.slice(1).toLowerCase();
  return firstChar + restOfStr;
}

console.log(capitalize('makSSSSOOOOON'));

function getLastLetter(str) {
  return str.charAt(str.length - 1);
}

console.log(getLastLetter('abcdddddGGGT3'));
