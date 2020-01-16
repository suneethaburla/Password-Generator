// Generate Random Password
//DOM elements
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const specialCharEl = document.getElementById('specialChar');
const numericEl = document.getElementById('numeric');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//Putting each function generated below into object called randomFunc
const randomFunc = {
  lower:getRandomLower,
  upper:getRandomUpper,
  numeric:getRandomNumeric,
  specialChar:getRandomSpecialChar
};
//Generate password click event
//Adding an eventlistener to generateEl to listen for a click and when that happens, go ahead and run an arrow function
// Get the values of each element length, uppercase, lowercase, specialChar, numeric
//create the variables for these elements
generateEl.addEventListener("click", () => { 
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasSpecialChar = specialCharEl.checked;
  const hasNumeric = numericEl.checked;
  
  //pass these values into function called generatePassword and the result of which will be put into password element
  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasSpecialChar, hasNumeric, length);
});
//Function to generate actual random password using the values above
function generatePassword(lower, upper, numeric, specialChar, length) {

}


//Generate functions

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumeric() {
  return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSpecialChar() {
  const specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return specialChars[Math.floor(Math.random()*specialChars.length)];
}

// var generateBtn = document.querySelector("#generate");


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

//   copyBtn.removeAttribute("disabled");
//   copyBtn.focus();
// }

// function copyToClipboard() {
//   // BONUS 
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
