export function addNota(title, body){
    return({
        type: ADD_NOTA,
        title:title,
        body:body
    })
}
export function removerNota(posicao){
    return({
        type:REMOVER_NOTA,
        posicao:posicao
    })
}

export function editarNota(posicao){
    return({
        type:EDITAR_NOTA,
        posicao: posicao
    })
}

export function editandoNota(posicao, title, body) {
    return({
        type:EDITANDO_NOTA,
        posicao: posicao,
        title:title,
        body: body
    })
}