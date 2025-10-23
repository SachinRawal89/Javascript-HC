//function myFun() {
//    console.log("helo");
//    console.log("sachin");
//}

//myFun();

/*function addTwoNum(num1, num2) {
    console.log(num1+num2);
} */

//addTwoNum(5, 6);

//const result = addTwoNum(5, 6);  // addTwoNum(5, 6); => o/p: 11
//console.log(result);  // o/p: undefined  // because addTwoNum function koi bhi value return nahi kar rha hain.

function addTwoNum(num1, num2) {

    //One way

   //let result = num1+num2;
   //return result;

   //Another way
   return num1+num2;
}

const ans = addTwoNum(5,6);
//console.log(ans);

function loginUserName(userName) {

    //if (userName === undefined) {
        //console.log("please enter the user name")
        //return
    //}

    if (!userName) {
        console.log("please enter the user name")
        return
    }

    return userName
}

//console.log(loginUserName("Sachin"));
//console.log(loginUserName()); // o/p : undefined


//console.log(loginUserName());    // "" => empty string and undefined ki values consider as false
//console.log(loginUserName("Sachin"));


// REST OPERATOR

//function calculate(val1, val2,...num1) {
//    return val1;
//}

//console.log(calculate(100, 200, 300, 400, 500));

const user ={
    name: "sachin",
    email: "google.com"
}

function handleObject(anyObject) {
    console.log(anyObject.name);
    console.log(anyObject.email);
}

//handleObject(user);
//handleObject({
//   name: "rawal",
//    email: "email.com"
//})

//handleObject({
//    name2: "rawal",                  //undefined
//    email2: "email.com"              //undefined
//})

// Array

const arr = [100, 200, 300, 400, 500];

function valueOfArray (myArr) {
    console.log(myArr[1]);
}

valueOfArray(arr);