import {carregarComponente, importarModulo} from './utilitarios/carregadores.js';

export function init()
{
    const containerProjetoVisualizacao = document.querySelector('#containerProjetoVisualizacao');

    // Carrega a pagina de artefatos do projeto
    const botaoArtefatos = document.querySelector('#botaoArtefatos');
    botaoArtefatos.addEventListener(
        'click',
        async () =>
        {
            desmarcarItensProjetoMenu();
            marcarItemProjetoMenu(botaoArtefatos);

            await carregarArtefatos();
        }
    );

    async function carregarArtefatos()
    {
        await carregarAreaDoProjeto('../views/ProjetoArtefatos.html');
        await carregarScriptDaAreaDoProjeto('../projetoArtefatos.js');
    }

    //Carrega a pagina de tarefas do projeto
    const botaoTarefas = document.querySelector('#botaoTarefas');
    botaoTarefas.addEventListener(
        'click',
        async () =>
        {
            desmarcarItensProjetoMenu();
            marcarItemProjetoMenu(botaoTarefas);

            await carregarTarefas();
        }
    );

    async function carregarTarefas()
    {
        await carregarAreaDoProjeto('../views/ProjetoTarefas.html');
        await carregarScriptDaAreaDoProjeto('../carregaTarefas.js');
    }

    //Carrega a pagina de equipe do projeto
    const botaoEquipe = document.querySelector('#botaoEquipe');
    botaoEquipe.addEventListener(
        'click',
        async () =>
        {
            desmarcarItensProjetoMenu();
            marcarItemProjetoMenu(botaoEquipe);

            await carregarEquipe();
        }
    );

    async function carregarEquipe()
    {
        await carregarAreaDoProjeto('../views/ProjetoEquipe.html');
        await carregarScriptDaAreaDoProjeto('../carregaEquipe.js');
    }

    //Carrega a pagina de configuracoes do projeto
    const botaoConfiguracoes = document.querySelector('#botaoConfiguracoes');
    botaoConfiguracoes.addEventListener(
        'click',
        async () =>
        {
            desmarcarItensProjetoMenu();
            marcarItemProjetoMenu(botaoConfiguracoes);

            await carregarConfiguracoes();
        }
    );

    async function carregarConfiguracoes()
    {
        await carregarAreaDoProjeto('../views/ProjetoConfiguracoes.html');
        await carregarScriptDaAreaDoProjeto('../carregaEquipe.js');
    }

    //Funcoes que encapsulam funcoes externas para carregar as areas do projeto
    async function carregarAreaDoProjeto(caminhoProjetoArea)
    {
        try {
            await carregarComponente(containerProjetoVisualizacao, caminhoProjetoArea);
        } catch (erro) {
            console.error('Erro ao carregar area do projeto', erro);
            containerProjetoVisualizacao.innerHTML = '<p> Erro ao carregar esta area do projeto!</p>';
        }
    }

    async function carregarScriptDaAreaDoProjeto(urlScript)
    {
        await importarModulo(urlScript);
    }

    //Outras funcoes auxiliares
    const itensProjetoMenu = document.querySelectorAll('.ProjetoMenu__Item');

    function desmarcarItensProjetoMenu()
    {
        itensProjetoMenu.forEach(
            (item) =>
            {
                item.classList.remove('ProjetoMenu__Item--Selecionado');
            }
        );
    }

    function marcarItemProjetoMenu(item)
    {
        item.classList.add('ProjetoMenu__Item--Selecionado');
    }
}

init();