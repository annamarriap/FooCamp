
const $inputPassword = document.getElementById('input_password');
const $message = document.querySelector('form .input_description');

// validate password value length
$inputPassword.addEventListener('input', function(event){
    let inputLenght = event.target.value.length;
    console.log(inputLenght);
    if(inputLenght > 8) {
        $message.style.display = 'none';
    } else {
        $message.style.display = 'block';
    }
});

// show password on mouseover
$inputPassword.addEventListener('mouseover', function(event){
    $inputPassword.type = 'text';
});

// hide password on mouseover
$inputPassword.addEventListener('mouseout', function(event){
    $inputPassword.type = 'password';
});