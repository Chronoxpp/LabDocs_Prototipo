import {carregarComponente, importarModulo} from './utilitarios/carregadores.js';

const appComponentesBasicos = document.querySelector('#appComponentesBasicos');


window.addEventListener(
    'load',
    async () =>
    {
        await carregarAppBarra();

        await carregarMenuNavegacaoPrincipal();
    }
);


async function carregarAppBarra()
{
    const componente = criarContainerComponente('componenteAppBarra');

    appComponentesBasicos.appendChild(componente);
    await carregarComponenteApp(componente, 'componentes/appBarra.html');
}


async function carregarMenuNavegacaoPrincipal()
{
    const componente = criarContainerComponente('componenteMenuNavegacaoPrincipal');

    appComponentesBasicos.appendChild(componente);
    await carregarComponenteApp(componente, 'componentes/menuNavegacaoPrincipal.html');
    await carregarScriptComponenteApp('../componentes/menuNavegacaoPrincipal.js');
}


function criarContainerComponente(nomeComponente)
{
    const componente = document.createElement('div');
    componente.setAttribute('id', nomeComponente);

    return componente;
}


//Encapsula as funcoes carregadoras de html e script
async function carregarComponenteApp(containerComponente, caminhoComponente)
{
    try
    {
        await carregarComponente(containerComponente, caminhoComponente);
    }
    catch(erro)
    {
        console.error('Erro ao carregar um dos componentes da interface!', erro);
        appComponentesBasicos.innerHTML = 'Erro ao carregar um dos componentes da interface!';
    }
}

async function carregarScriptComponenteApp(urlScript)
{
    await importarModulo(urlScript);
}