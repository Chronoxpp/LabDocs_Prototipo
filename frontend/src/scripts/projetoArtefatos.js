import {carregarComponente} from './utilitarios/carregadores.js';

export function init()
{
    const containerArtefatos = document.querySelector('#containerArtefatos');

    //Carrega o artefato de apresentacao do projeto
    const botaoArtefatoApresentacao = document.querySelector('#botaoArtefatoApresentacao');
    botaoArtefatoApresentacao.addEventListener(
        'click',
        async (e) =>
        {

            desmarcarItensProjetoMenuArtefatos();
            marcarItemProjetoMenuArtefatos(botaoArtefatoApresentacao);

            await carregarArtefato('ProjetoApresentacao.html');
        }
    );

    //Carrega o artefato de requisitos do projeto
    const botaoArtefatoRequisitos = document.querySelector('#botaoArtefatoRequisitos');
    botaoArtefatoRequisitos.addEventListener(
        'click',
        async (e) =>
        {
            desmarcarItensProjetoMenuArtefatos();
            marcarItemProjetoMenuArtefatos(botaoArtefatoRequisitos);

            await carregarArtefato('ProjetoRequisitos.html');
        }
    );

    //Carrega o artefato de casos de uso do projeto
    const botaoArtefatoCasosDeUso = document.querySelector('#botaoArtefatoCasosDeUso');
    botaoArtefatoCasosDeUso.addEventListener(
        'click',
        async (e) =>
        {
            desmarcarItensProjetoMenuArtefatos();
            marcarItemProjetoMenuArtefatos(botaoArtefatoCasosDeUso);

            await carregarArtefato('ProjetoCasosDeUso.html');
        }
    );

    //Carrega o artefato de prototipos do projeto
    const botaoArtefatoPrototipos = document.querySelector('#botaoArtefatoPrototipos');
    botaoArtefatoPrototipos.addEventListener(
        'click',
        async (e) =>
        {
            desmarcarItensProjetoMenuArtefatos();
            marcarItemProjetoMenuArtefatos(botaoArtefatoPrototipos);

            await carregarArtefato('ProjetoPrototipo.html');
        }
    );

    //Carrega o artefato matriz de rastreabilidade do projeto
    const botaoArtefatoMatrizRastreabilidade = document.querySelector('#botaoArtefatoMatrizRastreabilidade');
    botaoArtefatoMatrizRastreabilidade.addEventListener(
        'click',
        async (e) =>
        {
            desmarcarItensProjetoMenuArtefatos();
            marcarItemProjetoMenuArtefatos(botaoArtefatoMatrizRastreabilidade);

            await carregarArtefato('ProjetoMatrizRastreabilidade.html');
        }
    );

    //Carrega cada artefato encapsulando a funcao carregarComponentes
    async function carregarArtefato(caminhoArtefato)
    {
        try
        {
            await carregarComponente(containerArtefatos, caminhoArtefato);
        }
        catch(erro)
        {
            console.error('Erro ao carregar artefato do projeto!', erro);
            containerArtefatos.innerHTML = 'Erro ao carregar este artefato!';
        }
    }

    //Outras funcoes auxiliares
    const itensProjetoMenuArtefatos = document.querySelectorAll('.ProjetoMenuArtefatos__Item');
    function desmarcarItensProjetoMenuArtefatos()
    {
        itensProjetoMenuArtefatos.forEach(
            (item) =>
            {
                item.classList.remove('ProjetoMenuArtefatos__Item--Selecionado');
            }
        );
    }

    function marcarItemProjetoMenuArtefatos(item)
    {
        item.classList.add('ProjetoMenuArtefatos__Item--Selecionado');
    }
}