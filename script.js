var generateBtn = document.querySelector("#generate");
const specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", writePassword);


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

function generatePassword() {
    var passwordLength = prompt("Sup dawg! Heard you want a password. How Many Characters would you like?.");

    var numbers = confirm("Do you want numbers in your password?");

    var lowerCases = confirm("Do you want lowercases in your password?");

    var upperCases = confirm("Do you want uppercases in your password?");

    var special = confirm("Do you want special characters in your password?");

    var minimumCount = 0;

    var minimumNumbers = "";
    var minimumLowerCases = "";
    var minimumUpperCases = "";
    var minimumSpecialCharacters = "";

    var functionArray = {
        getNumbers: function() {
            return String.fromCharCode(Math.floor(Math.random() * 15 + 48));
        },

        getLowerCases: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
        },

        getUpperCases: function() {
            return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
        },

        getSpecialCharacters: function() {
            return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }

    };

    if (numbers === true) {
        minimumNumbers = functionArray.getNumbers();
        minimumCount++;

    }

    if (lowerCases === true) {
        minimumLowerCases = functionArray.getLowerCases();
        minimumCount++;

    }

    if (upperCases === true) {
        minimumUpperCases = functionArray.getUpperCases();
        minimumCount++;

    }

    if (special === true) {
        minimumSpecialCharacters = functionArray.getSpecialCharacters();
        minimumCount++;

    }

    var randomPasswordGenerated = "";

    for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
        var randomNumberPicked = Math.floor(Math.random() * 4);

        randomPasswordGenerated += randomNumberPicked;

    }

    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;


    return randomPasswordGenerated;

}