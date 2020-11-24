

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Finished
// Random Upper Letter
const upperArray = "ABCDEFGHIJKLMOPQRSTUVWXYZ".split();

// Random Lower Letter
const lowerArray = "abcdefghijklmnopqrstuvwxyz".split();

// Random Number
const numberArray = "1234567890".split();

// Random Symbol
const symbolArray = "!@#$%^&*()-=+:;'<>,.?/{}[]~".split();




//fuction to capture user inputs
// length must be between 8 and 128;
function capturUserInput() {
const length = parseInt(prompt("please enter length of password"));
if (length < 8 || length > 128) {alert('Invalid password length');
return;
}

const shouldContainUpper = confirm("Would you like to include uppercase letters");
const shouldContainLower = confirm("Would you like to include lowercase letters");
const shouldContainNumber = confirm("Would you like to include numbers");
const shouldContainSymbols = confirm("Would you like to include symbols");

if (shouldContainUpper === false &&
  shouldContainLower === false &&
  shouldContainNumber === false &&
  shouldContainSymbols === false) {
  return alert('Please select at least one password type')
}

let passwordInputs = {
  length: length,
  shouldContainUpper: shouldContainUpper,
  shouldContainLower: shouldContainLower,
  shouldContainNumber: shouldContainNumber,
  shouldContainSymbols: shouldContainSymbols,
}
return passwordInputs

// function to generate a password
const options = capturUserInputs() 
let pot = [];
let result = [];


if (options.shouldContainUpper) pot = pot.concat(upperArray);

if (options.shouldContainLower) {
  pot = pot.concat(lowerArray)
}

if (options.shouldContainNumber) {
  pot = pot.concat(numberArray)
}

if (options.shouldContainSymbol) {
  pot = pot.concat(symbolArray)
}

for (let i = 0; i <= options.length; i++) {
  let randomIndex = Math.floor(Math.random() * pot.length - 1)
  let temp = pot[randomIndex]
  result.push(temp)
}

return result.join("");