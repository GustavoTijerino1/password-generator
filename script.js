var generateBtn = document.querySelector("#generate");
// Provided by instructor.
var allowUppercase;
var allowLowerCase;
var allowNumbers;
var allowSpecials;

var passwordCharacterCount;
// Prevents user from putting invalid choice.
function askAboutCharacterLength(){
  
  while(true) {
    passwordCharacterCount = prompt("Choose a lenght of 8 or 128 characters for Password.");

    if (passwordCharacterCount >= 8 && passwordCharacterCount <= 128) {
      break;
    } else {
      alert ("Length of at least 8 characters and no more than 128 characters.") 
    }
  } 

  return passwordCharacterCount
}
// Creates the random password
function generatePassword(){
  var mergelist = [];
  var finalResult = "";
  var upper =[ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols =["!", "@", "#", "$", "%" ];


 passwordCharacterCount =askAboutCharacterLength()

  while(true) {
   allowUppercase = confirm("Are Upper Case Allowed?");

  if (allowUppercase) {
    mergelist.push(upper.join(""));
   } 
 
  allowLowerCase = confirm("Are Lower Case Allowed?");
    if (allowLowerCase) {
      mergelist.push(lower.join(""));
    }

  allowNumbers = confirm("Are Numbers Allowed?");
    if (allowNumbers){
      mergelist.push(numbers.join(""));
    }

  allowSpecials = confirm("Are Special Characters Allowed?");
    if (allowSpecials){
      mergelist.push(symbols.join(""));
    }

    // Prevent user from not selecting character type
    if ( allowUppercase  || allowLowerCase|| allowNumbers || allowSpecials) {
      break;
    } else  {
      alert ("Please choose a character type.")
    }

  } 
  // Its the loop that generates a random pasword
  console.log(mergelist)
  for (var i=1; i<=passwordCharacterCount; i++ ) {
    var randomSet = Math.floor(Math.random() * mergelist.length)
    var randomString = mergelist[randomSet]
    console.log(randomString)
    var randomChar = Math.floor(Math.random() * randomString.length)
    finalResult += randomString[randomChar];
    
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


