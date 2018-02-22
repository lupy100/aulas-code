import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

function SecaoNotas({posicao, notaAtual, listaNotas, adicionarNota, editarFormulario}) {
  const propsSection ={className:"notes"}
  const children = listaNotas.map((notaAtual, posicao) =>(
      criaFormNotas(posicao, notaAtual, editarFormulario, adicionarNota, removerNota)
  ));

  function criaFormNotas() {
    const propsFormNotas = {
      key:posicao,
      posicao: listaNotas.posicao, 
      notaAtual: listaNotas.pega(posicao), 
      editarFormulario: listaNotas.editarFormulario, 
      adicionarNota: listaNotas.adicionarNota, 
      removerNota: listaNotas.removerNota
    } 
    const childrenFormNotas = []
    return React.createElement(FormNotas,propsFormNotas,childrenFormNotas)
  }
  
  for (let i = 0; i < listaNotas.contaTotal(); i++) {
    let formNotas = criaFormNotas();

    children.push(FormNotas);  
  }

  return React.createElement(Section,props,children);
}