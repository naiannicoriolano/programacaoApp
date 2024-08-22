//Crie um programa que leia uma dada temperatura e  
//converta para a temperatura escolhida pelo o usuário.

function converterTemperatura() {
    const temperatura = parseFloat(document.getElementById('temperatura').value); //converte para um número decimal
    const escalaInicial = document.getElementById('escalaInicial').value;
    const escalaFinal = document.getElementById('escalaFinal').value;
    let temperaturaConvertida;

    if (escalaInicial === escalaFinal) {
        temperaturaConvertida = temperatura;
    } else if (escalaInicial === 'Celsius' && escalaFinal === 'Fahrenheit') {
        temperaturaConvertida = (temperatura * 9/5) + 32;
    } else if (escalaInicial === 'Celsius' && escalaFinal === 'Kelvin') {
        temperaturaConvertida = temperatura + 273.15;
    } else if (escalaInicial === 'Fahrenheit' && escalaFinal === 'Celsius') {
        temperaturaConvertida = (temperatura - 32) * 5/9;
    } else if (escalaInicial === 'Fahrenheit' && escalaFinal === 'Kelvin') {
        temperaturaConvertida = ((temperatura - 32) * 5/9) + 273.15;
    } else if (escalaInicial === 'Kelvin' && escalaFinal === 'Celsius') {
        temperaturaConvertida = temperatura - 273.15;
    } else if (escalaInicial === 'Kelvin' && escalaFinal === 'Fahrenheit') {
        temperaturaConvertida = ((temperatura - 273.15) * 9/5) + 32;
    }

    document.getElementById('resultado').textContent = `A temperatura convertida é: ${temperaturaConvertida.toFixed(2)} ${escalaFinal}`;
}