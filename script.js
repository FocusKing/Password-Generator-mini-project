// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided: Anthony Cooper
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();
}
var input = parseInt(prompt("Choose a length between 8 and 128"));
var passwordCharSet = "";

if (input >= 8 && input <= 128) {
  // GOOD CODE GOES HERE
} else {
  alert("NOT COOL");
}

var lowercase = window.alert("Want to use lowercase letters?");
if (lowercase == true) {
  passwordCharSet += lowercase;
};

var uppercase = window.alert("Want to use uppercase letters?");
if (uppercase == true) {
  passwordCharSet += uppercase;
};
var symbols = window.alert("Want to use symbols?");
if (symbols == true) {
  passwordCharSet += symbols;
};
var numbers = window.alert("Want to use numbers?");
if (numbers == true) {
  passwordCharSet += numbers;
};
var password = "";
for (var i = 0; i < length; i++) {
  password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
}
//return password;
function myFunction() {
  return "Access Allowed";
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);