// Assignment Code
var generateBtn = document.querySelector("#generate");

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
function generatePassword() {
  const charpool = {
    Lower: 'abcdefghijklmnopqrstuvwxyz',
    Upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    Symbol: '~`!@#$%^&*()_-+={[}];",><./?',
    Number: "0123456789"
  };

  // variables for length and password and characters
  var length = 0;
  var characters = "";
  var newpass = "";


  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  do {
    var UserPassLength = window.prompt("Enter your desired new password length, it must be between 8 and 128 characters.");
    var checkIfHasNum = isNaN(UserPassLength);
      if (checkIfHasNum) {
        alert("Enter a Number!");
      };
      if (UserPassLength < 8 || UserPassLength > 128) {
        alert("Your Password Must be between 8 and 128 characters")
      }
} 
  while (checkIfHasNum || UserPassLength < 8 || UserPassLength > 128);
  //do while loop for user input for password characters. 
  
//WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters 
  do {
    // lowercase character question 
    var HLower = window.prompt("Do you want lowercase numbers in the password?");
      if (HLower) {
        characters += charpool.Lower;
      };

    // Uppercase character question
    var HUpper= window.prompt("Do you want uppercase numbers in the password?");
      if (HUpper) {
        characters += charpool.Upper;
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