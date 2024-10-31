turma = [
    {
        curso: "Técnico em Biocombustíveis",
        disciplina: "Projeto Integrador",
        professor: "Eliomau Gomes",
        turno: "Vespertino",
        alunos: 20
    },
    {
        curso: "Técnico em Informática",
        disciplina: "Desenvolvimento Web II",
        professor: "Fabiano Vaz",
        turno: "Noturno",
        alunos: 14
    },
    {
        curso: "Técnico em Informática",
        disciplina: "Linguagem II",
        professor: "Fabiano Vaz",
        turno: "Noturno",
        alunos: 1
    },
]

console.log(turma)
const tabela = document.querySelector("#tabela-turma")

turma.map( item => {
    tabela.innerHTML += `
            <tr>
                <td>${item.disciplina}</td>
                <td>${item.professor}</td>
                <td>${item.alunos}</td>
            </tr>
            `
})