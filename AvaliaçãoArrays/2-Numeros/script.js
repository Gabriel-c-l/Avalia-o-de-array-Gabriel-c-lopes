let numeros = [];

function contrary() {
    let resultado = document.getElementById('resultado');
    let contrario = document.getElementById('contrario');
    let numero = document.getElementById('numbers').value.trim();

    if (numero !== '') {
        if (numeros.length < 3) {
            if (!numeros.includes(numero)) {
                numeros.push(numero);
                
            } 
        } else {
            alert("Limite de números atingido!");
        }
    }
  
    if (numeros.length === 3) {
        resultado.innerHTML = `Resultado: ${numeros}`;
        contrario.innerHTML = `Resultado ao contrário: ${numeros.slice().reverse()}`;
    }
}
