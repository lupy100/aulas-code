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
  const props = {
    key: posicao,
    posicao: posicao,
    notaAtual: listaNota[posicao],
    removerNota: removerNota,
    adicionarNota: adicionarNota,
    editarFormularios: editarFormularios
  };

  return <FormNotas {...props} />;
}

function SecaoNotas({ listaNota, removerNota, adicionarNota }) {
  const props = {
    className: "notes"
  };

  return (
    <Section {...props}>
      {listaNota.map((notaAtual, indice) => {
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
