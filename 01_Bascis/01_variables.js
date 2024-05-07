const accountId = 14455
let accountEmail = "soumyajit@gmail.com"
var accountPassword = "65432"
accountCity = "Jaipur" // this is also possible in js but not to use this
let accountState;

/*

Prefer not to use var because there is a issue in
block scope & functional scope

*/
// console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])