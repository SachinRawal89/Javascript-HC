const obj = {
    username: "sachin",
    price: 999,
    //welcome: function myFun() {
    //    console.log("welcome to website:", this.username);
    //}

    welcome: function() {
        console.log("welcome to website:", this.username);
        console.log(this);  // this refer krta hai current context ko
    }
}

//obj.myFun(); // error: TypeError: obj.myFun is not a function
//myFun();       // error: ReferenceError: myFun is not defined
//obj.welcome();   // o/p: welcome to website: sachin

//obj.welcome();

//obj.username = "hitesh"
//obj.welcome();

//console.log(this); // o/p: {} => o/p {} empty object is liye aaya hai kyunki ham abhi node envirnment mein hai => abhi this node ko reffer kar rha hai

//function chai() {
    //console.log(this);
    //let user1 = "abc";
    //console.log(this.user1);  // o/p: undefined
    // NOTE 2000/- this keyword ko ham functions mein use nahi karte hain
//}

//const chai = function chaiAurCode() {  // agr ham yha function ka naam na bhi de toh koi change nhi ayega : function execute ho jayega

//const chai = function () {
    //console.log(this);
    //let user1 = "abc";
    //console.log(this.user1);  // o/p: undefined
    // NOTE 2000/- this keyword ko ham functions mein use nahi karte hain
//}

//chai();
//chaiAurCode();   // o/p: ReferenceError: chaiAurCode is not defined

// Arrow function
//const chai = () => {
//    let user1 = "abc";
//    console.log(this.user1);  // o/p: undefined
//    console.log(this);        // o/p: {}
//}

//chai();

// Arrow function ko ham kisi variable mein bhi hold kar skte hain : const chai = () => {}

//const addNum = (num1, num2) => {
//    return num1+num2;
//}
//console.log(addNum(5,6)); o/p: 11

//const addNum = (num1, num2) => num1+num2;  // ek hi line ka code hain toh is {} bracket ki jrurat nahi hain, ham direct bhi likh skte hain
//console.log(addNum(5,6)); // o/p: 11

//const addNum = (num1, num2) => (num1+num2);  // note: jab ham is () parenthesis ka use krte hain toh hame return keyword use krna nahi hota.
//console.log(addNum(5,6));  // o/p: 11        // impicit return


// +++++++++++++ AGR HAME OBJECT RETURN KRNA HO TOH USE PARENTHESIS ME WRAP KRNA HOGA ++++++++++++++++ //

//const addNum = (num1, num2) => {react: "chai"};
//console.log(addNum(5,6));  // o/p: undefined    // yunki hamne object ko parenthensis mein wrap nhi kiya

//const addNum = (num1, num2) => ({react: "chai"});
//console.log(addNum(5,6));      // o/p: // o/p: { react: 'chai' }

//const addNum = (num1, num2) => {  
//    return {
//        react: "chai"
//    }
//}
//console.log(addNum(5,6)); // o/p: { react: 'chai' }



