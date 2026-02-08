// for in loop : Especially for objects

const myObj = {
    js : "javaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

// for (const key in myObj) {
//    console.log(key);
// }

for (const key in myObj) {
    console.log(myObj[key]);
}

const arr = ["js", "cpp", "py", "html", "java", "rb"];

// for (const ans in arr) {
//    console.log(ans);          // o/p : 0 1 2 3 4 5 // it will return the index values
// }

for (const ans in arr) {
    console.log(arr[ans]);          // o/p : js
//cpp
//py
//html
//java
//rb
    
}