const accountId =789456
let accountEmail= "tiwariadarsh77777@gmail.com"
var accountPassword =123654
accountCity ='Guna'

//accountId =2//not possible due to const variable

accountEmail ="at@ta.com"
accountPassword =456321
accountCity = 'Rewa'


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])