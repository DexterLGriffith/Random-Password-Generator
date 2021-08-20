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

  var length = 0;
  var characters = "";
  var newpass = "";


  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  do {
    var UserPassLength = window.prompt("Enter your new Password! Password must be between 8 and 128 characters, contain an Upper and Lower case letters, atleast 1 number and 1 symbol.");
    var checkIfHasNum = isNaN(UserPassLength);
      if (checkIfHasNum) {
        alert("Your Password Must Contain a Number!");
      }
      if (UserPassLength < 8 || UserPassLength > 128) {
        alert("Your Password Must be between 8 and 128 characters")
      }
} 
  while (checkIfHasNum || UserPassLength < 8 || UserPassLength > 128);















}
console.log(generatePassword());




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
