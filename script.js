// Assignment Code
var generateBtn = document.querySelector("#generate");
var storage = [];
//console.log(storage)
function generatePassword() {
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();



  var input = parseInt(prompt("Choose a length between 8 and 128"));
  var passwordCharSet = "";

  if (!isNaN(input) && input >= 8 && input <= 128) {

    var hasLowercase = window.confirm("Want to use lowercase letters?");
    if (hasLowercase == true) {
      passwordCharSet += lowercase;
    };
  
    var hasUppercase = window.confirm("Want to use uppercase letters?");
    if (hasUppercase == true) {
      passwordCharSet += uppercase;
    };
    var hasSpecials = window.confirm("Want to use symbols?");
    if (hasSpecials == true) {
      passwordCharSet += special;
    };
    var hasNumbers = window.confirm("Want to use numbers?");
    if (hasNumbers == true) {
      passwordCharSet += numbers;
    };
    //console.log(passwordCharSet)
    var result = "";
    for (var i = 0; i < input; i++) {
      result += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }
    return (result);
  
  } else {
    alert("TRY AGAIN");
    return generatePassword();
  }
}
  

 



// Write password to the #password input
function writePassword() {
  event.preventDefault();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);