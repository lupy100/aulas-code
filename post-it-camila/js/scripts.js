//array de notas/ variavel que representa a nota
// var notas = [];
// const calcularAreaCirculo = (raio) => {
// 	const PI = 3.14;
// 	return PI * raio * raio;
// }
const listaNotas = {
  secao: document.getElementsByClassName("notes")[0],
  listaInterna: [],
  adiciona: (titulo, texto) => {
    let nota = {
      titulo: titulo,
      texto: texto,
      editando: false
    };
    this.listaInterna.push(nota);
    atualizarSecao(this.secao);
  },
  remove: (index) => {
    this.listaInterna.splice(index, 1);
    atualizarSecao(this.secao);
  },
  edita: (index) => {
    this.listaInterna[index].editando = true;
    atualizarSecao(this.secao);
  },
  salva: (index, novoTitulo, novoTexto) => {
    this.listaInterna[index].titulo = novoTitulo;
    this.listaInterna[index].texto = novoTexto;
    this.listaInterna[index].editando = false;
    atualizarSecao(this.secao);
  },
  pegaNota:index => this.listaInterna[index],
  contaItem: () => this.listaInterna.length
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
        <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">
          ${notaAtual.texto}
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
