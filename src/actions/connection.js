const inputUsername = document.getElementById('inputUsername');
const inputPassword = document.getElementById('inputPassword');


const buttonConnection = document.getElementById('buttonConnection');
buttonConnection.addEventListener('click', () => {
  if(_.isEmpty(inputUsername.value) || _.isEmpty(inputPassword.value)) {
    console.log('EMPTY');
  } else {
    console.log('REQUEST')
  }
});