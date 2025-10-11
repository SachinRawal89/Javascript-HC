let score ="35"
//console.log(typeof score)
//console.log(typeof(score))

let valueInNum = Number(score)
//console.log(typeof valueInNum)
//console.log(valueInNum)

/*
"35" => 35
"35abc" => Nan
true => 1 | false => 0
"sachin" => Nan
*/

let isCorrect = 1
//console.log(typeof isCorrect)

let booleanValue = Boolean(isCorrect)
//console.log(typeof booleanValue)
//console.log(booleanValue)

/*
1 => true | 0 => false
"" => false
"sachin" => true
*/

let someNum = 11
//console.log(typeof someNum) // o/p : number

let numToString = String(someNum) 
//console.log(typeof numToString)  // o/p : string
//console.log(numToString)  // o/p : 11


/*                                       OPERATIONS                                                        */
let str1= "hello"
let str2 = " sachin"
let str3 = str1+str2
//console.log(str3)

//console.log("1" + 2)
//console.log(1 + "2")
//console.log("1" + 2 + 2)  // o/p : 122
//console.log(1 + 2 + "2")  // o/p : 32

/*                                      COMPARISION                                                        */

//console.log("2" > 1)   // srting 2 converted into a number "2" => 2
//console.log("02" > 1)
//console.log(1> "2")
//console.log(4 > "1")
//console.log("sachin" > "sahill") // false
//console.log("sac" < "sah")   // true

console.log(1 > "a")  // false
console.log(1 < "a")  // false
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)  //true

console.log(undefined > 0)
console.log(undefined == 0)
console.log(undefined >= 0)