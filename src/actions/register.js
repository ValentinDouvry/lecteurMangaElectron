const inputUsername = document.getElementById('inputUsername');
const inputEmail = document.getElementById('inputEmail');
const inputPassword = document.getElementById('inputPassword');
const inputConfirmPassword = document.getElementById('inputConfirmPassword');

const buttonRegister = document.getElementById('buttonRegister');
buttonRegister.addEventListener('click', () => {
  if(_.isEmpty(inputUsername.value) || _.isEmpty(inputEmail.value) || _.isEmpty(inputPassword.value) || _.isEmpty(inputConfirmPassword.value) ) {
    console.log('EMPTY');
  } else {
    if(inputPassword.value != inputConfirmPassword.value) {
      console.log('PASSWORDS DON\'T MATCH');
    } else {
      console.log('REQUEST');
    }
  }
});