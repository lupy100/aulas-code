

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