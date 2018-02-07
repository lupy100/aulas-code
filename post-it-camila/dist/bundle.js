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

/***/ })
/******/ ]);