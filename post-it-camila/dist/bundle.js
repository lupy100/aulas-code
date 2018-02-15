/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _listaNota = __webpack_require__(1);

var _listaNota2 = _interopRequireDefault(_listaNota);

var _notas = __webpack_require__(2);

var _notas2 = _interopRequireDefault(_notas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secao = document.getElementsByClassName('notes')[0];
var observarMudancas = function observarMudancas() {
  atualizarSecao(secao);
};

var notas = new _notas2.default();
var listaNotas = new _listaNota2.default(observarMudancas);

var atualizarSecao = function atualizarSecao(secao) {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  var innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel

  var _loop = function _loop(i) {
    var notaAtual = listaNotas.pegaNota(i);
    if (notaAtual.editando) {
      var formularioNotas = document.createElement("form");
      formularioNotas.setAttribute('class', 'note');

      var inputTitulo = document.createElement('input');
      inputTitulo.setAttribute('class', 'note__title');
      inputTitulo.setAttribute('type', 'text');
      inputTitulo.setAttribute('name', 'title');
      inputTitulo.setAttribute('value', notaAtual.titulo);
      inputTitulo.setAttribute('placeholder', 'titulo');

      var inputText = document.createElement('textarea');
      inputTitulo.setAttribute('class', 'note__body');
      inputTitulo.setAttribute('name', 'texto');
      inputTitulo.setAttribute('rows', '5');
      inputTitulo.setAttribute('placeholder', 'Criar uma nota...');
      inputTitulo.innerHTML = notaAtual.texto;

      var buttonNote = document.createElement('button');
      inputTitulo.setAttribute('class', 'note__control');
      inputTitulo.setAttribute('type', 'button');
      inputTitulo.addEventListener('click', function () {

        adicionarNota(formularioNotas, inputTitulo, inputText, i);
      });
      inputTitulo.setAttribute('placeholder', 'Criar uma nota...');
      inputTitulo.setAttribute('textarea', notaAtual.texto);

      innerHTML += '<form class="note">\n      <input class="note__title" type="text" name="title" value="' + notaAtual.titulo + '" placeholder="T\xEDtulo" />\n      <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">' + notaAtual.texto + '\n      </textarea> \n      <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.texto,this.form,' + i + ')">\n      Conclu\xEDdo \n      </button>\n      </form>';
    } else {
      innerHTML += '<form class="note" onclick="editarFormulario(' + i + ')">\n      <button class="note__control" type="button" onclick="removerNota(' + i + ',event)">\n      <i class="fa fa-times" aria-hidden="true"></i>\n      </button>\n      <h1 class="note__title">\n      ' + notaAtual.titulo + '                                                                                                                                                              \n      </h1>\n      <p class="note__body">\n      ' + notaAtual.texto + ' \n      </p>\n      </form>';
    }
  };

  for (var i = 0; i < listaNotas.contaItem(); i++) {
    _loop(i);
  }
  //colocar o html de todo mundo dentro (inner) da secao
  secao.innerHTML = innerHTML;
};

window.adicionarNota = function (inputTitle, inputText, formulario, index) {
  if (listaNotas.pegaNota(index)) {
    listaNotas.salva(index, inputTitle.value, inputText.value);
  } else {
    listaNotas.adiciona(inputTitle.value, inputText.value);
    formulario.reset();
  }
};

window.removerNota = function (indice, event) {
  event.stopPropagation();
  listaNotas.remove(indice);
};

window.editarFormulario = function (indice) {
  return listaNotas.edita(indice);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var listaNotas = function () {
    function listaNotas(observador) {
        _classCallCheck(this, listaNotas);

        this._listaInterna = [];
        this._observador = observador;
    }

    _createClass(listaNotas, [{
        key: "push",
        value: function push(titulo, texto) {
            var nota = new Notas(titulo, texto);
            Notas.titulo;
            _get(listaNotas.prototype.__proto__ || Object.getPrototypeOf(listaNotas.prototype), "push", this).call(this, notas);
            this._listaInterna.push(nota);
            this._observador;
            // atualizarSecao(this._secao);
        }
    }, {
        key: "remove",
        value: function remove(index) {
            _get(listaNotas.prototype.__proto__ || Object.getPrototypeOf(listaNotas.prototype), "splice", this).call(this, index, 1);
            // atualizarSecao(this._secao);
            this._observador;
        }
    }, {
        key: "edita",
        value: function edita(index) {
            this[index].editando = true;
            // atualizarSecao(this._secao);
            this._observador;
        }
    }, {
        key: "salva",
        value: function salva(index, novoTitulo, novoTexto) {
            this[index].titulo = novoTitulo;
            this[index].texto = novoTexto;
            this[index].editando = false;
            // atualizarSecao(this._secao);
            this._observador;
        }
    }, {
        key: "pegaNota",
        value: function pegaNota(index) {
            return this[index];
        }
    }, {
        key: "contaItem",
        value: function contaItem() {
            return this.length;
        }

        // Lista

    }]);

    return listaNotas;
}();

;

exports.default = listaNotas;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Notas = function () {
  function Notas(novoTitulo, novoTexto) {
    var novoEditando = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Notas);

    // modificadores visibilidade: getters/setters
    this._titulo = novoTitulo;
    this._texto = novoTexto;
    this._editando = false;
  }

  _createClass(Notas, [{
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

  return Notas;
}();

exports.default = Notas;

/***/ })
/******/ ]);