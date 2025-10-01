import {carregarComponente} from "../utilitarios/carregadores.js";

export async function init()
{
    const componenteMenuNavegacaoPrincipal = document.querySelector('#componenteMenuNavegacaoPrincipal');

    await carregarMenuNavegacaoPrincipal();

    async function carregarMenuNavegacaoPrincipal()
    {
        try
        {
            await carregarComponente(componenteMenuNavegacaoPrincipal, '../views/componentes/menuNavegacaoPrincipal.html');
        } catch (erro)
        {
            console.error('Falha ao carregar menu de navegacao principal', erro);
            componenteMenuNavegacaoPrincipal.innerHTML = 'Falha ao carregar menu de navegacao principal';
        }

        const fundoMenuNavegacaoPrincipal = document.querySelector('#fundoMenuNavegacaoPrincipal');
        const containerMenuNavegacaoPrincipal = document.querySelector('#containerMenuNavegacaoPrincipal');

        const botaoAbrirMenuNavegacaoPrincipal = document.querySelector('#botaoAbrirMenuNavegacaoPrincipal');
        const botaoFecharMenuNavegacaoPrincipal = document.querySelector('#botaoFecharMenuNavegacaoPrincipal');

        
        botaoAbrirMenuNavegacaoPrincipal.addEventListener(
            'click',
            () =>
            {
                abrirMenuNavegacaoPrincipal();
            }
        );

        function abrirMenuNavegacaoPrincipal()
        {
            fundoMenuNavegacaoPrincipal.classList.add("Visivel");
            containerMenuNavegacaoPrincipal.classList.add('Visivel');
        }

        
        botaoFecharMenuNavegacaoPrincipal.addEventListener(
            'click',
            () =>
            {
                fecharMenuNavegacaoPrincipal();
            }
        );

        function fecharMenuNavegacaoPrincipal()
        {
            fundoMenuNavegacaoPrincipal.classList.remove("Visivel");
            containerMenuNavegacaoPrincipal.classList.remove('Visivel');
        }

        fundoMenuNavegacaoPrincipal.addEventListener(
            'click',
            () =>
            {
                fecharMenuNavegacaoPrincipal();
            }
        );
    }
}