/**
 * errors
 * 
 */

class IllegalArgumentError extends Error 
{
    constructor(message) {
        super(message);
    }
}

/**
 * classes
 * 
 */

class State
{
    label;
    currentState;

    constructor(label, currentState) {
        this.label = label;
        this.currentState = currentState;
    }
}

class BooleanState extends State
{
    constructor(label, currentState) {
        if (typeof currentState !== 'boolean') {
            throw new IllegalArgumentError(`valor fornecido nao e booleano, valor: (${currentState})`);
        }
        super(label, currentState);
    }
}

class EnumState extends State 
{
    validStates;

    constructor(label, currentState, validStates = []) {
        if (!validStates.includes(currentState)) {
            throw new IllegalArgumentError(`estado fornecido nao esta presente nos valores validos permitidos, estado: (${currentState}), estados_permitidos: (${validStates})`);
        }
        super(label, currentState);
        this.validStates = validStates;
    }
}

class ButtonData
{
    label;
    buttonLabel;
    onClick;

    constructor(label, buttonLabel, onClick) {
        if (!typeof onClick === 'function') {
            throw new IllegalArgumentError(`onClick deve ser uma funcao`);
        }
        this.label = label;
        this.buttonLabel = buttonLabel;
        this.onClick = onClick;
    }
}

class ControlCardData
{
    state;
    buttonData;

    constructor(cardData) {
        if (cardData instanceof State) {
            this.state = cardData;
        } else if (cardData instanceof ButtonData) {
            this.buttonData = cardData;
        }
    }
}

/**
 * integracao com html
 */

let template = document.querySelector("#projeto-configucao-li-template");

function buildControlCardElementBool(booleanState)
{
    if (!booleanState instanceof BooleanState) throw new Error();    

    let control_card_fragment = template.content.cloneNode(true);

    let control_item_container = control_card_fragment.querySelector(".projeto-config-control-container");

    control_card_fragment.querySelector("h4").textContent = booleanState.label;
    let toggle = document.createElement('input');
    toggle.type = 'checkbox';

    toggle.className = 'projeto-config-control-bool';

    control_item_container.appendChild(toggle);

    return control_card_fragment;
}

function buildControlCardElementEnum(enumState)
{
    if (!enumState instanceof EnumState) throw new Error();

    let control_card_fragment = template.content.cloneNode(true);
    
    let control_item_container = control_card_fragment.querySelector(".projeto-config-control-container");

    control_card_fragment.querySelector("h4").textContent = enumState.label;
    let comboBox = document.createElement('select');
    
    comboBox.className = 'projeto-config-control-enum';

    enumState.validStates.forEach(possibleStates => {
        let option = document.createElement('option');
        option.value = possibleStates;
        option.textContent = possibleStates;

        option.className = 'projeto-config-control-enum-option';

        comboBox.appendChild(option);
    });

    control_item_container.appendChild(comboBox);

    return control_card_fragment;
}

function buildControlCardElementButton(buttonData)
{
    if (!buttonData instanceof ButtonData) throw new Error();

    let control_card_fragment = template.content.cloneNode(true);
    
    let control_item_container = control_card_fragment.querySelector(".projeto-config-control-container");

    control_card_fragment.querySelector("h4").textContent = buttonData.label;
    let button = document.createElement('button');
    button.textContent = buttonData.buttonLabel;
    button.addEventListener('click', buttonData.onClick);

    button.className = 'projeto-config-control-button';

    control_item_container.appendChild(button);

    return control_card_fragment;
}

function buildControlCardElement(controlCardData)
{
    if (controlCardData instanceof ControlCardData) 
    {
        if (controlCardData.state !== null)
        {
            if (controlCardData.state instanceof BooleanState)
            {
                return buildControlCardElementBool(controlCardData.state);
            }
            if (controlCardData.state instanceof EnumState)
            {
                return buildControlCardElementEnum(controlCardData.state);
            }
        }
        if (controlCardData.buttonData !== null) {
            return buildControlCardElementButton(controlCardData.buttonData);
        }
        throw new IllegalArgumentError(`inicialize algum dos possiveis estados do card de controle`);
    }
}

const lista_de_config = document.querySelector('#configuracao-lista');
function insertControlCardDataIntoHTML(controlCardData)
{
    lista_de_config.appendChild(buildControlCardElement(controlCardData));
}

/**
 * test data
 */

let config = [];
config.push(new ControlCardData(new BooleanState('permitir comentarios', false)));
config.push(new ControlCardData(new EnumState('visualizacao do projeto', 'publico', ['publico', 'privado'])));
config.push(new ControlCardData(new ButtonData('deletar conta', 'deletar', () => console.log('deletar'))));

config.forEach(cardData => {
    insertControlCardDataIntoHTML(cardData)
});