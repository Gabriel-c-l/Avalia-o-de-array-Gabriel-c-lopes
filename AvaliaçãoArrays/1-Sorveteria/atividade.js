let sorvetes = [];


function add() {
    let sorvete = document.getElementById('add').value.trim();
    if (sorvete !== '') {
        if (sorvetes.length < 5) {
            if (!sorvetes.includes(sorvete)) {
                sorvetes.push(sorvete);
                alert("Sabor adicionado!");
            } else {
                alert("Este sabor já foi adicionado!");
            }
        } else {
            alert("Limite de sabores atingido, remova um sabor!");
        }
    }
}


function remove() {
    let alerta = document.getElementById('alerta');
    alerta.innerHTML = "";
    alerta.innerHTML += `Caso tenha removido algum sabor, aperte o botão novamente para atualizá-lo`;
    if (sorvetes.length > 0) {
        let sorveteParaRemover = document.getElementById('remove').value.trim();
        let indiceParaRemover = sorvetes.indexOf(sorveteParaRemover);
        if (indiceParaRemover !== -1) {
            sorvetes.splice(indiceParaRemover, 1);
            alert("Sabor removido!");
        } else {
            alert("Sabor de sorvete não encontrado na lista.");
        }
    } else {
        alert("Não existem sabores adicionados!");
    }
}


function look() {
    let resultado = document.getElementById('resultado');
    
    alerta.innerHTML = "";
    if (sorvetes.length > 0) {
        resultado.innerHTML = "Seu Pote possui os seguintes sabores:<br>";
        for (let i = 0; i < sorvetes.length; i++) {
            resultado.innerHTML += `Camada ${i + 1} - ${sorvetes[i]}<br>`;
        }
    } else {
        resultado.innerHTML = "Seu Pote não possui sabores!";
    }
}


function fecharPedido() {
    let carrinho = document.getElementById('carrinho');
    
    if (sorvetes.length > 0) {
        carrinho.innerHTML = "Pedido realizado!<br>";
        for (let i = 0; i < sorvetes.length; i++) {
            carrinho.innerHTML += `${sorvetes[i]}<br>`;
        }
    } else {
        alert("Adicione pelo menos um sabor!");
    }
}
