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
generateEl.addEventListener('click', ()=> { 
  const length = lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasSpecialChar = specialCharEl.checked;
  const hasNumeric = numericEl.checked;
  
  //pass these values into function called generatePassword and the result of which will be put into password element
  passwordEl.innerText = generatePassword(hasLower, hasUpper, hasSpecialChar, hasNumeric, length);
});
//Function to generate actual random password using the values above
function generatePassword(lower, upper, numeric, specialChar, length) {
  //Initialise the password variable
  //Check which character types are checked and filter out unchecked character types
  //loop over the length selected and run password generator function for each type that is checked
  //Append the resulting variable to password variable and return the final password

  let generatedPassword ='';

  const typesCount = lower + upper + numeric + specialChar;
  console.log('typesCount '+ typesCount);
  if (typesCount===0) {
    return '';
  }

}


//Generate functions for uppercase, lowercase, numeric and special characters

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

