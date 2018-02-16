import React from 'react'
import Section from './section'
import FormNotas from './formNotas'

//Retornaar um reactElement com formNotas
function criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormularios) {

    const propsFormNotas = {
        posicao: posicao,
        notaAtual: props.listaNotas.pega(posicao),
        removerNota: props.removerNota,
        adicionarNota: props.adicionarNota,
        editarFormularios: props.editarFormularios
    }
    let form = React.createElement(formNotas, propsFormNotas)


    return React.createElement(formNotas, props, children)
}

function SecaoNotas({ listaNotas, removerNota, adicionarNota }) {

    const props = {
        className: 'notes',

    }

    const children = []

    for (let posicao = 0; posicao < listaNotas.contaTotal(); posicao++) {
        let formNotas = criaFormNotas(posicao, props);
        children.push(FormNotas);

    }

    // Children = props.listaNotas.map((notaAtual, indice) => (
    //     criaFormNotas(posicao, props)
    // ))


    Children = listaNotas.map((notaAtual, indice) => {
        return criaFormNotas(posicao, listaNotas, adicionarNota, removerNota, editarFormularios)
    })
        



    return React.createElement('form', props, children)
}
export default SecaoNotas;