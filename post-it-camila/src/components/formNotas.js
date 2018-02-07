import Form from './form.js';
import FormInput from './formInput.js';
import FormTextarea from './formTextarea.js';
import FormButton from './formButton.js';

const criaInputTitulo = ({ notaAtual }) => {
    // immutable
    const props = {
        className: 'note__title',
        type: 'text',
        name: 'titulo',
        placeholder: 'Título',
        readonly: notaAtual.editando ? false : true,
        value: notaAtual.titulo
    };

    return new FormInput(props);
};

const criaTextareaTexto = ({ notaAtual }) => {
    // immutable
    const props = {
        className: 'note__body',
        name: 'texto',
        placeholder: 'Criar uma nota...',
        rows: 5,
        readonly: notaAtual.editando ? false : true,
        children: notaAtual.texto
    };

    return new FormTextarea(props);
};

const criaButtonConcluir = ({ posicao, nota, adicionarNota, salvarNota }, inputTitulo, textareaTexto, formNotas) => {
    // immutable
    const props = {
        className: 'note__control',
        type: 'button',
        children: 'Concluído',
        click: () => adicionarNota(inputTitulo, textareaTexto, formNotas, posicao)
    };

    return new FormButton(props);
};

const criaButtonRemover = ({ posicao, removerNota }) => {
    // immutable
    const props = {
        className: 'note__control',
        type: 'button',
        children: '<i class="fa fa-times" aria-hidden="true"></i>',
        click: event => removerNota(event, posicao)
    };

    return new FormButton(props);
};


function FormNotas(props) {
    // destructuring
    const { posicao, notaAtual, editarFormulario } = props;


    let inputTitulo = criaInputTitulo(props.notaAtual),
        textareaTexto = criaTextareaTexto(props),
        buttonConcluido = criaButtonConcluir(props, inputTitulo, textareaTexto, formNotas);

    let funcaoClick;
    if (notaAtual.editando === true) {
        funcaoClick = () => {
            //nao faço nada 
        }
    } else {
        funcaoClick = () => {
            props.editarFormulario(props.posicao)
        };
    }




    let props = {
        className: 'note',
        click: funcaoClick,
        children: [inputTitulo, textareaTexto, buttonConcluido]

    };

    if (notaAtual.editando) {
        let buttonRemover = criaButtonRemover(props);
        let outroArray = [buttonRemover];
        props.children = outroArray.concat(props.children);
    }

    let formNotas = new Form(props);

    return formNotas;
}

export default FormNotas;