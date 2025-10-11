// Primitive Data Type

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const id = Symbol('1234')
const anotherId = Symbol('1234')

console.log(id ==anotherId)  //  o/p : false

const bigNum = 123454678901234n

// Refrence Type (Non Primitive)

// Array. Object, Functions

// object
let myObj ={
    name: "sachin",
    age: 23
}

//function
const myFunction = function() {
    console.log("Hello")
}

//console.log(myFunction)