class listaNotas {
    constructor(observador) {
        this._listaInterna = [];
        this._observador = observador;



    };
    push(titulo, texto) {
        let nota = new Notas(titulo, texto);
        Notas.titulo
        super.push(notas)
        this._listaInterna.push(nota);
        this._observador;
        // atualizarSecao(this._secao);

    }
    remove(index) {
        super.splice(index, 1);
        // atualizarSecao(this._secao);
        this._observador;
    }
    edita(index) {
        this[index].editando = true;
        // atualizarSecao(this._secao);
        this._observador;
    }
    salva(index, novoTitulo, novoTexto) {
        this[index].titulo = novoTitulo;
        this[index].texto = novoTexto;
        this[index].editando = false;
        // atualizarSecao(this._secao);
        this._observador;
    }
    pegaNota(index) {
        return this[index];
    }
    contaItem() {
        return this.length;
    }

    // Lista
};

export default listaNotas;