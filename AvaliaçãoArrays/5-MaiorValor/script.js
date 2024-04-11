function encontrarMaiorNumero(numeros) {
    let maior = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return "O maior número é: " + maior;
}

const numeros = [10, 5, 8, 20, 15, 200];
console.log(encontrarMaiorNumero(numeros));
