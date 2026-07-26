const accountId = 144553
let accountEmail = "pragya@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
// account = 2// not allowed

accountEmail = "hc@hc.com"
accountPassword = "2121212"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var because of issue in nblock scope and functional scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity])