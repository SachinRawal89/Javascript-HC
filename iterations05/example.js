const obj = {
  a: 1,
  b: 2,
  c: 3,
};

const obj2 = Object.keys(obj);
console.log(obj2);

Object.keys(obj).forEach((key) => {
  console.log(key + " : " + obj[key]);
});

// //console.log(Object.keys(obj));   // o/p : [ 'a', 'b', 'c' ]  // :) Object.keys(obj) => returns a array

// for (let i = 0; i < 10; i++) {
//   if (i === 5) break; // exits the loop when i is 5
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 5) continue; // skips the iteration when i is 5
//   console.log(i);
// }

// hoistedFunction(); // Works fine
// function hoistedFunction() {
//   console.log('This function is hoisted');
// }

// const numbers = [1, 2, 3];
// const doubled = numbers.map((n) => n * 2);
// console.log(doubled); // [2, 4, 6]

// function fetchData(callback) {
//   // assume an asynchronous operation to fetch data
//   const data = { name: 'John Doe' };
//   callback(data);
// }

// function handleData(data) {
//   console.log(data);
// }

// fetchData(handleData);