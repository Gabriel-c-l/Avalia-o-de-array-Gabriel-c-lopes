let numeros = [];

function contrary() {
    let numero = parseInt(document.getElementById('numbers').value.trim());
    let resultado = document.getElementById('resultado');
    let some = document.getElementById('some');

    if (numero !== '') {
        if (numeros.length < 5) {
            if (!numeros.includes(numero)) {
                numeros.push(numero);
                resultado.innerHTML = `Itens do array: ${numeros.join(', ')}`;
                let soma = numeros.reduce((total, numero) => total + numero, 0);
                some.innerHTML = `Soma dos itens do array: ${soma}`; 
            } 
        } else {
            alert("Limite de números atingido!");
        }
    }   
}
