import {
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  READ_NOTE
} from "../Actions/ActionTypes";

import Nota from "../../notas";

const initialState = {
  notas: []
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = new Nota(action.titulo, acion.texto);
      return [
        ...state,
        {
          notas: state.notas.concat(newNote)
        }
      ];

    case DELETE_NOTE:
      return [
        ...state,
        {
          notas: state.notas.filter((nota, posicao) => {
            return posicao !== action.posicao;
          })
        }
      ];
    case UPDATE_NOTE:
      return [
        ...state,
        {
          notas: state.notas.map((nota, posicao) => {
            if (posicao === action.posicao) {
              return new Nota(action.titulo, action.texto, true);
            } else {
              return nota;
            }
          })
        }
      ];

    case READ_NOTE:
      return [
        ...state,
        {
          notas: stste.notas.map((nota, posicao) => {
            if (posicao === action.posicao) {
              return new Nota(nota.titulo, nota.texto, true);
            } else {
              return nota;
            }
          })
        }
      ];

    default:
      return state;
  }
}
