import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

//Retornaar um reactElement com formNotas
function criaFormNotas() {

    const propsFormNotas = {
        posicao: posicao,
        notaAtual: props.listaNotas.pega(posicao),
        removerNota: props.removerNota,
        adicionarNota: props.adicionarNota,
        editarFormularios: props.editarFormularios
    }
    let form = React.createElement(formNotas, propsFormNotas)
    const children = []

    return React.createElement(formNotas, props, children)
}

function SecaoNotas({ listaNotas, removerNota, adicionarNota }) {

    const props = {
        className: 'notes',

    }

    const children = []

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let formNotas = criaFormNotas();
        children.push(FormNotas);

    }

    return React.createElement('form', props, children)
}
export default SecaoNotas;