class permissoes 
{
    canEdit;

    constructor(canEdit) {
        this.canEdit = canEdit;
    }
}

class perfil 
{
    id;
    nome;
    descricao;
    permissoes;

    constructor(id, nome, descricao, permissoes) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.permissoes = permissoes;
    }
}

const profile_list = document.querySelector('#perfil-lista');

function insert_perfil_into_html(perfil_obj)
{
    let template = document.querySelector("#perfil-template");
    let perfil_fragment = template.content.cloneNode(true);

    perfil_fragment.querySelector('.perfil').dataset.id = perfil_obj.id;

    perfil_fragment.querySelector('.perfil-nome').textContent = perfil_obj.nome;
    perfil_fragment.querySelector('.perfil-descricao').textContent = perfil_obj.descricao;

    perfil_fragment.querySelector('.perfil-btn-deletar').setAttribute('onclick', `delete_perfil(${perfil_obj.id})`);

    profile_list.insertBefore(
        perfil_fragment,
        profile_list.lastElementChild
    );
}


/*
    this function deletes the parenet element
*/
function delete_perfil(id) 
{
    /* deleting logic */

    let perfil_element = document.querySelector(`[data-id="${id}"]`);

    if (perfil_element) perfil_element.parentElement.remove();
}



/*
    test data
*/
const visitante = new perfil(0, 'visitante', 'observa', new permissoes(false))
const colaborador = new perfil(1, 'colaborador', 'contribui', new permissoes(true))

insert_perfil_into_html(visitante);
insert_perfil_into_html(colaborador);