
document.getElementById('calcular').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('value').value);
    const taxa = parseFloat(document.getElementById('taxa').value) / 100;
    const tempo = parseFloat(document.getElementById('tempo').value);
    const aportes = parseFloat(document.getElementById('aportes').value);

    const tempoAnos = parseFloat(tempo * 12);

    let totalFinal = value;
    for (let i = 0; i < tempoAnos; i++) {
        totalFinal *= (1 + taxa);
        totalFinal += aportes;
    }

    const formattedTotal = totalFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    document.getElementById('totalFinal').innerHTML = formattedTotal;
});