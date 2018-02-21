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
        this._observador(this);
        // atualizarSecao(this._secao);

    }
    remove(index) {
        super.splice(index, 1);
        // atualizarSecao(this._secao);
        this._observador(this);
    }
    edita(index) {
        this[index].editando = true;
        // atualizarSecao(this._secao);
        this._observador(this);
    }
    salva(index, novoTitulo, novoTexto) {
        this[index].titulo = novoTitulo;
        this[index].texto = novoTexto;
        this[index].editando = false;
        // atualizarSecao(this._secao);
        this._observador(this);
    }
    pegaNota(index) {
        return this._listaInterna[index]
    }
    contaItem() {
        return this._listaInterna.length
    }

    pegaTodos() {
        return this._listaInterna
    }
    // Lista
};

export default listaNotas;