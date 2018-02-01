//array de notas/ variavel que representa a nota
var notas = [];
// const calcularAreaCirculo = (raio) => {
// 	const PI = 3.14;
// 	return PI * raio * raio;
// };
var listaNotas = {
  secao: document.getElementsByClassName("notes")[0],
  listaInterna: [],
  adiciona: (titulo, texto) => {
    var nota = {
      titulo: titulo,
      texto: texto,
      editando: false
    };
    listaNotas.listaInterna.push(nota);
    atualizarSecao(listaNotas.secao);
  },
  remove: (index) => {
    listaNotas.listaInterna.splice(index, 1);
    atualizarSecao(listaNotas.secao);
  },
  edita: (index) => {
    listaNotas.listaInterna[index].editando = true;
    atualizarSecao(listaNotas.secao);
  },
  salva: (index, novoTitulo, novoTexto) => {
    listaNotas.listaInterna[index].titulo = novoTitulo;
    listaNotas.listaInterna[index].texto = novoTexto;
    listaNotas.listaInterna[index].editando = false;
    atualizarSecao(listaNotas.secao);
  },
  pegaNota: (index) => {
    return listaNotas.listaInterna[index];
  },
  contaItem: () => {
    return listaNotas.listaInterna.length;
  }

  // Lista
};

const atualizarSecao = (secao) => {
  //criar uma variavel que guarda o html de todas as notas que deven aparecer na tela
  var innerHTML = "";
  //percorerre a lista de notas e criar o template de cada nota, e colocar na viriavel
  for (var i = 0; i < listaNotas.contaItem(); i++) {
    var notaAtual = listaNotas.pegaNota(i);
    if (notaAtual.editando) {
      innerHTML +=
        `<form class="note">
        <input class="note__title" type="text" name="title" value="${notaAtual.titulo}" placeholder="Título" />
        <textarea class="note__body" name="texto" rows="5" placeholder="Criar uma nota...">
          ${notaAtual.texto}
        </textarea> 
        <button class="note__control" type="button" onclick="adicionarNota(listaNotas.form.title, listaNotas.form.texto,listaNotas.form,${i})">
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
