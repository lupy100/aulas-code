import React from 'react'

import Form from './form.js'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
import FormInput from './formInput'
import Nota from '../nota'

function FormNotas(props) {
  let formNotas
  let formProps = {
    className: 'note'
  }
  let notaCopiada = new Nota(props.notaAtual.titulo, props.notaAtual.texto, props.notaAtual.editando)
  let children
  let onClick

  function criaComponenteInputTitulo(notaAlterada) {
    const props = {
      className: 'note__title',
      type: 'text',
      name: 'titulo',
      placeholder: 'Título',
      readOnly: !notaAlterada.editando,
      defaultValue: notaAlterada.titulo,
      onChange: e => {
        notaAlterada.titulo = e.target.value
      }
    }
    return React.createElement(FormInput, props)
  }

  function criaComponenteTextarea(notaAlterada) {
    const props = {
      className: 'note__body',
      name: 'texto',
      placeholder: 'Criar uma nota...',
      rows: 5,
      readOnly: !notaAlterada.editando,
      defaultValue: notaAlterada.texto,
      onChange: (e) => {
        notaAlterada.texto = e.target.value
      }
    }
    return React.createElement(FormTextarea, props)
  }

  function criaComponenteFormButtonRemover(removerNota,posicao) {
    const props = {
      className: 'note__control',
      type: 'button',
      onClick: event => {
        removerNota(event, posicao)
      }
    }
    const children = '<i class="fa fa-times" aria-hidden="true"></i>'
    
    return React.createElement(FormButton,props,children)
  }

  function criaComponenteFormButtonConcluido(adicionarNota,posicao,notaCopiada) {
    const props = {
      className: 'note__control',
      type: 'button',
      onClick: (e) => {
        adicionarNota(notaCopiada.titulo, notaCopiada.texto, e.target.form, posicao)
      }
    }  
    const children = "Concluído"
    return React.createElement(FormButton,props,children)
  }

  let inputTitulo = criaComponenteInputTitulo(notaCopiada)

  let textareaTexto = criaComponenteTextarea(notaCopiada)


  if (props.notaAtual.editando) {
    let buttonRemover = criaComponenteFormButtonRemover(props.removerNota,props.posicao)

    let buttonConcluido = criaComponenteFormButtonConcluido(props.adicionarNota,props.posicao,notaCopiada)

    children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]
  } else {
    children = [inputTitulo, textareaTexto]

    click = () => {
      props.editarFormulario(props.posicao)
    }
  }

  formNotas = React.createElement(form, formProps, children)

  return formNotas
}

export default FormNotas