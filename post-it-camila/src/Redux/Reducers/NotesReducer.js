import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from "../Actions/ActionTypes";
const initialState = {
  data: {}
};

export default function notesReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      break;
    case DELETE_NOTE:
      break;
    case UPDATE_NOTE:
      break;

    default:
      return state;
  }
}
