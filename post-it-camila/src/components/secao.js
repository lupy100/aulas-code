import React from "react";
import Section from "./section";
import FormNotas from "./formNotas";

//Retornaar um reactElement com formNotas
function criaFormNotas(
  posicao,
  listaNota,
  adicionarNota,
  removerNota,
  editarFormularios
) {
  const propsFormNotas = {
    key: posicao,
    posicao: posicao,
    notaAtual: props.listaNota.pega(posicao),
    removerNota: props.removerNota,
    adicionarNota: props.adicionarNota,
    editarFormularios: props.editarFormularios
  };
  let form = React.createElement(formNotas, propsFormNotas);

  return <FormNotas {...props} />;
}

function SecaoNotas({ listaNota, removerNota, adicionarNota }) {
  const props = {
    className: "notes"
  };

  const children = [];

  for (let posicao = 0; posicao < listaNota.contaTotal(); posicao++) {
    let formNota = criaFormNotas(posicao, props);
    children.push(FormNotas);
  }

  return (
    <Section {...props}>
      {listaNota.pegaTodos().map((notaAtual, indice) => {
        return criaFormNotas(
          posicao,
          listaNota,
          adicionarNota,
          removerNota,
          editarFormularios
        );
      })}
    </Section>
  );
}
export default SecaoNotas;
