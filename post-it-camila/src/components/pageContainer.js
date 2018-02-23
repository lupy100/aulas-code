import React, { Component } from 'react';
import { connect } from "react-redux";
import Page from './page';
import { adicionarNota, removerNota, habilitarEdicao, alterarNota } from "../actions";

const mapStateToProps = state => (
  {
    listaNotas: state.notas
  }
)



const mapDispatchToProps = dispatch => (
  {
    adicionarNota: (titulo, texto, formulario, posicao) => {
      if (posicao === undefined) {
        dispatch(adicionarNota(titulo, texto))
        formulario.reset()
      } else {
        dispatch(alterarNota(posicao, titulo, texto))
      }
    },
    removerNota: (evento, posicao) => {
      evento.stopPropagation()
      dispatch(removerNota(posicao))
    },
    editarFormulario: (posicao) => {
      dispatch(habilitarEdicao(posicao))
    }
  }
)

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer;