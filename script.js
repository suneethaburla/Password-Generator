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
  upper:getRandomUpper,
  lower:getRandomLower,
  numeric:getRandomNumeric,
  specialChar:getRandomSpecialChar
};
//Generate password click event
//Adding an eventlistener to generateEl to listen for a click and when that happens, go ahead and run an arrow function
// Get the values of each element length, uppercase, lowercase, specialChar, numeric
//create the variables for these elements
generateEl.addEventListener('click', () => { 
  const length = +lengthEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasSpecialChar = specialCharEl.checked;
  const hasNumeric = numericEl.checked;
  // console.log(length, hasUpper, hasLower, hasSpecialChar, hasNumeric);
  
  //pass these values into function called generatePassword and the result of which will be put into password element
passwordEl.innerText = generatePassword(hasUpper, hasLower, hasSpecialChar, hasNumeric, length);
});
// copy password to the clipboard

clipboardEl.addEventListener('click', () => {

  var copyText = document.getElementById("password");

  /* Select the text field */
  //console.log(copyText.select())
  copyText.select();

  //document.getElementById("password").select()
  // console.log(x);
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  // console.log(copyText.setSelectionRange(0, 99999));

  // /* Copy the text inside the text field */
  document.execCommand("copy");

  // /* Alert the copied text */
   //alert("Copied the text: " + copyText.value);
 
});

//Function to generate actual random password using the values above
function generatePassword(upper, lower, specialChar, numeric, length) {
  //Initialise the password variable
  //Check which character types are checked and filter out unchecked character types
  //loop over the length selected and run password generator function for each type that is checked
  //Append the resulting variable to password variable and return the final password

  let generatedPassword ='';

  const typesCount =  upper + lower + specialChar + numeric ;
  // console.log('typesCount ', typesCount);
  const typesArr = [{upper}, {lower}, {specialChar}, {numeric}]. filter 
  ( 
    item => Object.values(item) [0]
    );
  // console.log('typesArr ', typesArr);
  if (typesCount===0) {
    return '';
  }
  for (let i=0; i<length; i+=typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      // console.log('funcName:', funcName);
      generatedPassword += randomFunc[funcName]();
    });
  }
  // console.log(generatedPassword);
  const finalPassword = generatedPassword.slice(0,length);
return finalPassword; 
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

