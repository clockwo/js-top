const arr = [1, 2, 3, 4, 5];

// for (const item of arr) {
//   console.log(item);
// }

const addOneArr = arr.map((item) => item + 1);

// for (const item of addOneArr) {
//   console.log(item);
// }
const moreThanTwoArr = addOneArr.filter((item) => item > 4);

for (const item of moreThanTwoArr) {
  console.log(item);
}
