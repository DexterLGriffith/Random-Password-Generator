# Random-Password-Generator

This is a webpage that allows the user to generate a random password. For added security, the user defines which characters they wish to choose, and just how many overall characters they wish to have in the password. 

# Description   

The password generator given, did not function as intended. I will use my understanding of javascript, css and HTML semantics to reformat the existing code to allow for the user to select which criteria he/she wanted in their password and then generate for them a randomized, strong password to increase their security measures at work. I had to add different variables, add do while loops with if statements, as well as make sure the user is alerted when they dont meet the criteria. 

# Tasks Completed

    1. Created variables for all character classes, and defined the characters that would apart of the randomization process and put them in a variable called charpool (characterPool)

        example from script: Upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", Number: "0123456789"

    2. Created Do while loop which prompted the user to choose how many characters total they wanted the password to be. If the user did not confirm length (selecting a number from 8-125) then the loop would not continue, until the user selected within the correct criteria.

    3. Created Do while loop for all the character variables in order to ask which charadcters the user wanted to incllude in their password. (uppercase, lowercase, numbers and symbols.)

        example from script: 
            var HNumber = window.confirm("Do you want number characters in the password?");
                if (HNumber) {
                characters += charpool.Number;
                };

    4. Defined length, as an operation of a randomized number multiplied by whatever length of characters the user selected. 

        example from script: 
            length = UserPassLength - criteria;
                for (var i =0; i < length; i++) {
                newpass += characters[Math.floor(Math.random() * characters.length)]; 
                }

    5. Created a return prompt, to call the new password to be displayed. 

        example from script: return newpass;

# Installation

    1. Download the files from the repository, open the index.html, style.css and script.js files within that folder. Click on generate password to begin prompts. 

# Links 

[Link to the Website](https://dexterlgriffith.github.io/Random-Password-Generator/)

[Link to the Code Repository](https://github.com/DexterLGriffith/Random-Password-Generator)

# Credits 

    Dexter Griffith

# References

