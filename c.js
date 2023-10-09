function converterReaisParaDolares(valorEmReais) {
    const taxaCambioDolar = 5; 

    const valorEmDolares = valorEmReais / taxaCambioDolar;

    return valorEmDolares;
}

const valorEmReais = Number(prompt("Qual a quantidade em reais para converter em dólares?"));

const valorEmDolares = converterReaisParaDolares(valorEmReais);

alert(`Reais: ${valorEmReais}\nDólares: ${valorEmDolares.toFixed(2)}`);
