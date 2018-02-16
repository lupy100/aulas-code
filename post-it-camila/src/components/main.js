import React from 'react'
import Secao from './secao'
import FormNotas from './formNotas'
import SecaoNotas from './secao'
import Nota from '../notas'
import ListaNotas from '../listaNota'

function montaFormNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        notaAtual: new Notas('', ''),
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editarFormulario: editarFormulario
    }
    return React.createElement(formNotas, props)
}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
    const props = {
        listaNotas: new ListaNotas('', ''),
        adicionarNota: adicionarNota,
        removerNota: removerNota,
        editarFormulario: editarFormulario
    }


    return React.createElement(Secao, props)
}



const listaNotas = new ListaNotas()

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.atualizarPagina = this.atualizarPagina.bind(this);
        this.state = {
            listaNotas: new ListaNotas(this.atualizarPagina)
        }
    }



    adicionarNota(inputTitle, inputText, formulario, posicao) {
        if (this.state.ListaNotas.pegaNota(posicao)) {
            this.state.ListaNotas.salva(posicao, inputTitle.value, inputText.value);
        } else {
            this.state.ListaNotas.adiciona(inputTitle.value, inputText.value);
            formulario.reset();
        }
    }

    removerNota(posicao, event) {
        event.stopPropagation();
        this.state.ListaNotas.remove(posicao);
    }

    editarFormulario(posicao) { this.state.ListaNotas.edita(posicao) };





    atualizarPagina(newList) {
        console.log('what hell is this?', this)
        this.setState({
            listaNotas: new ListaNotas(this.atualizarPagina)
        })
    }
    render() {
        let props = {
            className: 'container'
        }

        let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
        const children = [FormNotas, SecaoNotas]
        let SecaoNotas = montaSectionNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)

        return React.createElement('main', props, children)
    }
}
export default Main; 