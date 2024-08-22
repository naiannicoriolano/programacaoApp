//Crie um programa para calcular a massa corpórea de um indivíduo

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 17) {
        classificacao = 'Muito abaixo do peso';
    } else if (imc >= 17 && imc < 18.49) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.50 && imc < 24.99) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.99) {
        classificacao = 'Acima do peso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').textContent = `Seu IMC é ${imc.toFixed(2)} (${classificacao}).`;
}