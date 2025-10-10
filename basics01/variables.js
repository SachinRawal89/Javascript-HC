const accountId = 12345
let accountEmail = "sachinrawal0809@gmail.com"
var accountPassword = "6789"
accountCity = "Indore"
let accountState;
//accountId = 3550 => not allowed

accountEmail = "sr@11"
accountPassword = "2121"
accountCity = "Pune"

/*
Prefer not to use [var]
because of issue in  block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.log(accountId);