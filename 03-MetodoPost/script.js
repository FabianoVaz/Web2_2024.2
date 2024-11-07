turma = [
    {
        modulo: "4º Módulo",
        curso: "Técnico em Biocombustíveis",
        disciplina: "Projeto Integrador",
        professor: "Eliomau Gomes",
        turno: "Vespertino",
        alunos: 20
    },
    {
        modulo: "4º Módulo",
        curso: "Técnico em Informática",
        disciplina: "Desenvolvimento Web II",
        professor: "Fabiano Vaz",
        turno: "Noturno",
        alunos: 14
    },
    {
        modulo: "3º Módulo",
        curso: "Técnico em Informática",
        disciplina: "Linguagem II",
        professor: "Fabiano Vaz",
        turno: "Noturno",
        alunos: 1
    },
]

carregarDados()

function carregarDados(){
    const tabela = document.querySelector("#tabela-turma")
    tabela.innerHTML = ""
    
    console.log(turma)

    turma.map( item => {
        tabela.innerHTML += `
                <tr>
                    <td>${item.disciplina}</td>
                    <td>${item.professor}</td>
                    <td>${item.alunos}</td>
                </tr>
                `
    })
}

document.querySelector("#form").addEventListener('submit', salvar)

function salvar(event){
    event.preventDefault();

    const formData = new FormData(event.target);
    
    jsonData = {
        modulo: "Módulo",
        curso: "Técnico em Biocombustíveis",
        disciplina: formData.get('disciplina'),
        professor: formData.get('professor'),
        turno: "Vespertino",
        alunos: parseInt(formData.get('alunos'))
    }

    turma.push(jsonData)
    carregarDados()
}