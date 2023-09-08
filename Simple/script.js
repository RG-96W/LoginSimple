// TROCA DE PAGINAS ###################################################
var paragrafo = document.querySelector('.modal__paragrafo');
var formLogin = document.querySelector('.cont__form__login');
var formCadastro = document.querySelector('.cont__form__cadastro');
var formRec = document.querySelector('.cont__form__recsenha');


const loginForm = document.querySelector('.cont__form__login');
const cadastroForm = document.querySelector('.cont__form__cadastro');
const recsenhaForm = document.querySelector('.cont__form__recsenha');
const registro = document.getElementById('registro');
const recsenha = document.getElementById('recsenha');
const leave_ = document.getElementById('leave_');
const leave__ = document.getElementById('leave__');

registro.addEventListener('click', function() {
    loginForm.style.display = 'none';
    cadastroForm.style.display = 'flex';
});

recsenha.addEventListener('click', function() {
    loginForm.style.display = 'none';
    recsenhaForm.style.display = 'flex';
});

leave_.addEventListener('click', function() {
    cadastroForm.style.display = 'none';
    recsenhaForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

leave__.addEventListener('click', function() {
    cadastroForm.style.display = 'none';
    recsenhaForm.style.display = 'none';
    loginForm.style.display = 'flex';
});





// CADASTRO ###########################################################


const cadastrarButton = document.querySelector('.cont__cadastrar');

cadastrarButton.addEventListener('click', function() {
    event.preventDefault();
    const regname_ = document.getElementById('regname');
    const regsenha_ = document.getElementById('regsenha');
    const repsenha_ = document.getElementById('repsenha');
    const regemail_ = document.getElementById('regemail');

    const regname = regname_.value;
    const regsenha = regsenha_.value;
    const repsenha = repsenha_.value;
    const regemail = regemail_.value;

    if (regname !== "" && regsenha !== "" && repsenha !== "" && regemail !== "") {
        // console.log([regname, regsenha, repsenha, regemail]);
        const emailValidado = validarEmail(regemail)
        
        if (regsenha == repsenha) {

            if(emailValidado) {

                if (verificarNomeUnico(regname)) {
                    cadastrar(regname, regsenha, regemail);
                    
                } else {

                    const nCadastrado________ = document.getElementById('body__modal')
                    const emailSemCadastro________ = "Nome ja está em uso!"
                
                    if (paragrafo) {
                        paragrafo.textContent = emailSemCadastro________;
                        nCadastrado________.style.display = 'flex';
                      } else {
                
                      }


                    console.log("Nome já existe, escolha outro nome.");

                }

                } else {
                    
                    const nCadastrado_______ = document.getElementById('body__modal')
                    const emailSemCadastro_______ = "Endereço de e-mail não é valido!"
                
                    if (paragrafo) {
                        paragrafo.textContent = emailSemCadastro_______;
                        nCadastrado_______.style.display = 'flex';
                      } else {
                
                      }


                console.log("E-mail invalido")
    
                }

        } else {

            const nCadastrado______ = document.getElementById('body__modal')
            const emailSemCadastro______ = "Senhas não conferem!"
        
            if (paragrafo) {
                paragrafo.textContent = emailSemCadastro______;
                nCadastrado______.style.display = 'flex';
              } else {
        
              }

            console.log("Senhas não conferem!")

        }


    } else {
        
        const nCadastrado_____ = document.getElementById('body__modal')
        const emailSemCadastro_____ = "Preencha todos os campos!"
    
        if (paragrafo) {
            paragrafo.textContent = emailSemCadastro_____;
            nCadastrado_____.style.display = 'flex';
          } else {
    
          }

        console.log("Valor nulo");
    }
});

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


function cadastrar (nome, senha, email) {

    const restauraCadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        
        const cadastro = {
            nome: nome,
            senha: senha,
            email: email
        };
    restauraCadastros.push(cadastro);



    localStorage.setItem('cadastros', JSON.stringify(restauraCadastros));
    const nCadastrado____ = document.getElementById('body__modal')
    const emailSemCadastro____ = "Cadastro realizado com sucesso!"

    if (paragrafo) {
        paragrafo.textContent = emailSemCadastro____;
        nCadastrado____.style.display = 'flex';
        formCadastro.reset()
      } else {

      }
        console.log("Cadastro realizado com sucesso!")


}

function verificarNomeUnico(nome) {
    const storedCadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    return !storedCadastros.some(cadastro => cadastro.nome === nome);
}





// LOGIN ###########################################################



const loginButton = document.querySelector('.cont__login');
const usernameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');

loginButton.addEventListener('click', function() {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    const authenticatedUser = cadastros.find(cadastro => 
        (cadastro.nome === username) && cadastro.senha === password
    );

    if (authenticatedUser) {

        const nCadastrado___ = document.getElementById('body__modal')
        const emailSemCadastro___ = "Agora você estaria logado!"

        if (paragrafo) {
            paragrafo.textContent = emailSemCadastro___;
            nCadastrado___.style.display = 'flex';
          } else {

          }
        formLogin.reset()
        console.log('Usuário autenticado:', authenticatedUser);

    } else {

        const nCadastrado__ = document.getElementById('body__modal')
        const emailSemCadastro__ = "Login ou senha invalidos!"

        if (paragrafo) {
            paragrafo.textContent = emailSemCadastro__;
            nCadastrado__.style.display = 'flex';
          } else {

          }
          formLogin.reset()

        
    }

        console.log('Login ou senha invalidos!');


    }
);




// REC. SENHA ###########################################################


const recuperarButton = document.querySelector('.cont__recuperar');
const recuperarEmail = document.getElementById('recemail');
const recuperarSenhas = document.querySelectorAll('.cont__recsenha__password');

recuperarButton.addEventListener('click', function() {
    
    const recEmail = recuperarEmail.value

    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    const recuperador = cadastros.find(cadastro => cadastro.email === recEmail);

    if (recuperador) {
        recuperarSenhas.forEach(element => {
            element.value = recuperador.senha;
    }) 
    } else {

        const nCadastrado_ = document.getElementById('body__modal')
        const emailSemCadastro_ = "E-mail não cadastrado!"

        if (paragrafo) {
            paragrafo.textContent = emailSemCadastro_;
          } else {

          }
          formRec.reset()
        nCadastrado_.style.display = 'flex';
        
        console.log("E-mail não cadastrado!")
    }
}
)





// MODAL  ###########################################################
const modalButton = document.querySelector('.button__modal');

modalButton.addEventListener('click', function(){
    const okbutton = document.getElementById('body__modal')
    okbutton.style.display = 'none';
    event.preventDefault();
})


