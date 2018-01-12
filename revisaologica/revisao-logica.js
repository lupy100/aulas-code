var clientes = [];

function cadastrarCliente() {
    event.preventDefault();


    var objNome = document.getElementById('nome');
    var objIdade = document.getElementById('idade');

    var cliente = {
        nome: objNome.value,
        idade: objIdade.value,
    };

    clientes.push(cliente);
    var resultado;

    if (idade >= 18) {
        resultado = "Maior";
    } else {
        resultado = "Menor";
    }
    // document.getElementById("resultado").innerHTML = resultado;
    var text = "";
    text = "<p>";
    text += resultado;
    text += "</p>";
    document.getElementById("resultado").innerHTML = text;

    objNome.value = "";
    objIdade.value = "";

    console.log(cliente);
    console.log(clientes);

}