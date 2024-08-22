// Crie um programa que sorteie números aleatórios da loteria 
//de acordo com o tipo de jogo escolhido. Certifique que os números aleatórios não se repitam.

function sortearNumeros(tipoJogo) {
    const jogos = {
        'Mega-Sena': { quantidadeNumeros: 6, maxNumero: 60 },
        'Quina': { quantidadeNumeros: 5, maxNumero: 80 },
        'Lotofácil': { quantidadeNumeros: 15, maxNumero: 25 }
    };

    const { quantidadeNumeros, maxNumero } = jogos[tipoJogo];
    const numerosSorteados = new Set(); //Set armazena os números sorteados e não permite repetição

    while (numerosSorteados.size < quantidadeNumeros) {
        const numero = Math.floor(Math.random() * maxNumero) + 1; //gera o número aleatório
        numerosSorteados.add(numero); //adiciona ao Set
    }

    return Array.from(numerosSorteados).sort((a, b) => a - b);
}

function sortear() {
    const tipoJogo = document.getElementById('tipoJogo').value;
    const resultado = sortearNumeros(tipoJogo);
    document.getElementById('resultado').textContent = resultado.join(', ');
}