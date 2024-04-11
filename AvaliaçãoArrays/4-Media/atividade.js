let alunos = [];
let notas = [];

function media() {
    let aluno = document.getElementById('alunos').value;
    let nota = parseFloat(document.getElementById('nota').value);

    if (alunos.length < 5) {
        alunos.push(aluno);
        notas.push(nota);

        let resultado = document.getElementById('resultado');

        resultado.innerHTML = "";

        for (let i = 0; i < alunos.length; i++) {
            resultado.innerHTML += `Nome: ${alunos[i]}, Nota: ${notas[i]}<br>`;
        }
        
    } else {
        alert("Limite de alunos atingido!");
    }

    if (alunos.length === 5) {
        let media = notas.reduce((acc, cur) => acc + cur) / alunos.length;
        let resultado = document.getElementById('resultado');
        resultado.innerHTML += `<br>Média dos 5 alunos: ${media.toFixed(2)}`;
    }
}
