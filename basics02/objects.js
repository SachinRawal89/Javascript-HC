// Singleton => object.create

// object literals

const mySym = Symbol("key1");

const user = {
    name: "sachin",
    //mySym: "mykey1",
    "full_name": "Sachin Rawal",
    [mySym]: "mykey1",
    key: "value",
    age: 18,
    email: "google.com"
}

//console.log(user.email);
//console.log(user["email"]);
//console.log(user["full_name"]);

//console.log(user.mySym);          // o/p: mykey1
//console.log(typeof user.mySym);  // o/p: string

//console.log(user[mySym]);          // o/p: mykey1
//console.log(typeof user.mySym);    // o/p: undefined 
//console.log(typeof user[mySym]);   // o/p: string
//console.log(typeof mySym);

//console.log(user);


// user object mein function add kar rahe hain
user.greeting = function() {
    console.log("Hello user");
}

user.greetingTwo = function() {
    console.log('Hello user, ${this.name}');
}

console.log(user.greeting);    // o/p: [Function (anonymous)]
console.log(user.greeting());  // o/p: Hello user
console.log(user.greetingTwo());

console.log(user);