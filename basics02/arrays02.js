const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

//console.log(marvelHeros);
//marvelHeros.push(dcHeros);
//console.log(marvelHeros);

//marvelHeros.concat(dcHeros);  // ye method original value mein change nahi karti hai new array create hota hai yha copy
// concat() method new array return krta hain
//console.log(marvelHeros);  // o/p : ["Thor", "Ironman", "Spiderman"]

//const newArr = marvelHeros.concat(dcHeros);
//console.log(marvelHeros);
//console.log(newArr);

// Spread Operator

//const newHeros = [...marvelHeros, ...dcHeros];
//console.log(newHeros);
//console.log(marvelHeros); // o/p : ["Thor", "Ironman", "Spiderman"]

console.log(Array.isArray("Sachin"));
console.log(Array.from("Sachin"));

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
