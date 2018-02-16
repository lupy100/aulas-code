import React from 'react'

import Form from './form.js'
import FormInput from './formInput'
import FormTextarea from './formTextarea'
import FormButton from './formButton'
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

  if (notaCopiada.editando) {
    let buttonRemover = criaComponenteFormButtonRemover(removerNota, posicao)
    let buttonConcluido = criaComponenteFormButtonConcluido(adicionarNota, posicao, notaCopiada)

    children = [buttonRemover, inputTitulo, textareaTexto, buttonConcluido]
  } else {
    children = [inputTitulo, textareaTexto]
    onClick = () => {
      editarFormulario(posicao)
    }
  }
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

    function criaComponenteFormButtonRemover(removerNota, posicao) {
      const props = {
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