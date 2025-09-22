import {carregarComponente} from "../utilitarios/carregadores.js";

(async function ()
{
    const containerMenuNavegacaoPrincipal = document.querySelector('#containerMenuNavegacaoPrincipal');

    await carregarMenuNavegacaoPrincipal();

    async function carregarMenuNavegacaoPrincipal()
    {
        try
        {
            await carregarComponente(containerMenuNavegacaoPrincipal, '../views/componentes/menuNavegacaoPrincipal.html');
        } catch (erro)
        {
            console.error('Falha ao carregar menu de navegacao principal', erro);
            containerMenuNavegacaoPrincipal.innerHTML = 'Falha ao carregar menu de navegacao principal';
        }

        const fundoMenuNavegacaoPrincipal = document.querySelector('#fundoMenuNavegacaoPrincipal');
        const menuNavegacaoPrincipal = document.querySelector('#menuNavegacaoPrincipal');

        const botaoAbrirMenuNavegacaoPrincipal = document.querySelector('#botaoAbrirMenuNavegacaoPrincipal');
        botaoAbrirMenuNavegacaoPrincipal.addEventListener(
            'click',
            () =>
            {
                abrirMenuNavegacaoPrincipal();
            }
        );

        function abrirMenuNavegacaoPrincipal()
        {
            fundoMenuNavegacaoPrincipal.classList.add("FundoMenuNavegacaoPrincipal--Aberto");
            menuNavegacaoPrincipal.classList.add("MenuNavegacaoPrincipal--Aberto");
        }

        const botaoFecharMenuNavegacaoPrincipal = document.querySelector('#botaoFecharMenuNavegacaoPrincipal');
        botaoFecharMenuNavegacaoPrincipal.addEventListener(
            'click',
            () =>
            {
                fecharMenuNavegacaoPrincipal();
            }
        );

        function fecharMenuNavegacaoPrincipal()
        {
            fundoMenuNavegacaoPrincipal.classList.remove("FundoMenuNavegacaoPrincipal--Aberto");
            menuNavegacaoPrincipal.classList.remove("MenuNavegacaoPrincipal--Aberto");
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
)();