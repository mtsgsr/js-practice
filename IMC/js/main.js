// Selecionar o form e colocar numa const
const form = document.querySelector('#form');

// Função com funções que acontecem ao apertar o botão
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso'); // const para salvar o input de peso
    const inputAltura = event.target.querySelector('#altura'); // const para salvar o input de altura

    const peso = Number(inputPeso.value); // const para salvar o valor da input de peso
    const altura = Number(inputAltura.value); // const para salvar o valor da input de altura

    // IF's para verificar validade das respostas
    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }

    // Const's para pegar resultado do imc e qual o nível do imc
    const imc = getIMC(peso, altura);
    const range = getRange(imc);

    // Mensagem que aparece após apertar botão
    const message = `Seu IMC é ${imc} (${range})`;
    setResultado(message, true);

});

// Função para receber o nível do IMC
function getRange(imc){
    const range = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9){
        return range[5];
    }
    if (imc >= 34.9){
        return range[4];
    }
    if(imc >= 29.9){
        return range[3];
    }
    if(imc >= 24.9){
        return range[2];
    }
    if(imc >= 18.5){
        return range[1];
    }
    if(imc < 18.5){
        return range[0];
    }
}

// Função para calcular o IMC
function getIMC (peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Função para criar paragrafo
function createP(){
    const p = document.createElement('p');
    return p;
}

// Função para exibir resultado
function setResultado(message, success){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = createP();

    if (success){
        p.classList.add('good');
    }else{
        p.classList.add('bad');
    }

    p.innerHTML = message;
    resultado.appendChild(p)
}