// Stack (Primitive)    Heap (Non-Primitive)

let myYoutubename = "sachin"
let anotherName = myYoutubename

//console.log(myYoutubename)
//console.log(anotherName)

anotherName = "rawal"

//console.log(myYoutubename)  // sachin
//console.log(anotherName)  // rawal

let userOne = {
    email: "sachin@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

console.log(userOne.email)
console.log(userTwo.email)

userTwo.email = "rawal@google.com"

console.log(userOne.email)
console.log(userTwo.email)

