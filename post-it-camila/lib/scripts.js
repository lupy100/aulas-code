"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
var Nota = function () {
  function Nota(novoTitulo, novoTexto) {
    _classCallCheck(this, Nota);

    // modificadores visibilidade: getters/setters
    this._titulo = novoTitulo;
    this._texto = novoTexto;
    this._editando = false;
  }

  _createClass(Nota, [{
    key: "titulo",
    get: function get() {
      return this._titulo;
    },
    set: function set(tituloAlterado) {
      if (tituloAlterado !== null && tituloAlterado.length > 5) {
        this._titulo = tituloAlterado;
      } else {
        alert("Preencha o titulo");
      }
    }
  }, {
    key: "texto",
    get: function get() {
      return this._texto;
    },
    set: function set(textoAlterado) {
      if (textoAlterado !== null) {
        this._texto = textoAlterado;
      } else {
        alert("Preencha o texto");
      }
    }
  }, {
    key: "editando",
    get: function get() {
      return this._editando;
    },
    set: function set(editandoAlterado) {
      this._editando = editandoAlterado;
    }
  }]);

  return Nota;
}();

var ListaNotas = function (_Array) {
  _inherits(ListaNotas, _Array);

  function ListaNotas() {
    _classCallCheck(this, ListaNotas);

    return _possibleConstructorReturn(this, (ListaNotas.__proto__ || Object.getPrototypeOf(ListaNotas)).call(this));
    // this._secao = document.getElementsByClassName("notes")[0];
  }

  _createClass(ListaNotas, [{
    key: "push",
    value: function push(novoTitulo, novoTexto) {
      // let nota = {titulo:novoTitulo , texto:novoTexto};
      var nota = new Nota(novoTitulo, novoTexto);
      _get(ListaNotas.prototype.__proto__ || Object.getPrototypeOf(ListaNotas.prototype), "push", this).call(this, nota);
      atualizarSecao(this._secao);
    }
  }, {
    key: "splice",
    value: function splice(posicao, quantidade) {
      _get(ListaNotas.prototype.__proto__ || Object.getPrototypeOf(ListaNotas.prototype), "splice", this).call(this, posicao, quantidade);
      atualizarSecao(this._secao);
    }
  }, {
    key: "edita",
    value: function edita(posicao) {
      this[posicao].editando = true;
      atualizarSecao(this._secao);
    }
  }, {
    key: "salva",
    value: function salva(posicao, novoTitulo, novoTexto) {
      this[posicao].titulo = novoTitulo;
      this[posicao].texto = novoTexto;
      this[posicao].editando = false;
      atualizarSecao(this._secao);
    }
  }, {
    key: "pega",
    value: function pega(posicao) {
      return this[posicao];
    }
  }, {
    key: "contaTotal",
    value: function contaTotal() {
      return this.length;
    }
  }]);

  return ListaNotas;
}(Array);

;

var listaNotas = new ListaNotas();

var atualizarSecao = function atualizarSecao(secao) {
  var conteudoSecao = "";

  for (var posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
    var notaAtual = listaNotas.pega(posicao);
    if (notaAtual.editando) {
      conteudoSecao += "<form class=\"note\">\n                              <input class=\"note__title\" type=\"text\" name=\"titulo\" value=\"" + notaAtual.titulo + "\" placeholder=\"T\xEDtulo\">\n                              <textarea class=\"note__body\" name=\"texto\" rows=\"5\" placeholder=\"Criar uma nota...\">" + notaAtual.texto + "</textarea>\n                              <button class=\"note__control\" type=\"button\" onclick=\"adicionarNota(this.form.titulo, this.form.texto, this.form, " + posicao + ")\">\n                                  Conclu\xEDdo\n                              </button>\n                            </form>";
    } else {
      conteudoSecao += "<form class=\"note\" onclick=\"editaFormulario(" + posicao + ")\">\n                              <button class=\"note__control\" type=\"button\" onclick=\"removerNota(event, " + posicao + ")\">\n                                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                              </button>\n                              <h1 class=\"note__title\">" + notaAtual.titulo + "</h1>\n                              <p class=\"note__body\">" + notaAtual.texto + "</p>\n                            </form>";
    }
  }

  secao.innerHTML = conteudoSecao;
};

var editaFormulario = function editaFormulario(posicao) {
  return listaNotas.edita(posicao);
};

var adicionarNota = function adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
  if (listaNotas.pega(posicao)) {
    listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
  } else {
    listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
    formulario.reset();
  }
};

var removerNota = function removerNota(evento, posicao) {
  evento.stopPropagation();
  listaNotas.remove(posicao);
};