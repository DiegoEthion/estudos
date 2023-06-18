document.getElementById('calcular').addEventListener('click', function() {
    const inicio = parseFloat(document.getElementById('inicio').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    const aportes = parseFloat(document.getElementById('aportes').value);

    const taxaTipo = document.getElementById('taxaTipo').value;
    const tempoTipo = document.getElementById('tempoTipo').value;

    let tempoCalculado;
    if (tempoTipo === 'meses') {
        tempoCalculado = tempo;
    } else if (tempoTipo === 'anos') {
        tempoCalculado = tempo * 12;
    }

    let taxaCalculada;
    if (taxaTipo === 'meses') {
        taxaCalculada = taxa;
    } else if (taxaTipo === 'anos') {
        taxaCalculada = Math.pow(1 + taxa, 1 / 12) - 1;
    }

    let totalFinal = inicio;
    for (let i = 0; i < tempoCalculado; i++) {
        totalFinal *= (1 + taxaCalculada);
        totalFinal += aportes;
    }

    const formattedTotal = totalFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('totalFinal').innerHTML = formattedTotal;
});
