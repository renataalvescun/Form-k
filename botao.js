
  // Váriaveis 

let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')
var inputNome = document.getElementById('nome');
var inputEmail = document.getElementById('email');



  // Mostrar senha/esconder senha


  btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')
    
    if(inputSenha.getAttribute('type') == 'password'){
      inputSenha.setAttribute('type', 'text')
    } else {
      inputSenha.setAttribute('type', 'password')
    }
  })
  
  btnConfirm.addEventListener('click', ()=>{
    let inputConfirmSenha = document.querySelector('#confirmSenha')
    
    if(inputConfirmSenha.getAttribute('type') == 'password'){
      inputConfirmSenha.setAttribute('type', 'text')
    } else {
      inputConfirmSenha.setAttribute('type', 'password')
    }
  })


  // Validação

inputNome.addEventListener('keyup', function() {
  if (this.value.length < 3) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
  }
});

// senha

const senhaInput = document.getElementById('senha');

senhaInput.addEventListener('input', function() {
  if (validarSenha(this.value)) {
    this.classList.remove('invalid');
  } else {
    this.classList.add('invalid');
  }
});

function validarSenha(senha) {
  // Expressão regular para verificar se a senha possui pelo menos 8 caracteres
  const minLengthRegex = /.{8,}/;

  // Expressão regular para verificar se a senha possui letras maiúsculas e minúsculas
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

  // Verifica se a senha atende a todos os requisitos
  return minLengthRegex.test(senha) && uppercaseRegex.test(senha) && lowercaseRegex.test(senha);
}

// confirmar senha

const confirmSenhaInput = document.getElementById('confirmSenha');

senhaInput.addEventListener('blur', validarSenhas);
confirmSenhaInput.addEventListener('blur', validarSenhas);

function validarSenhas() {
  const senha = senhaInput.value;
  const confirmSenha = confirmSenhaInput.value;

  if (senha === confirmSenha) {
    senhaInput.classList.remove('invalid');
    confirmSenhaInput.classList.remove('invalid');
  } else {
    senhaInput.classList.add('invalid');
    confirmSenhaInput.classList.add('invalid');
  }
}
