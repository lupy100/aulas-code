var dadosCliente = {
  endereco: {},
  contato: {},
};

function validarFormulario() {
  event.preventDefault();
  if (validarEndereco() && validarContato()) {
    console.log("OK")
  } else {
    console.log("Nao Ok")
  }
  validarEndereco();
  validarContato();
}
function validarEndereco() {
  objEndereco = {
    pais     : document.getElementById('country').value,
    cidade   : document.getElementById('city').value,
    estado   : document.getElementById('state').value,
    cep      : document.getElementById('zipcode').value,
    endereco1: document.getElementById('address1').value,
    endereco2: document.getElementById('address2').value
  };

  if (objEndereco.pais == '0') {
    return false;
  } else if (objEndereco.cidade == '0') {
    return false;
  } else if (objEndereco.estado.trim().length == 0) {
    return false;
  } else if (objEndereco.cep.trim().length == 0) {
    return false;
  } else if (objEndereco.endereco1.trim().length == 0) {
    return false;
  } else if (objEndereco.endereco2.trim().length == 0) {
    return false;
  } else {
    dadosCliente.endereco = objEndereco;
    console.log(objEndereco);
    return true;
  }

}
function validarContato() {
  var pacote = false;
  
  if (document.getElementById('radio').checked) {
    pacote = document.getElementById('radio').value;
  } else if(document.getElementById('radio2').checked){
    pacote = document.getElementById('radio2').value;
  }else{
    return false;
  }
  
  objContato = {
    primeironome: document.getElementById('firstname').value,
    ultimonome: document.getElementById('lastname').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('phone').value,
    pacote: pacote,
  };

  if (objContato.primeironome.trim().length == 0) {
    return false;
  } else if (objContato.ultimonome.trim().length == 0) {
    return false;
  } else if (objContato.email.trim().length == 0) {
    return false;
  } else if (objContato.telefone.trim().length == 0) {
    return false;
  } else {
    dadosCliente.contato = objContato;
    console.log(objContato);
    return true;
  }
  dadosCliente.contato = objContato;
  console.log(objContato);

}