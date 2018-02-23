import React from "react";
import Secao from "./secao";
import FormNotas from "./formNotas";
import SecaoNotas from "./secao";
import Nota from "../notas";
import ListaNotas from "../listaNota";

function montaFormNotas(
  listaNotas,
  adicionarNota,
  removerNota,
  editarFormulario
) {
  const props = {
    key: "form-notas",
    notaAtual: new Notas("", ""),
    adicionarNota: adicionarNota,
    removerNota: removerNota,
    editarFormulario: editarFormulario
  };
  return React.createElement(formNotas, props);
}

function montaSectionNotas(
  listaNotas,
  adicionarNota,
  removerNota,
  editarFormulario
) {
  const props = {
    key: "section-notas",
    listaNotas: new ListaNotas("", ""),
    adicionarNota: adicionarNota,
    removerNota: removerNota,
    editarFormulario: editarFormulario
  };

  return <Secao {...props} />;
}

const listaNotas = new ListaNotas();

function Main({ adicionarNota }) {
  let props = {
    className: "container"
  };

  let formNotas = montaFormNotas(
    this.adicionarNota,
    this.removerNota,
    this.editarFormulario
  );
  const children = [FormNotas, SecaoNotas];
  let SecaoNotas = montaSectionNotas(
    this.state.listaNotas,
    this.adicionarNota,
    this.removerNota,
    this.editarFormulario
  );

  return (
    <main {...props}>
      {formNotas}
      {SecaoNotas}
    </main>
  );
}

export default Main;
