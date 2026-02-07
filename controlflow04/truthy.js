//const userEmail = "sachin@gmail.com";  // "" => double quotos ke andar kuch bhi likha ho use ki value true consider ki jati hai.

//if (userEmail) {
//    console.log("Got User Email")
//}
//else {
//    console.log("Don't have user email")
//}

//const userEmail = ""        // "" empty string ki value ko false consider kiya jata hain : "" koi space nhi hain string mein.

//if (userEmail) {
//    console.log("Got User Email")
//}
//else {
//    console.log("Don't have user email")
//}

const userEmail = [];                       // [] => empty array consider as truthy value/true value

if (userEmail) {
    console.log("Got User Email")           // o/p: Got User Email    
}
else {
    console.log("Don't have user email")
}

