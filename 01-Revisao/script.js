turma = [
    {
        modulo: "3º Módulo",
        curso: "Técnico em Biocombustíveis",
        disciplina: "Projeto",
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
]

document.querySelector("#carregar").addEventListener('click', carregar)
document.querySelector("#navegar").addEventListener('click', navegar)

var cont = -1
function carregar(){
    cont = 0
    document.querySelector("#modulo").textContent = turma[0].modulo
    document.querySelector("#curso").textContent = turma[0].curso
    document.querySelector("#disc").textContent = turma[0].disciplina
    document.querySelector("#professor").textContent = turma[0].professor
    document.querySelector("#turno").textContent = turma[0].turno
    document.querySelector("#qtd").textContent = turma[0].alunos
}

function navegar(){
    cont++
    document.querySelector("#modulo").textContent = turma[cont].modulo
    document.querySelector("#curso").textContent = turma[cont].curso
    document.querySelector("#disc").textContent = turma[cont].disciplina
    document.querySelector("#professor").textContent = turma[cont].professor
    document.querySelector("#turno").textContent = turma[cont].turno
    document.querySelector("#qtd").textContent = turma[cont].alunos
}

function teste(){
    /* for (let i=0; i < 2; i++) {
        const prof = turma[i].professor
        alert(prof)
    } */

    /* turma.forEach(item => {
        const prof = item.professor
        alert(prof)
    }); */

    /* turma.map(item => {
        const prof = item.professor
        alert(prof)
    }); */

}