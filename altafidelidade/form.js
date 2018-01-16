var dadosCliente = {
  endereco: {},
  contato: {},

};

function validarFormulario() {
  event.preventDefault();
  validarEndereco();
  validarContato();
}
function validarEndereco(_objEndereco) {
  objEndereco = {
    pais : document.getElementById('country').value,
    cidade : document.getElementById('city').value,
    estado : document.getElementById('state').value,
    cep : document.getElementById('zipcode').value,
    endereco1 : document.getElementById('address1').value,
    endereco2 : document.getElementById('address2').value
  };
  dadosCliente.endereco = objEndereco;
  console.log(objEndereco);
}
function validarContato(_objContato) {
  objContato = {
    primeironome : document.getElementById('firstname').value,
    ultimonome : document.getElementById('lastname').value,
    email : document.getElementById('email').value,
    telefone : document.getElementById('phone').value,
    metodo : document.getElementById('radio_button').value,
  };
  dadosCliente.contato = objContato;
  console.log(objContato);
}