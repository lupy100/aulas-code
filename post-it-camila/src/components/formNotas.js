import React from 'react'

import Form from './form.js'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
import FormInput from './formInput'
import Nota from '../nota'

function FormNotas({
  notaAtual,
  posicao,
  adicionarNota,
  removerNota,
  editarFormulario
}) {
  let notaCopiada = new Nota(notaAtual.titulo, notaAtual.texto, notaAtual.editando)

  let inputTitulo = criaComponenteInputTitulo(notaCopiada)
  let textareaTexto = criaComponenteTextarea(notaCopiada)

  let props = {
    className: 'note'
  }
  let children

  let formNotas


  return(
    <Form {...props}>
      {posicao !== undefined &&notaCopiada.editando && buttonRemover}
      {inputTitulo}
      {textareaTexto}
      {posicao !== undefined!! notaCopiada.editando} && buttonConcluido}
    </Form>
  )
  }

    function criaComponenteInputTitulo(notaCopiada, posicao) {
      const props = {
        key:'note-text-input',
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        defaultValue: notaAlterada.titulo,
      }

      if(posicao !== undefined && !notaCopiada.editando){
        props.readOnly = true
      }
      return React.createElement(FormInput, props)
    }

    function criaComponenteTextarea(notaCopiada, posicao) {
      const props = {
        key:'note-text-area',
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readOnly: !notaAlterada.editando,
        defaultValue: notaAlterada.texto,
      }
          if(posicao !== undefined && !notaCopiada.editando){
            props.readOnly = true
          }
      return React.createElement(FormTextarea, props)
    }

    function criaComponenteFormButtonRemover(removerNota, posicao) {
      const props = {
        key:'note-button-remover',
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
        key:'note-button-adicionar',
        className: 'note__control',
        type: 'button',
        onClick: (e) => {
          adicionarNota(notaCopiada.titulo, notaCopiada.texto, e.target.form, posicao)
        }
      }
      const children = "Concluído"
      return React.createElement(FormButton, props, children)
    }

  formNotas = React.createElement(form, props, children)

  return formNotas
}

export default FormNotas