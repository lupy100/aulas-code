import React from 'react';
import section from './section';
import FormNotas from './FormNotas0'
function SecaoNotas({listaNotas, removerNota, adicionarNota, editarFormulario}){
    const props = {className:'notes'};

    const children =[];
    for(let i=0; i<listaNotas.contaTotal();i++){
        const props = {
            notaAtual:i,
            removerNota:listaNotas.pega(i),
            adicionarNota: adicionarNota,
            removerNota: removerNota,
            editarFormulario: editarFormulario,
            posicao:i
        }
        let FormNotas = criarFormNotas();
        children.push();
    }
}

function criarFormNotas{
    const props{
        //    cronograma  pronto  escopo   fechado
    }
    return React.createElement('form', props. children);
}