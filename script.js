// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
 
 // variables
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var symbol = "~`!@#$%^&*()_-+={[}];,><./?";
  var number = "0123456789";
  var characters = "";
  var generatedNewPass = "";



  var userPassLength = window.prompt("Enter your desired new password length, it must be between 8 and 128 characters.");
  var checkIfHasNum = isNaN(userPassLength);
  console.log(checkIfHasNum);
    if ((userPassLength > 7) && (userPassLength < 128)) {
      // convert input from prompt which is a string variable... to a number
      var passLengthParse = parseInt(userPassLength)
    };
    // alert for password length error... to keep it between 8 and 128 characters. 
    if (userPassLength < 8 || userPassLength > 128) {
      alert("Your Password Must be between 8 and 128 characters");
    }
  // prompts for user selection on character choices 
  var promptUserLower = confirm("Would you like to have lowercase characters in your password?");
  var promptUserUpper = confirm("Would you like to have uppercase characters in your password?");
  var promptUserSymbol = confirm("Would you like to have special symbols in your password?");
  var promptUserNumber = confirm("Would you like to have numbers in your password?");

    if (promptUserLower === false && 
      promptUserUpper === false && 
      promptUserSymbol === false && 
      promptUserNumber === false) 
      { 
        //criteria prompted due to lack of characters. 
        alert("You must select atleast 2 characters");

        return null
      }
    // store user input and put into password. 


  // for password character strength detail  
  // add numbers
  if (promptUserNumber) { 
    characters += number 
    console.log(characters)
  }
  // add lowercase
  if (promptUserLower) {
    characters += lower
    console.log(characters)
  }
  //add symbols
  if (promptUserSymbol) { 
    characters += symbol 
    console.log(characters)
  }
  //add uppercase
  if (promptUserUpper) { 
    characters += upper 
    console.log(characters)
  }
for (var i = 0; i < passLengthParse; i++) {
  //randomize it, round it, multiple it. 
  generatedNewPass += characters [Math.floor(Math.random() * characters.length)];
  console.log(generatedNewPass)
}
return generatedNewPass;
// // Write password to the #password input
} 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




  // while (checkIfHasNum || UserPassLength < 8 || UserPassLength > 128);
  // //do while loop for user input for password characters. 
  
 
  // do {
  //   // lowercase character question 
  //   var HLower = window.confirm("Do you want lowercase numbers in the password?");
  //     if (HLower) {
  //       characters += charpool.Lower;
  //     };

  //   // Uppercase character question -copy pasta 
  //   var HUpper= window.confirm("Do you want uppercase numbers in the password?");
  //     if (HUpper) {
  //       characters += charpool.Upper;
  //     };
  //   // Number character question  -copy pasta 
  //   var HNumber = window.confirm("Do you want number characters in the password?");
  //     if (HNumber) {
  //       characters += charpool.Number;
  //     };
  //   // Symbol character question -copy pasta 
  //   var HSymbol = window.confirm("Do you want symbol characters in the password?");
  //     if (HSymbol) {
  //       characters += charpool.Symbol;
  //     }
    // criteria  question -copy pasta, not working properly, however loops back around to beginning 
    // if criteria not met.  - good enough for now...
//     var criteria = window.confirm("Password must contain 2 special characters");
//       if (!HUpper && !HLower && !HNumber && !HSymbol) {
//         alert("Your password must contain atleast 2 character options!");
//       }
//   } 
//     while (!HLower && !HUpper && !HNumber && !HSymbol);

//  //assign length to the selected input variables. 
// length = UserPassLength - criteria;
//    for (var i =0; i < length; i++) {
//    newpass += characters[Math.floor(Math.random() * characters.length)];  
//    }

//   // return newpass;



// // Write password to the #password input
// } 
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }


// // // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);