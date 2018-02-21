import React from 'react'

import Form from './form.js'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
import Nota from '../nota'



function criaComponenteInputTitulo(notaAlterada, posicao) {
  const props = {
    key: 'note-title',
    className: 'note__title',
    type: 'text',
    name: 'titulo',
    placeholder: 'Título',
    defaultValue: notaAlterada.titulo,
    onChange: e => {
      notaAlterada.titulo = e.target.value
    }
  }
  if (posicao !== undefined && notaAlterada.editando) {
    props.readOnly = true
  }
  return React.createElement(FormInput, props)
}

function criaComponenteTextarea(notaAlterada, posicao) {
  const props = {
    key: 'note-body',
    className: 'note__body',
    name: 'texto',
    placeholder: 'Criar uma nota...',
    rows: 5,
    defaultValue: notaAlterada.texto,
    onChange: (e) => {
      notaAlterada.texto = e.target.value
    }
  }
  if (posicao !== undefined && !notaAlterada.editando) {
    props.readOnly = true
  }
  return React.createElement(FormTextarea, props)
}

function criaComponenteFormButtonRemover(removerNota, posicao) {
  const props = {
    key: 'note-control-remover',
    className: 'note__control',
    type: 'button',
    onClick: event => {
      removerNota(event, posicao)
    }
  }
  const children = '<i class="fa fa-times" aria-hidden="true"></i>'

  return React.createElement(FormButton, props, children)
}

function criaComponenteFormButtonConcluido(adicionarNota, posicao, notaCopiada) {
  const props = {
    key: 'note-control-concluido',
    className: 'note__control',
    type: 'button',
    onClick: (e) => {
      adicionarNota(notaCopiada.titulo, notaCopiada.texto, e.target.form, posicao)
    }
  }
  const children = "Concluído"
  return React.createElement(FormButton, props, children)
}



function FormNotas({ notaAtual, posicao, adicionarNota, removerNota, editarFormulario }) {
  let notaCopiada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)

  let inputTitulo = criaComponenteInputTitulo(notaCopiada, posicao)
  let textareaTexto = criaComponenteTextarea(notaCopiada, posicao)
  let buttonRemover = criaComponenteFormButtonRemover(removerNota, posicao)
  let buttonConcluido = criaComponenteFormButtonConcluido(adicionarNota, posicao, notaCopiada)

  let props = {className: 'note'}
  
  return (
    <Form {...props}>
      {posicao !== undefined && notaCopiada.editando && buttonRemover}
      {inputTitulo}
      {textareaTexto}
      {(posicao !== undefined || notaCopiada.editando()) && buttonConcluir}

    </Form>
  )

}
export default FormNotas