<<<<<<< HEAD


const listaNotas = {
    
    listaInterna: [],
    adiciona (titulo, texto) {
      let nota = {
        titulo: titulo,
        texto: texto,
        editando: false
      };
      this.listaInterna.push(nota);
      atualizarSecao(this.secao);
    },
    remove (index) {
      this.listaInterna.splice(index, 1);
      atualizarSecao(this.secao);
    },
    edita(index) {
      this.listaInterna[index].editando = true;
      atualizarSecao(this.secao);
    },
    salva: (index, novoTitulo, novoTexto) => {
      this.listaInterna[index].titulo = novoTitulo;
      this.listaInterna[index].texto = novoTexto;
      this.listaInterna[index].editando = false;
      atualizarSecao(this.secao);
    },
    pegaNota(index){ return this.listaInterna[index]},
    contaItem () {return this.listaInterna.length}
  };

  export default listaNotas;
=======
import Nota from './nota.js';


class ListaNotas {
  constructor(observador) {
    this._listaInterna = [];
    this._observador = observador;
  }

  adiciona(novoTitulo, novoTexto) {
    let nota = new Nota(novoTitulo, novoTexto);
    this._listaInterna.push(nota);
    this._observador();
  }

  remove(posicao, quantidade) {
    this._listaInterna.splice(posicao, 1);
    this._observador();
  }

  edita(posicao) {
    this._listaInterna[posicao].editando = true;
    this._observador();
  }

  salva(posicao, novoTitulo, novoTexto) {
    this._listaInterna[posicao].titulo = novoTitulo;
    this._listaInterna[posicao].texto = novoTexto;
    this._listaInterna[posicao].editando = false;
    this._observador();
  }

  pega(posicao) {
    return this._listaInterna[posicao];
  }

  contaTotal() {
    return this._listaInterna.length;
  }
};

export default ListaNotas;
>>>>>>> master
