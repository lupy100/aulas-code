//array de notas/ variavel que representa a nota
var notas = []

var listaNotas = {
  secao: document.getElementsByClassName("notes")[0],
  listaInterna: [],
  adiciona: function (titulo, texto) {
    var nota = {
      titulo: titulo,
      texto: texto,
      editando: false
    };
    this.listaInterna.push(nota);
    atualizarSecao(this.secao);
  },
  remove: function (index) {
    this.listaInterna.splice(index, 1);
    atualizarSecao(this.secao);
  },
  edita: function (index) {
    this.listaInterna[index].editando = true;
    atualizarSecao(this.secao);
  },
  salva: function (index, novoTitulo, novoTexto) {
    this.listaInterna[index].titulo = novoTitulo;
    this.listaInterna[index].texto = novoTexto;
    this.listaInterna[index].editando = false;
    atualizarSecao(this.secao);
  }
}
// Lista 
function atualizarSecao(secao) {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  var innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (var i = 0; i < listaNotas.listaInterna.length; i++) {
    if (listaNotas.listaInterna[i].editando) {
      innerHTML += '<form class="note">' +
        '<input class="note__title" type="text" name="title" value="' + listaNotas.listaInterna[i].titulo + '" placeholder="Título" />' +
        '<textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + listaNotas.listaInterna[i].texto + '</textarea>' +
        '<button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.texto,this.form,this.form.parentElement, ' + i + ')">' +
        'Concluído' +
        '</button>' +
        '</form>';
    } else {
      innerHTML += '<form class="note" onclick="editarFormulario(' + i + ')">' +
        '<button class="note__control" type="button" onclick="removerNota(' + i + ',event)">' +
        '<i class="fa fa-times" aria-hidden="true"></i>' +
        '</button>' +
        '<h1 class="note__title">' + listaNotas.listaInterna[i].titulo + '</h1>' +
        '<p class="note__body">' + listaNotas.listaInterna[i].texto + '</p>' +
        '</form>';
    }
  }
  //colocar o html de todo mundo dentro (inner) da secao
  secao.innerHTML = innerHTML;
}

function adicionarNota(inputTitle, inputText, formulario, secao, index) {
  if (listaNotas.listaInterna[index]) {
    listaNotas.salva(index, inputTitle.value, inputText.value);
  } else {
    listaNotas.adiciona(inputTitle.value, inputText.value);
    formulario.reset()
  }
}

function removerNota(indice, event) {
  event.stopPropagation();
  listaNotas.remove(indice);
}

function editarFormulario(indice) {
  listaNotas.edita(indice);
}