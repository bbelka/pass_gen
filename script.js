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



function writePassword() {
  //List of alpha characters
  //list of numeric char
  //list of special char
  var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var spec = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"];
  console.log(caps);
  console.log(lower);
  console.log(num);
  console.log(spec);

  //prompt user
  //password length
  passwordLengthUser = prompt("How many characters would you like you password to be (8-128)")
  var passLengthNum = parseInt(passwordLengthUser)
  console.log(passLengthNum)

  //check length is between 8 and 128

  if (passLengthNum < 8 || passLengthNum > 128 || isNaN(passLengthNum)) {
    var properLength = false;
    console.log(properLength)
    do {
      alert("Sorry, please pick a number between 8 and 128.");
      passwordLengthUser = prompt("How many characters would you like you password to be (8-128)");
      passLengthNum = parseInt(passwordLengthUser);
      console.log(passLengthNum);
      if (passLengthNum > 8 && passLengthNum < 128) {
        properLength = true;
        console.log(properLength)
      }
      else if (passLengthNum < 8 || passLengthNum > 128) {
        var properLength = false;
        console.log(properLength);
      }
    }
    while (properLength === false);
  }


  //confrim if they want alpha
  do {
    var alphaChar = confirm("Do you want alpha characters?");
    console.log(alphaChar);

    if (alphaChar === true) {
      //confirm if they want uppercase
      var upperChar = confirm("Do you want uppercase characters?");
      console.log(upperChar);
      //confirm if they want lowercase
      var lowerChar = confirm("Do you want lowercase characters?");
      console.log(lowerChar);
    }
    else if (alphaChar === false) {
      upperChar = false;
      lowerChar = false;
    }

    //confirm if they want numeric
    var numChar = confirm("Do you want numeric characters?");
    console.log(numChar);
    //confirm if they want special
    var specChar = confirm("Do you want special characters?");
    console.log(specChar);
    //check that the user selected at least on option
  }
  while (upperChar === false && lowerChar === false && numChar === false && specChar === false);


  //create choices array
  var choices = [];

  //add characters from user selected arrays to choices array
  if (upperChar === true) {
    choices = choices.concat(caps)
  }
  if (lowerChar === true) {
    choices = choices.concat(lower)
  }
  if (numChar === true) {
    choices = choices.concat(num)
  }
  if (specChar === true) {
    choices = choices.concat(spec)
  }
  console.log(choices);

  //create password string
  //loop over choices array
  //number of times that the user specified for the length of the password
  //create a random number
  //number between 0 and choices.length
  //grab element from choices array
  //add random elements to password string
  var password = "";
  var i;
  for (i = 0; i < passLengthNum; i++) {
    var password = password.concat(choices[Math.floor(Math.random() * choices.length)])
  }
  console.log(password);

  //return password to user

  document.getElementById('password').innerText = "Your password is :   " + password
}