import React from 'react'
import FormNotas from './formNotas'
import SecaoNotas from './secaoNotas'
import Nota from '../nota';
import ListaNotas from '../listaNotas';

function montaFormNotas(adicionarNota, removerNota, editarFormulario) {
  const props = {
    key:'form-note',
    notaAtual: new Nota('', ''),
    adicionarNota: adicionarNota,
    removerNota: removerNota,
    editarFormulario: editarFormulario
  }
  return React.createElement(FormNotas, props)

}

function montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario) {
  const props = {
    key:'section-notes',
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

    this.atualizaPagina = this.atualizaPagina.bind(this)
    this.adicionarNota = this.adicionarNota.bind(this)
    this.removerNota = this.removerNota.bind(this)
    this.editarFormulario = this.editarFormulario.bind(this)
    this.state = {listaNotas: new ListaNotas(this.atualizaPagina)}

  }

  editarFormulario(posicao) {
    this.state.listaNotas.edita(posicao);
  }

  adicionarNota(inputTitulo, textareaTexto, formulario, posicao) {
    if (this.state.listaNotas.pega(posicao)) {
      this.state.listaNotas.salva(posicao, inputTitulo, textareaTexto);
    } else {
      this.state.listaNotas.adiciona(inputTitulo, textareaTexto);
      formulario.reset();
    }
  }

  removerNota(evento, posicao) {
    evento.stopPropagation();
    this.state.listaNotas.remove(posicao);
  }
  atualizaPagina(novaLista) {
    this.setState({ listaNotas: novaLista })
  }

  render() {
    const { state, adicionarNota, removerNota, editarFormulario } = this
    const { listaNotas } = state
    const props = { className: 'container' }

    let formNotas = montaFormNotas(adicionarNota, removerNota, editarFormulario)
    let sectionNotas = montaSectionNotas(listaNotas, adicionarNota, removerNota, editarFormulario)

    return(
      <main {...props}>
      {formNotas}
      {sectionNotas}
      </main>
    )
  }
}

export default Main;