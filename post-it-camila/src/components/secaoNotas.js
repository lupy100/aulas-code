import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

function criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario) {
  const props = {
    key: posicao,
    posicao: posicao,
    notaAtual: listaNotas.pega(posicao),
    editarFormulario: editarFormulario,
    adicionarNota: adicionarNota,
    removerNota: removerNota
  }

  return React.createElement(FormNotas, props)
}

function SecaoNotas({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
  const props = { className: "notes" }

  const children = listaNotas.pegaTodos().map((notaAtual, posicao) => {
    criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormulario)
  })

  return (
    <Section {...props}>
      {children}
    </Section>
  )
}

export default SecaoNotas