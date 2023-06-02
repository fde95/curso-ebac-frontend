const alunos = [
    { nome: "Felipe", notas: [4, 2, 10, 6] },
    { nome: "Beatriz", notas: [5, 6, 7, 8] },
    { nome: "Juan", notas: [3, 5, 9, 10] },
    { nome: "Andrea", notas: [6, 5, 7, 4] },
];

const calcularMedia = (notas) => {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    return soma / notas.length;
};

const obterAlunosAprovados = (alunos) => {
    return alunos.filter((aluno) => {
    const media = calcularMedia(aluno.notas);
    if (media >= 6) {
        console.log(`Aluno(a): ${aluno.nome} esta aprovado`);
        return true;
    } else {
        return false;
    }
});
};

const alunosAprovados = obterAlunosAprovados(alunos);