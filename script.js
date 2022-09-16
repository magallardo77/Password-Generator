// Assignment Code
var generateBtn = document.querySelector("#generate");

const lowerCa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upperCa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const specialC = ['!','@','#','$','%','^','&','*']
const num = ['0','1','2','3','4','5','6','7','8','9',]
const criteria = [lowerCa, upperCa, specialC, num]



// Write password to the #password input
function generatePassword() {
  length = prompt("What should the length of the password be: ")
  if (length < 8 || length > 128) {
    alert("Please enter a value between 8-128 characters.")
    generatePassword()
  }else{
    lowercase = confirm("Would you like lowercase characters?");
    uppercase = confirm("Would you like uppercase characters?");
    numeric = confirm("Would you like numeric characters?");
    specialChar = confirm("Would you like special characters?");
  }

  let criteriaSelect = [lowercase, uppercase, numeric, specialChar];
  let newCriteria = [];
  
  for (i=0; i<criteriaSelect.length; i++){
    if(criteriaSelect[i])
    newCriteria = newCriteria.concat(criteria[i]); 
  }

  console.log(newCriteria)

  passw = ""
  for (i=0; i <= length; i++){
   newChar = newCriteria[Math.floor((Math.random())*newCriteria.length)];
   passw = passw.concat(newChar);
  }
  return passw;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




