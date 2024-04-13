const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

const correoFijo = 'usuario1@gmail.com';
const contrasenaFija = '12345';

function checkInput(input) {
    if (input.value.trim() !== '') {
        input.classList.add('has-value');
    } else {
        input.classList.remove('has-value');
    }
}

function loginUser(event) {
    event.preventDefault();

    const correoInput = document.querySelector('.form-box.login input[type="email"]');
    const contrasenaInput = document.querySelector('.form-box.login input[type="password"]');

    if (correoInput.value.trim() === correoFijo && contrasenaInput.value.trim() === contrasenaFija) {
        window.location.href = 'descripcion.html'; 
    } else {
        alert('Correo electrónico o contraseña incorrectos');
    }
}

document.querySelector('.form-box.login form').addEventListener('submit', loginUser);


