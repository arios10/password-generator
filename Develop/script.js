// Assignment code here

function generatePassword() {

  //value for password
  var password = "";
  var textValue = "";

  //create password criteria in array
  var passCriteria = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "01234567890", "!@#$%^&*()-_+=`~,.<>?/\|{}[]"];
  
  //prompt for password criteria

  //set pass length to 0 so it must enter input validation
  var passLength = 0;
  while(passLength < 8 || passLength > 128) {
    passLength = prompt("Choose password length from 8 to 128 characters");
  }
  passLength = parseInt(passLength);
  
  //set all criteria to false so it must enter input validation
  var lowerC = false;
  var upperC = false;
  var numbers = false;
  var specialChar = false;
  //have at least one value become true to exit while loop
  while(!lowerC && !upperC && !numbers && !specialChar) {
  lowerC = confirm("Would you like to use lowercase?");
  upperC = confirm("Would you like to use uppercase?");
  numbers = confirm("Would you like to use numbers?");
  specialChar = confirm("Would you like to use special characters?");
  }

  //if user selected lowercase put lowercase in password gen
  if(lowerC) {
    textValue += passCriteria[0];
  }
  //if user selected uppercase put uppercase in password gen
  if(upperC) {
    textValue += passCriteria[1];
  }
  //if user selected numbers put numbers in password gen
  if(numbers) {
    textValue += passCriteria[2];
  }
  //if user selected special characters put special characters in password gen
  if(specialChar) {
    textValue += passCriteria[3];
  }

  //write out the password for the user entered length
  for(var i = 0; i < passLength; i++) {
  password += textValue[Math.floor(Math.random() * textValue.length)];
  }
  //return password for writePassword function to use
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
