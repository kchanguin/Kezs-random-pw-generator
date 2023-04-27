

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passArray= [];

// Write password to the #password input

//function generatePassword() {
  //const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*()_+{}[]";
  //var password = "";
  //var passwordLength should be more than 8 and less than 120

  var passwordLength ;

  var lowerCaseLetter = ['a', 'b', 'c', 'd', 'e','f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  var upperCaseLetter = ['A', 'B', 'C', 'D', 'E','F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  var numberCharacters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  var specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*']


  //Create prompts to ask user of the types of characters they want to include
  //Create  prompt 1 for user to answer

  function userPromptAns() {
      
     var passwordLength = parseInt(prompt('What length would you like your password to be? (8-128 characters)'));

        //allow isNaN to check the value of the variable 'passwordLength' Is Not A Number. if it doesn't contain a valid number, it is true.
      if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
           return false;
      }
  

  //Create Prompt 2
  

  if (confirm ("Do you want to include lowercase letters?")) {
    passArray = passArray.concat(lowerCaseLetter);

  }

  //Create Prompt 3

  if (confirm ("Do you want to include UPPERCASE letters?")) {
    passArray = passArray.concat(upperCaseLetter);

  }

  // Create Prompt 4
  if (confirm ("Do you want to include numbers?")) {
    passArray = passArray.concat(numberCharacters);

  }



   // Create Prompt 5
  if (confirm ("Do you want to include special characters?")) {
    passArray = passArray.concat(specialCharacter);
  }

  return true;


  }

  function generatePassword () {
      var password = '';
      for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * passArray.length);
        password += passArray[randomIndex];

      }
      return password;
    }

    function writeNewPassword() {
       var correctAnswers = userPromptAns();
       var passwordText = document.querySelector("#password");

       if (correctAnswers) {
          var userNewPassword = generatePassword();
          passwordText.vlue = userNewPassword;



       }}

       generateBtn.addEventListener("click", writeNewPassword);

