export function init()
{
    const fundoPopupAdicaoElementos = document.querySelector('#fundoPopupAdicaoElementos');
    const projetoApresentacaoConteudo = document.querySelector('#projetoApresentacaoConteudo');
    const containerInputConteudoElemento = document.querySelector('#containerInputConteudoElemento');
    const containerInputTextoLivre = document.querySelector('#containerInputTextoLivre');
    const containerInputTamanhoImagem = document.querySelector('#containerInputTamanhoImagem');

    const botaoAbrirPopupAdicaoElementos = document.getElementById("botaoAbrirPopupAdicaoElementos");
    const botaoFecharPopupAdicaoElementos = document.getElementById("botaoFecharPopup");
    const botaoAdicionarElemento = document.getElementById('botaoAdicionarElemento');

    const inputTipoElemento = document.getElementById("inputTipoElemento");
    const inputConteudoElemento = document.querySelector('#inputConteudoElemento');
    const inputTextoLivre = document.querySelector('#inputTextoLivre');
    const inputTamanhoImagem = document.querySelector('#inputTamanhoImagem');

    // Abrir popup
    botaoAbrirPopupAdicaoElementos.addEventListener(
        'click',
        () =>
        {
            abrirPopup();
        }
    );

    function abrirPopup()
    {
        fundoPopupAdicaoElementos.classList.add('DisplayFlex');
    }


    // Fechar popup
    botaoFecharPopupAdicaoElementos.addEventListener(
        'click',
        () =>
        {
            fecharPopup();
        }
    );

    function fecharPopup()
    {
        fundoPopupAdicaoElementos.classList.remove('DisplayFlex');
    }

    removerDisplayTodosContainersInputs();
    function removerDisplayTodosContainersInputs()
    {
        containerInputConteudoElemento.classList.add('DisplayNone');
        containerInputTextoLivre.classList.add('DisplayNone');
        containerInputTamanhoImagem.classList.add('DisplayNone');
    }

    liberarInputsConformeTipoSelecionado();

    inputTipoElemento.addEventListener('change', liberarInputsConformeTipoSelecionado);

    function liberarInputsConformeTipoSelecionado()
    {
        removerDisplayTodosContainersInputs();
        botaoAdicionarElemento.enabled = false;
        botaoAdicionarElemento.classList.add('Botao--Desativado');

        switch (inputTipoElemento.value)
        {
            case 'titulo':
                inputConteudoElemento.placeholder = 'Escreva um titulo';
                containerInputConteudoElemento.classList.remove('DisplayNone');
                break;

            case 'subtitulo':
                inputConteudoElemento.placeholder = 'Escreva um subtitulo';
                containerInputConteudoElemento.classList.remove('DisplayNone');
                break;

            case 'texto':
                containerInputTextoLivre.classList.remove('DisplayNone');

                break;

            case 'listaOrdenada':
                break;

            case 'listaNaoOrdenada':
                break;

            case 'imagem':
                inputConteudoElemento.placeholder = 'Cole a URL de uma imagem';
                containerInputConteudoElemento.classList.remove('DisplayNone');
                containerInputTamanhoImagem.classList.remove('DisplayNone');
                break;
        }

        if (! (inputTipoElemento.value === 'listaOrdenada' || inputTipoElemento.value === 'listaNaoOrdenada'))
        {
            botaoAdicionarElemento.classList.remove('Botao--Desativado');
            botaoAdicionarElemento.enabled = true;
        }
    }


    botaoAdicionarElemento.addEventListener(
        'click',
        () =>
        {
            adicionarElemento();
            fecharPopup();
        }
    );

    function adicionarElemento()
    {
        const elemento = criarElemento(inputTipoElemento.value);

        if (!elemento)
        {
            return;
        }

        projetoApresentacaoConteudo.appendChild(elemento);
        limparInputsTexto();
    }

    function criarElemento(nomeElemento)
    {
        let elemento;
        switch(nomeElemento)
        {
            case "titulo":
                if (!inputConteudoElemento.value.trim()) return;

                elemento = document.createElement("h1");
                elemento.textContent = inputConteudoElemento.value.trim();
                elemento.classList.add('ProjetoApresentacao__Titulo');
                break;

            case "subtitulo":
                if (!inputConteudoElemento.value.trim()) return;

                elemento = document.createElement("h2");
                elemento.textContent = inputConteudoElemento.value.trim();
                elemento.classList.add('ProjetoApresentacao__Subtitulo');
                break;

            case "texto":
                if (!inputTextoLivre.value.trim()) return;

                elemento = document.createElement("p");
                elemento.textContent = inputTextoLivre.value.trim();
                elemento.classList.add('Texto');
                break;

            case "imagem":
                if (!inputConteudoElemento.value.trim()) return;

                elemento = document.createElement("img");
                elemento.src = inputConteudoElemento.value.trim();
                elemento.classList.add('ProjetoApresentacao__Imagem');
                elemento.classList.add(inputTamanhoImagem.value === 'pequena'? 'ProjetoApresentacao__Imagem--Pequena' : 'ProjetoApresentacao__Imagem--Media');
                break;
        }

        return elemento;
    }

    function limparInputsTexto()
    {
        inputConteudoElemento.value = '';
        inputTextoLivre.value = '';
    }
}