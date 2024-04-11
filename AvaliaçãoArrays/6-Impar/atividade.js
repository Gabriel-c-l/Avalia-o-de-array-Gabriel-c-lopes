let numeros = [];
let impares = [];

function separar() {
    let num = parseInt(document.getElementById('numero').value);

    if (!isNaN(num)) {
        if (numeros.length < 10) {
            numeros.push(num);
            document.getElementById('numero').value = "";

            let resultado = document.getElementById('resultado');
            resultado.innerHTML = "";

            resultado.innerHTML = `Numeros: ${numeros}, `;

            if (numeros.length === 10) {
                for (let i = 0; i < numeros.length; i++) {
                    if (numeros[i] % 2 !== 0) {
                        impares.push(numeros[i]);
                    }
                }
                resultado.innerHTML += `Ímpares: ${impares}`;
            }
        } else {
            alert("Limite de números atingido!");
        }
    } else {
        alert("Por favor, insira um número válido.");
    }
}
