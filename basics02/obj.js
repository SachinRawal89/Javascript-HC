// Singleton Object
//const instaUser = new Object();
//console.log(instaUser); // o/p: {}

// object literals
const instaUser = {}
//console.log(instaUser); // o/p: {}

instaUser.id= "12345";
instaUser.name = "Sachin";
instaUser.isLoggedIn = true;

//console.log(instaUser);
//console.log(instaUser.id);


const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {obj1, obj2};
//console.log(obj3);  // o/p: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj4 = Object.assign(obj1, obj2);
//console.log(obj4); // o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj4 = Object.assign({}, obj1, obj2);
//console.log(obj4); // o/p: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2};
//console.log(obj5);

const arr = [
    {
        id: 11,
        name: "Sachin"
    },
    {
    },
    {
    },
    {
    }
];

//console.log(arr[0].id);

// API format => JSON

/*{
    "name": "sachin",
    "age": 23
} */


// in array format

[
    {},
    {}
]
