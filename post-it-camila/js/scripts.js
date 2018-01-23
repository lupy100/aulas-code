//array de notas/ variavel que representa a nota
var notas = []
// Lista 
function atualizarSecao(secao) {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  var innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (var i = 0; i < notas.length; i++) {
    if (notas[i].editando === true) {
      innerHTML += '<form class="note">' +
                      '<input class="note__title" type="text" name="title" placeholder="Título" autofocus="">' +
                      '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota..."></textarea>' +
                      '<button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.texto,this.form,this.form.nextElementSibling)">'+
                    'Concluído' +
                    '</button>' +
                  '</form>';
    } else {
      innerHTML += '<form class="note" onclick="editarFormulario(this.form, ' + i + ')">' +
        '<button class="note__control" type="button" onclick="removerNota(this.form.parentElement, ' + i + ')">' +
        '<i class="fa fa-times" aria-hidden="true"></i>' +
        '</button>' +
        '<h1 class="note__title">' + notas[i].titulo + '</h1>' +
        '<p class="note__body">' + notas[i].texto + '</p>' +
        '</form>';
    }
  }


  //colocar o html de todo mundo dentro (inner) da secao
  secao.innerHTML = innerHTML;
}

function adicionarNota(inputTitle, inputText, formulario, secao) {
  // Criar um variavel nota
  var nota = {
    titulo: inputTitle.value,
    texto: inputText.value,
    editando: false
  }
  // adiciona nota dentro da lista
  notas.push(nota)

  //atualizar a seção de notas
  atualizarSecao(secao);

  // limpar o formulario
  formulario.reset()
}

function removerNota(secao, indice) {
  //Qual nota voce quer remover splice.(indice, quantas notas)
  notas.splice(indice, 1);

  //atualizar TELA
  atualizarSecao(secao);
}

function editarFormulario(secao, indice) {
  //pegar nota e setar editando = true
  notas[indice].editando = true;
  //chamo o atualiza tela
  atualizarSecao(secao);
}