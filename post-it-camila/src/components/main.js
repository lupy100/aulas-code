import React from 'react'
import FormNotas from './formNotas'
import SecaoNotas from './secaoNotas'
import Nota from '../nota';
import ListaNotas from '../listaNotas';

function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
  const props = {
    notaAtual: new Nota('', ''),
    adicionarNota: adicionarNota,
    removerNota: removerNota,
    editarFormulario: editarFormulario
  }
  return React.createElement(FormNotas, props)

}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
  const props = {
    listaNotas,
    adicionarNota,
    removerNota,
    editarFormulario
  }
  return React.createElement(SecaoNotas, props)
}


class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listaNotas: new ListaNotas(this.atualizaPagina)
    }
    // this.atualizaPagina = this.atualizaPagina.bind(this)
  }

  editarFormulario(posicao) {
    this.state.listaNotas.edita(posicao);
  }

  adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
    if (this.state.listaNotas.pega(posicao)) {
      this.state.listaNotas.salva(posicao, inputTitulo.value, textareaTexto.value);
    } else {
      this.state.listaNotas.adiciona(inputTitulo.value, textareaTexto.value);
      formulario.reset();
    }
  }

  removerNota(evento, posicao) {
    evento.stopPropagation();
    this.state.listaNotas.remove(posicao);
  }
  atualizaPagina(novaLista) {
    console.log("This", this)
    this.setState({
      listaNotas: novaLista
    })
  }

  render() {
    const props = {
      className: "container"
    }
    let formNotas = montaFormNotas(this.adicionarNota, this.removerNota, this.editarFormulario)
    let sectionNotas = montaSectionNotas(this.state.listaNotas, this.adicionarNota, this.removerNota, this.editarFormulario)
    const children = [formNotas, sectionNotas]

    return React.createElement('main', props, children)
  }
}

export default Main;