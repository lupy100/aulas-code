import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE, READ_NOTE } from "./ActionTypes";

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

export function updateNote(posicao, titulo, texto) {
  return {
    type: UPDATE_NOTE,
    titulo,
    texto,
    posicao
  };
}

export function readNote(posicao, titulo, texto) {
  return {
    type: READ_NOTE,
    posicao,
    titulo,
    texto
  };
}
