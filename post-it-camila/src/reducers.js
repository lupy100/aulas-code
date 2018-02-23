export default function postitApp(estadoAtual = estadoInicial, acao){
    switch(acao.type){
        case ADICIONAR_NOTA:
            const novaNota = new Nota(acao.titulo, acao.texto)
            const EstadoNovo = {
                notas: estadoAtual.notas.concat(novaNota)
            }
            return EstadoNovo
    }
}