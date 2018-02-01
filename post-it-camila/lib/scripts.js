"use strict";

//array de notas/ variavel que representa a nota
// var notas = [];
// const calcularAreaCirculo = (raio) => {
// 	const PI = 3.14;
// 	return PI * raio * raio;
// }

var listaNotas = {
  secao: document.getElementsByClassName("notes")[0],
  listaInterna: [],
  adiciona: function adiciona(titulo, texto) {
    var nota = {
      titulo: titulo,
      texto: texto,
      editando: false
    };
    this.listaInterna.push(nota);
    atualizarSecao(this.secao);
  },
  remove: function remove(index) {
    this.listaInterna.splice(index, 1);
    atualizarSecao(this.secao);
  },
  edita: function edita(index) {
    this.listaInterna[index].editando = true;
    atualizarSecao(this.secao);
  },

  salva: function salva(index, novoTitulo, novoTexto) {
    undefined.listaInterna[index].titulo = novoTitulo;
    undefined.listaInterna[index].texto = novoTexto;
    undefined.listaInterna[index].editando = false;
    atualizarSecao(undefined.secao);
  },
  pegaNota: function pegaNota(index) {
    return this.listaInterna[index];
  },
  contaItem: function contaItem() {
    return this.listaInterna.length;
  }
};

var atualizarSecao = function atualizarSecao(secao) {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  var innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (var i = 0; i < listaNotas.contaItem(); i++) {
    var notaAtual = listaNotas.pegaNota(i);
    if (notaAtual.editando) {
      innerHTML += "<form class=\"note\">\n        <input class=\"note__title\" type=\"text\" name=\"title\" value=\"" + notaAtual.titulo + "\" placeholder=\"T\xEDtulo\" />\n        <textarea class=\"note__body\" name=\"texto\" rows=\"5\" placeholder=\"Criar uma nota...\">\n          " + notaAtual.texto + "\n        </textarea> \n        <button class=\"note__control\" type=\"button\" onclick=\"adicionarNota(this.form.title, this.form.texto,this.form," + i + ")\">\n        Conclu\xEDdo \n        </button>\n        </form>";
    } else {
      innerHTML += "<form class=\"note\" onclick=\"editarFormulario(" + i + ")\">\n        <button class=\"note__control\" type=\"button\" onclick=\"removerNota(" + i + ",event)\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        </button>\n        <h1 class=\"note__title\">\n        " + notaAtual.titulo + "\n        </h1>\n        <p class=\"note__body\">\n        " + notaAtual.texto + " \n        </p>\n        </form>";
    }
  }
  //colocar o html de todo mundo dentro (inner) da secao
  secao.innerHTML = innerHTML;
};

var adicionarNota = function adicionarNota(inputTitle, inputText, formulario, index) {
  if (listaNotas.pegaNota(index)) {
    listaNotas.salva(index, inputTitle.value, inputText.value);
  } else {
    listaNotas.adiciona(inputTitle.value, inputText.value);
    formulario.reset();
  }
};

var removerNota = function removerNota(indice, event) {
  event.stopPropagation();
  listaNotas.remove(indice);
};

var editarFormulario = function editarFormulario(indice) {
  return listaNotas.edita(indice);
};