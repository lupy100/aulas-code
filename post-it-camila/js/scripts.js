//array de notas/ variavel que representa a nota
var notas = []
// Lista 
function atualizarSecao(secao) {
    //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
    var innerHTML = "";
    //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
    for (var i = 0; i < notas.length; i++) {
      innerHTML += '';
    }
    //colocar o html de todo mundo dentro (inner) da secao
    secao.innerHTML = innerHTML;
}

function adicionarNota(inputTitle, inputText, formulario,secao) {
    // Criar um variavel nota
    var nota = {
        titulo: inputTitle.value,
        texto: inputText.value
    }
    // adiciona nota dentro da lista
    notas.push(nota)

    //atualizar a seção de notas
    atualizarSecao(secao);

    console.log(notas)
    // limpar o formulario
    formulario.reset()
  }