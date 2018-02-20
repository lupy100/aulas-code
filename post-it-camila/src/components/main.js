import React from 'react';
import Section from './secaoNotas';
import formNotas from './formNotas';
import section from './section';
import Nota from '../nota';
import ListaNotas from '../listaNotas';


const listaNotas = new this.state.ListaNotas(observaMudancasNaLista);

const editarFormulario = posicao => this.state.listaNotas.edita(posicao);

const adicionarNota = (inputTitulo, textareaTexto, formulario, posicao) => {
    if (this.state.listaNotas.pega(posicao)) {
        this.state.listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
        this.state.listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
        formulario.reset();
    }
}

const removerNota = (evento, posicao) => {
    evento.stopPropagation();
    this.state.listaNotas.remove(posicao);
}

function montaFormNotas(adicionarNota, removerNota, editarFormulario ){
    const props = {
        posicao:null,
        notaAtual: new Nota('', ''),
        adicionarNota:adicionarNota,
        removerNota:removerNota,
        editarFormulario:editarFormulario
    }

    return React.createElement(formNotas, props);
}

function montaSecaoNotas(listaNotas, adicionarNota, removerNota, editarFormulario){
    const props = {
        listaNotas,
        adicionarNota:adicionarNota,
        removerNota:removerNota,
        editarFormulario:editarFormulario
    }

    return React.createElement(secaoNotas, props, children);
}


class Main extends React.Component{
    constructor(props){
        super(props);
        this.atualizarPagina = this.atualizarPagina.bind(this);
        this.state = {
            listaNotas: new ListaNotas(this.atualizarPagina)
        }
    }

    atualizarPagina(novaLista){
        console.log('Quem é this', this)
        this.setState({listaNotas:novaLista})
    };


    render(){
    const props = {
        className="container"
    }
    let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario);
    let secaoNotas = montaSecaoNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario);
    children = [formNotas, sectionNotas]
    return React.createElement('main', props, children)


    }
}