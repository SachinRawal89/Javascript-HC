// Dates

let myDate = new Date()  // declaring variable: myDate using object: Date()
console.log(myDate);

console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let createDate = new Date(2025, 8, 8)  // year month date
console.log(createDate.toDateString());

let currentDate = new Date("11-10-2025")
console.log(currentDate.toDateString());
console.log(currentDate.toLocaleDateString());