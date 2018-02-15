import Form from './form.js';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';
import React from 'react'
import formInput from './formInput.js';
import formTextarea from './formTextarea.js';
import Nota from '../notas';

// cria um elemento FormInput 
// criar a return um element formInput

function criarComponentInputTitulo(notaAlterada) {
  const props = {
    className: 'note__title',
    type: 'text',
    name: 'titulo',
    placeholder: 'Titulo',
    readOnly: !notaAlterada.editando,
    defaultValue: props.notaAlterada.titulo,
    onChange: event => {
      notaAlterada.titulo = event.target.value
    }
  }

  // = NEW fORMINPUT
  return React.cloneElement(formInput, props)
}

function criarComponentTextArea(notaAlterada) {
  const props = {
    className: 'note__body',
    name: 'texto',
    placeholder: 'Criar uma nota...',
    rows: 5,
    readOnly: notaAlterada.editando,
    defaultValue: notaAlterada.texto,
    onChange: event => {
      notaAlterada.texto = event.target.value
    }
  }
  return React.createElement(formTextarea, props)
}


function criarComponentButtonremover(removerNota, posicao) {
  const props = {
    className: 'note__control',
    type: 'button',
    onClick: event => removerNota(event, posicao)

  }

  const children = React.createElement('i', {
    className: 'fa fa-times',
    'aria-hidden': true
  });

  return React.createElement(FormButton, props.children)

  // <i class="fa fa-times" aria-hidden="true"></i>;
}


function criarComponentButtonConcluido(adicionarNota, posicao, notaAlterada) {
  const props = {
    className: 'note__control',
    type: 'button',

    onClick: (event) => adicionarNota(notaAlterada.titulo, notaAlterada.texto, event.target.form, posicao)
  };

  const children = 'Concluído',
}



function FormNotas({ notaAtual, posicao, adicionarNota, removerNota, editarFormulario }) {
  // Nao podemos alterar o parametro que recebemos
  let notaAlterada = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando)
  let inputTitulo = criarComponentInputTitulo(notaAlterada);
  let textArea = criarComponentTextArea(notaAlterada);

  let props = { className: 'nota' }
  let children;

  // let inputTitulo = criaInputTitulo(notaAtual),
  //   textareaTexto = criaTextareaTexto(props),
  //   buttonConcluido = criaButtonConcluir(props, inputTitulo, textareaTexto, formNotas);


  if (notaAlterada.editando === true) {
    let buttonRemover = criarComponentButtonremover(removerNota, posicao);

    let buttonConcluido = criarComponentButtonConcluido(adicionarNota, posicao)

    children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]
  } else {
    children = [inputTitulo, textareaTexto]
    props.onClick = () => {
      editarFormulario(posicao)

    }
  }


  return React.createElement(form, formProps, children)


}

export default FormNotas;