// Working with variables
let admin, notName;
notName = 'John';

admin = notName;
// alert(admin);

let homePlanet = 'earth';
let earth;
let user;

// numbers
let x, y;
x = 10;
y = 10;
console.log(x + y);
console.log(x == y);

//
let lotsOfDecimal = 1.766584958675746364;
let twoDecimalPlaces = lotsOfDecimal.toFixed(1);
console.log(lotsOfDecimal);
console.log(twoDecimalPlaces);

x = 10;
y = '10';
console.log(typeof x);
console.log(typeof y + typeof +y);
console.log(typeof y);

console.log(false + false);

// The Odin Project Fundamentals part 1 (JS)
console.log(2 + 2);
console.log(2 + 2 + 2 + 2 + 2 + 2);
console.log(+((4 + 6 + 9) / 77).toFixed(5));

let a = 10;
console.log(a);
console.log(9 * a);
let b = 7 * a;
console.log(b);

const MAX = 57;
const actual = MAX - 13;
const percentage = actual / MAX;
console.log(+percentage.toFixed(4));
