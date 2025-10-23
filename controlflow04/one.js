// if
/*const isLoggedIn = true;
const temeprature = 41;

if (temeprature === "41") {
    console.log("temp less than 50");
}
else{
    console.log("temp is greater than 50");
}

console.log("Hey lets take a cold coffie"); */

// =, <, >, !=, ==, ===(used for strict checking)

/*const score = 100;

if (score==100) {
    const power = "fly";
    console.log("hey", power);
}

console.log(power); // o/p: ReferenceError: power is not defined
*/

// SHORT HAND NOTATION

//const balance = 1000;

//if(balance> 500) console.log("test");    // Jab hame sirf 1 hi line ka code likhna ho tab ise use krte hain


//if(balance> 500) console.log("test"), // ham bina curly bracket ko use kre bhi multiple line ka code likh skte hain "," comma lga kr
//console.log("test2"); // but is trah ka code likhna ek acchi practice nhi hoti.


const debitCard = true;
const upi = true;
const userLoggedInFromGoogle = false;
const userLoggedInFromEmail = true;

if (debitCard && upi) {
    console.log("Allow to buy from amazon");
}

if(userLoggedInFromEmail || userLoggedInFromGoogle) {   // "|| = or"
    console.log("user logged in");
}



