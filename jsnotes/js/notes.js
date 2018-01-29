// Criação do noteJS

// Array para guardar as notas
var notas = [];

// lista todas as notas
function onReadNotes(secao) {
  var innerHTML = "";

  for (var index = 0; index < notas.length; index++) {
    // templetes que serão mostrados
    innerHTML +=
      '<form class="note">' +
      '<h1 class="note-title">' +
      notas[index].title +
      "</h1>" +
      "<ul>" +
      "<li>" +
      notas[index].notes +
      "</li>" +
      "</ul>" +
      '<div class="notes-buttons">' +
      '<button class="notes-buttons-icon" type="button">' +
      '<img class="notes-img" src="icons/apple.png" alt="apple">' +
      "</button>" +
      '<button class="notes-buttons-icon" type="button">' +
      '<img class="notes-img" src="icons/android.png" alt="android">' +
      "</button>" +
      '<button class="notes-buttons-icon" type="button">' +
      '<img class="notes-img" src="icons/chrome.png" alt="chrome">' +
      "</button>" +
      '<button class="notes-buttons-icon" type="button">X</button>' +
      "</div>" +
      "</form>";
  }
  secao.innerHTML = innerHTML;
}

// adicionar as notas na lista
function onCreateNotes(formulario, section, inputTitle, inputNotes) {
  // Objeto nota
  var nota = {
    title: inputTitle.value,
    notes: inputNotes.value,
    editing: false
  };

  notas.push(nota);

 

  console.log(nota);
}

// deleta todas as notas
function onDeleteNotes() {}

// altera as notas
function onUpdateNotes() {}

// limpa os campos
// function onClean() {
//   formulario.reset();
// }
