import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

function criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario) {
  const propsFormNotas = {
    posicao: posicao,
    notaAtual: listaNotas.pega(posicao),
    editarFormulario: editarFormulario,
    adicionarNota: adicionarNota,
    removerNota: removerNota
  }

  return React.createElement(FormNotas, propsFormNotas)
}

function SecaoNotas({ listaNotas }) {
  const props = { className: "notes" }

  const children = listaNotas.map((notaAtual, posicao) => {
    criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario)
  })

  return React.createElement(Section, props, children);
}

export default SecaoNotas