// Assignment Code
var generateBtn = document.querySelector("#generate");

// Provided by instructor
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;
var passwordCharacterCount;

var uppercaseChars = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];


var generateBtn = document.querySelector("#generate");


var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;

var passwordCharacterCount;

function askAboutCharacterLength(){
  
  while(true) {
    passwordCharacterCount = prompt("How many characters do you want in your Password?");

    if (passwordCharacterCount >= 8 && passwordCharacterCount <= 128) {
      break;
    } else {
      alert ("Length of at least 8 characters and no more than 128 characters.") 
    }
  } 

  return passwordCharacterCount
}

function generatePassword(){
  var characterType = [];
  var finalResult = "";
  var chars =[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g",0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"!", "@", "#", "$", "%" ];

 askAboutCharacterLength()

  while(true) {
   allowUppercase = confirm("Are Upper Case Allowed?");

  if (allowUppercase) {
    characterType.push(chars.join(""));
   } 
 
  allowLowerCase = confirm("Are Lower Case Allowed?");
    if (allowLowerCase) {
      characterType.push(chars.join(""));
    }

  allowNumbers = confirm("Are Numbers Allowed?");
    if (allowNumbers){
      characterType.push(chars.join(""));
    }

  allowSpecials = confirm("Are Special Characters Allowed?");
    if (allowSpecials){
      characterType.push(chars.join(""));
    }

    
    if ( allowUppercase  && allowLowerCase|| allowNumbers || allowSpecials) {
      if (allowUppercase  || allowLowerCase && allowNumbers || allowSpecials) {
        if (allowUppercase  || allowLowerCase ||allowNumbers && allowSpecials){
          if (allowUppercase  || allowLowerCase &&allowNumbers && allowSpecials){
            if (allowUppercase  && allowLowerCase|| allowNumbers && allowSpecials){
              if (allowUppercase  && allowLowerCase &&allowNumbers || allowSpecials){
                if (allowUppercase  || allowLowerCase ||allowNumbers || allowSpecials){
                  
                }
              }

            }
          }
        }

      }
      break;
    } else  {
      alert ("Please choose a character type.")
    }

  } 

    var newString = chars;

    
  for (var i=1; i<=passwordCharacterCount; i++ ) {
    var randomChar = Math.floor(Math.random() * newString.length)
    finalResult += newString[randomChar];
    
  }

  return finalResult;

}

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Provided by instructor
function askAboutUppercase(){
  allowUppercase = confirm("Are upper case characters allowed?");
  console.log(allowUppercase);
}

// Repeat for other criteria; for the number of characters, use a prompt statement. Google it. NOTE: prompt statements think any value you provide is a string. You will need to convert it to a number.


// Once all the criteria are determined, this function will generate the password. You can create other functions also if you need them.
function generatePassword(){
  var finalResult = ""

  // HINT: Remember that a for-loop can iterate from a starting number to a ending number, such as the number of characters in a password.

  // HINT: You may want to look into merging arrays together


  return finalResult;
}

// Write password to the #password input
function writePassword() {

  // ask the questions first
  askAboutUppercase();




  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);