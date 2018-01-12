// Escopo de variavel
var clientes = [];

function cadastrarCliente (){
    event.preventDefault();


    var nome = document.getElementById('nome').value;
    
    var idade = document.getElementById('idade').value;
    var resultado;

    var cli = new Object();

    cli.nome = nome;
    cli.idade = idade;
    
        console.log(cli)


    clientes.push(cli)        
    console.log(clientes)

    document.getElementById('nome').value=''
    document.getElementById('idade').value=''

    listarCliente();

    // console.log(clientes.map(cli =>{
    //     cli.idade
    // }))
    
    /**
     * Cli
     * como se fosse:
     * var cli = {
     * name,
     * idade
     * }
     */

     


    // if(idade >= 18){
    //     resultado = "Maior de idade"
    // }else{
    //     resultado = "Menor de idade"
    // }
    // document.getElementById('resultado').innerHTML = '<p>'+resultado+'</p>';

    // document.getElementById('resultado').innerHTML = '<p>';
    // document.getElementById('resultado').innerHTML += resultado;
    // document.getElementById('resultado').innerHTML += '</p>';

    // var text = "";
    // text+="<p>";
    // text+=resultado;
    // text+="</p>";

    // console.log(resultado)
}

function listarCliente(){
    event.preventDefault();
    var listarClientes = "";
var nome = document.getElementById("nome").value;
var idade = document.getElementById("idade").value;

if(clientes.length <1){
        listarClientes += "<div> Está vazio </div>"
        document.getElementById('resultado').innerHTML = listarClientes;

}else{
    for(var i = 0; i < clientes.length; i++){
        listarClientes += "<p>Nome:"+clientes[i].nome+"</p>"
        listarClientes += "<p>Idade:"+clientes[i].idade+"</p>"
    }
    document.getElementById('resultado').innerHTML = listarClientes;
    console.log(listarClientes)
}
}

function limparCampos(){
    event.preventDefault();
    document.getElementById('nome').value=''
    document.getElementById('idade').value=''

}