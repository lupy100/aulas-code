class Notas {
    constructor(novoTitulo, novoTexto) {
      // modificadores visibilidade: getters/setters
      this._titulo = novoTitulo;
      this._texto = novoTexto;
      this._editando = false;
    }
    get titulo() {
      return this._titulo;
    }
    get texto() {
      return this._texto;
    }
    get editando() {
      return this._editando;
    }
    set titulo(tituloAlterado) {
      if (tituloAlterado !== null && tituloAlterado.length > 5) {
        this._titulo = tituloAlterado;
      } else {
        alert("Preencha o titulo");
      }
    }
    set texto(textoAlterado) {
      if (textoAlterado !== null ) {
        this._texto = textoAlterado;
      } else {
        alert("Preencha o texto");
      }
    }
    set editando(editandoAlterado){
      this._editando= editandoAlterado;
    }
  }
  