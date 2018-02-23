import React from 'react'
import Nota from '../nota'
import ListaNotas from '../listaNotas'
import FormNotas from './formNotas'
import SectionNotas from './sectionNotas'
import Icon from '../../dist/img/icon.png';


function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
  const props = {
    notaAtual: new Nota(undefined, '', ''),
    adicionarNota,
    removerNota,
    editarFormulario
  }

  return <FormNotas {...props} />
}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
  const props = {
    listaNotas,
    adicionarNota,
    removerNota,
    editarFormulario
  }

  return <SectionNotas {...props} />
}

function Page({ listaNotas, adicionarNota, removerNota, editarFormulario }) {
  const props = { className: 'container' }

  let formNotas = montaFormNotas(adicionarNotas, removerNota, editarFormulario)
  let SectionNotas = montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario)

  return(
    <main {...props}>
      {formNotas}
      {SectionNotas}
    </main>
  )
}

export default Page