import React from "react";
import { connect } from "react-redux";
import Main from "../components/main";

class PageContainer extends Component {
  render() {
    return <Main />;
  }
}

function mapStateToProps(state) {
  return { listaNotas: state.notas };
}

function mapDispatchoProps(dispatch) {
  return {
    addNote: (titulo, texto, formulario, posicao) => {
      if (posicao === undefined) {
        dispatch(addNote(titulo, texto));
        formulario.reset();
      } else {
        dispatch(updateNote(posicao, titulo, texto));
      }
    },

    deleteNote: (evento, posicao) => {
      evento.stopPropagation();
      dispatch(deelteNote(posicao));
    },
    readNote: posicao => {
      dispatch(readNote(posicao));
    }
  };
}
export default connect(mapStateToProps, mapDispatchoProps)(PageContainer);
