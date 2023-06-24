
// task 4 :
console.log('\n \n ------------- task 4 --------------- \n ')

const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true
  });
  return password;
}

const password = generateRandomPassword();
console.log(password)