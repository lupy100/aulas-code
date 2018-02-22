import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from "./ActionTypes";

export function addNote(titulo, texto) {
  return {
    type: ADD_NOTE,
    titulo,
    texto
  };
}

export function deleteNote(posicao) {
  return {
    type: DELETE_NOTE,
    posicao
  };
}

export function updateNote(titulo, texto, posicao) {
  return {
    type: UPDATE_NOTE,
    titulo,
    texto,
    posicao
  };
}
