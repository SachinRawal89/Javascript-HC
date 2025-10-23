// for of 

// In loop ka use ham generally array mein krte hain.
// ["", "", "", ""]
// [{},{}, {}, {}]

//for (const element of object) {
    // Structure
//}

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {             // here "elment = num" (ye ek variable hain ham kuch bhi name de skte hain) & object = arr
    //console.log(num);
}

const grret = "SACHIN RAWAL";

for (const char of grret) {
    //console.log(char);
}

// Map : object jese hi hote hain : key value pair.
// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.
// +++++++++++++++++ Map mein duplicate value nahi hoti hain. ++++++++++++++++ //

const map = new Map();

map.set("IND", "India")
map.set("USA", "United States Of America")
map.set("FRA", "France")
map.set("JP", "Japan")
map.set("IND", "India")

//console.log(map);   // o/p : Map(4) {
//  'IND' => 'India',
//  'USA' => 'United States Of America',
//  'FRA' => 'France',
//  'JP' => 'Japan'
//

//for (const key of map) {
//    console.log(key)
//}

//for (const [key] of map) {
//   console.log(key)
//}

for (const [key, value] of map) {
    //console.log(key + ":-" + value)
}

const myObj = {
    game1 : "NFS",
    game2 : "DFS",
    game3 : "Tree",
    game4 : "Graph"
}

for (const ele of myObj) {
   //console.log(ele);                  // o/p: TypeError: myObj is not iterable
}