const loginForm = document.querySelector('.cont__form__login');
const cadastroForm = document.querySelector('.cont__form__cadastro');
const recsenhaForm = document.querySelector('.cont__form__recsenha');
const registro = document.getElementById('registro');
const recsenha = document.getElementById('recsenha');


registro.addEventListener('click', function() {
    loginForm.style.display = 'none';
    cadastroForm.style.display = 'flex';
});
recsenha.addEventListener('click', function() {
    loginForm.style.display = 'none';
    recsenhaForm.style.display = 'flex';
});