//array de notas/ variavel que representa a nota
// var notas = [];
// const calcularAreaCirculo = (raio) => {
// 	const PI = 3.14;
// 	return PI * raio * raio;
// };

import ListaNota from './listaNota.js'
import Notas from './notas.js'


let secao = document.getElementsByClassName('notes')[0];
const observarMudancas = () => {
  atualizarSecao(secao);
};

const notas = new Notas();
const listaNotas = new ListaNota(observarMudancas);

const atualizarSecao = (secao) => {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  let innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (let i = 0; i < listaNotas.contaItem(); i++) {
    let notaAtual = listaNotas.pegaNota(i);
    if (notaAtual.editando) {
      let formularioNotas = document.createElement("form")
      formularioNotas.setAttribute('class', 'note')

      let inputTitulo = document.createElement('input')
      inputTitulo.setAttribute('class', 'note__title')
      inputTitulo.setAttribute('type', 'text')
      inputTitulo.setAttribute('name', 'title')
      inputTitulo.setAttribute('value', notaAtual.titulo)
      inputTitulo.setAttribute('placeholder', 'titulo')



      let inputText = document.createElement('textarea')
      inputTitulo.setAttribute('class', 'note__body')
      inputTitulo.setAttribute('name', 'texto')
      inputTitulo.setAttribute('rows', '5')
      inputTitulo.setAttribute('placeholder', 'Criar uma nota...')
      inputTitulo.innerHTML = notaAtual.texto


      let buttonNote = document.createElement('button')
      inputTitulo.setAttribute('class', 'note__control')
      inputTitulo.setAttribute('type', 'button')
      inputTitulo.addEventListener('click', () => {

        adicionarNota(formularioNotas, inputTitulo, inputText, i)
      })
      inputTitulo.setAttribute('placeholder', 'Criar uma nota...')
      inputTitulo.setAttribute('textarea', notaAtual.texto)



      innerHTML +=
        `<form class="note">
      <input class="note__title" type="text" name="title" value="${notaAtual.titulo}" placeholder="Título" />
      <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}
      </textarea> 
      <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.texto,this.form,${i})">
      Concluído 
      </button>
      </form>`;
    } else {
      innerHTML +=
        `<form class="note" onclick="editarFormulario(${i})">
      <button class="note__control" type="button" onclick="removerNota(${i},event)">
      <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <h1 class="note__title">
      ${notaAtual.titulo}                                                                                                                                                              
      </h1>
      <p class="note__body">
      ${notaAtual.texto} 
      </p>
      </form>`;
    }
  }
  //colocar o html de todo mundo dentro (inner) da secao
  secao.innerHTML = innerHTML;
}

window.adicionarNota = (inputTitle, inputText, formulario, index) => {
  if (listaNotas.pegaNota(index)) {
    listaNotas.salva(index, inputTitle.value, inputText.value);
  } else {
    listaNotas.adiciona(inputTitle.value, inputText.value);
    formulario.reset();
  }
}

window.removerNota = (indice, event) => {
  event.stopPropagation();
  listaNotas.remove(indice);
}

window.editarFormulario = (indice) => listaNotas.edita(indice);



