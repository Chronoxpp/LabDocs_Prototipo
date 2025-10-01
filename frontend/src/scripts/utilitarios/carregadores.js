export async function obterHtml(url)
{
    const respostaHttp = await fetch(url);

    if (!respostaHttp.ok)
    {
        throw new Error('Erro ao obter HTML!');
    }

    return respostaHttp.text();
}

export async function carregarComponente(container, url)
{
    container.innerHTML = '';
    container.innerHTML = await obterHtml(url);
}

export async function importarModulo(urlModulo)
{
    const modulo = await import(urlModulo);
    await modulo.init();
}