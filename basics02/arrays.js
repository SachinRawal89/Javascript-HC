// Array

const arr = [0, 1, 2, 3, 4, 5];

const arr2 = ["shaktimaan", "balveer"];

const arr3 = new Array(0, 1, 2, 3, 4 ,5, 6, 7, 8 ,9);

//console.log(arr[0]);

//arr.push(6);
//arr.push(7);
//arr.pop();

//console.log(arr);
//console.log(arr.toString());

// Slice and Splice

console.log("A", arr);

const newArr = arr.slice(1,3);

console.log(newArr);
console.log("B", arr);

const arr4 = arr.splice(1,3)
console.log(arr4);
console.log("C", arr);