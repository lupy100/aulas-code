"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class Pessoa {
//   constructor(primeiroNome,segundoNome,peso,altura,idade){
//     this.primeiroNome = primeiroNome;
//     this.segundoNome = segundoNome;
// 	this.peso = peso;
//     this.altura = altura;
//     this.idade = idade;
//   };

//   nomeCompleto(){
//     return `${this.primeiroNome} ${this.segundoNome}`;
//   };

//   anoNascimento(){
//     return 2018-this.idade;
//   };

//   imc(){
//   	return this.peso / (this.altura*this.altura)
//   }
// };

// let joao = new Pessoa("Joao","Matheus",90,1.80,18);

// joao


var listaNotas = function () {
  function listaNotas() {
    _classCallCheck(this, listaNotas);

    var secao = document.getElementsByClassName("notes")[0],
        listaInterna = [];
  }

  _createClass(listaNotas, [{
    key: "adiciona",
    value: function adiciona(titulo, texto) {
      var nota = {
        titulo: titulo,
        texto: texto,
        editando: false
      };
      this.listaInterna.push(nota);
      atualizarSecao(this.secao);
    }
  }, {
    key: "remove",
    value: function remove(index) {
      this.listaInterna.splice(index, 1);
      atualizarSecao(this.secao);
    }
  }, {
    key: "edita",
    value: function edita(index) {
      this.listaInterna[index].editando = true;
      atualizarSecao(this.secao);
    }
  }, {
    key: "salva",
    value: function salva(index, novoTitulo, novoTexto) {
      this.listaInterna[index].titulo = novoTitulo;
      this.listaInterna[index].texto = novoTexto;
      this.listaInterna[index].editando = false;
      atualizarSecao(this.secao);
    }
  }, {
    key: "pegaNota",
    value: function pegaNota(index) {
      return this.listaInterna[index];
    }
  }, {
    key: "contaItem",
    value: function contaItem() {
      return this.listaInterna.length;
    }
  }]);

  return listaNotas;
}();

;

var atualizarSecao = function atualizarSecao(secao) {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  var innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (var i = 0; i < listaNotas.contaItem(); i++) {
    var notaAtual = listaNotas.pegaNota(i);
    if (notaAtual.editando) {
      innerHTML += "<form class=\"note\">\n        <input class=\"note__title\" type=\"text\" name=\"title\" value=\"" + notaAtual.titulo + "\" placeholder=\"T\xEDtulo\" />\n        <textarea class=\"note__body\" name=\"texto\" rows=\"5\" placeholder=\"Criar uma nota...\">" + notaAtual.texto + "</textarea> \n        <button class=\"note__control\" type=\"button\" onclick=\"adicionarNota(this.form.title, this.form.texto,this.form," + i + ")\">\n        Conclu\xEDdo \n        </button>\n        </form>";
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