//array de notas/ variavel que representa a nota
// var notas = [];
// const calcularAreaCirculo = (raio) => {
// 	const PI = 3.14;
// 	return PI * raio * raio;
// };

class Notas {
  constructor(titulo, texto) {
    super(titulo, texto)
    this.titulo = titulo;
    this.texto = texto;
    this.editando = false;
  }
  get titulo() {
    return `O titulo é: ${this._titulo} `
  }

  get texto() {
    return this._texto;
  }

  get ediando() {
    return this._editando;
  }

  set titulo(tituloAlterado) {
    if (tituloAlterado !== null && tituloAlterado.length > 5) {
      this._titulo = tituloAlterado
    } else {
      alert('Preencha o titulo')
    }
  }

  set texto(textoAlterado) {
    if (textoAlterado !== null && textoAlterado.length > 5) {
      this._texto = textoAlterado
    } else {
      alert('Preencha o texto')
    }
  }

  set editando(editandoAlterado) {
    this._editando = editandoAlterado
  }
}


class listaNotas extends Array {
  constructor() {
    this._secao = document.getElementsByClassName("notes")[0]



  };
  push(titulo, texto) {
    let nota = new Notas(titulo, texto);
    Notas.titulo
    super.push(notas)
    this._listaInterna.push(nota);
    // atualizarSecao(this._secao);

  }
  remove(index) {
    super.splice(index, 1);
    // atualizarSecao(this._secao);
  }
  edita(index) {
    this[index].editando = true;
    // atualizarSecao(this._secao);
  }
  salva(index, novoTitulo, novoTexto) {
    this[index].titulo = novoTitulo;
    this[index].texto = novoTexto;
    this[index].editando = false;
    // atualizarSecao(this._secao);
  }
  pegaNota(index) {
    return this[index];
  }
  contaItem() {
    return this.length;
  }

  // Lista
};

const atualizarSecao = (secao) => {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  let innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (let i = 0; i < listaNotas.contaItem(); i++) {
    let notaAtual = listaNotas.pegaNota(i);
    if (notaAtual.editando) {
      innerHTML +=
        `<form class="note">
        <input class="note__title" type="text" name="title" value="${notaAtual.titulo}" placeholder="Título" />
        <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">${notaAtual.texto}
        </textarea> 
        <button class="note__control" type="button" onclick="adicionarNota(this.form.title, this.form.texto,this.form,${i})">
        Concluído 
        </button>
        </form>`;
    } else {
      innerHTML +=
        `<form class="note" onclick="editarFormulario(${i})">
        <button class="note__control" type="button" onclick="removerNota(${i},event)">
        <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <h1 class="note__title">
        ${notaAtual.titulo}
        </h1>
        <p class="note__body">
        ${notaAtual.texto} 
        </p>
        </form>`;
    }
  }
  //colocar o html de todo mundo dentro (inner) da secao
  secao.innerHTML = innerHTML;
}

const adicionarNota = (inputTitle, inputText, formulario, index) => {
  if (listaNotas.pegaNota(index)) {
    listaNotas.salva(index, inputTitle.value, inputText.value);
  } else {
    listaNotas.adiciona(inputTitle.value, inputText.value);
    formulario.reset();
  }
}

const removerNota = (indice, event) => {
  event.stopPropagation();
  listaNotas.remove(indice);
}

const editarFormulario = (indice) => listaNotas.edita(indice);
