// for each loop : Array

const coding = ["js", "java", "c++", "python", "ruby"]

// coding.forEach( function (item) {    // CallBack
//   console.log(item)
// } )


//coding.forEach( (item) => {
//    console.log(item)
//})

function printMe (item) {
   console.log(item)
}

coding.forEach(printMe);

//oding.forEach( (val, idx, arr) => {
//    console.log(val + " " + idx + " " + arr)
//})

// const myCoding = [
//     {
//         languageName : "Javascript",
//         languageFileName : "JS"
//     },
//     {
//         languageName : "Java",
//         languageFileName : "Java"
//     },
//     {
//         languageName : "python",
//         languageFileName : "PY"
//     }
// ]

// myCoding.forEach ( (item) => {
//     console.log(item.languageFileName + " " + item.languageName);
// } )