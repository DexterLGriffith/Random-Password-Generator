// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  const characterpool = {
    Lower: 'abcdefghijklmnopqrstuvwxyz',
    Upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    Sym: '~`!@#$%^&*()_-+={[}];",><./?',
    Num: "0123456789"
  };




















}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
