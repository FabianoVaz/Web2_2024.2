let turmas = []

loadData();

async function loadData() {
    try {
        const response = await fetch('http://localhost:3000/turma');
        if (response.ok) {
            turmas = await response.json();
            mostrar();
        } else {
            alert('Erro ao carregar produtos');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao conectar com o servidor');
    }
}

function mostrar() {
    const tabela = document.querySelector("#tabela-turma")
    tabela.innerHTML = ''
    
    turmas.map( item => {
        tabela.innerHTML += `
        <tr>
            <td>${item.modulo}</td>
            <td>${item.disciplina}</td>
            <td>${item.professor}</td>
            <td>${item.turno}</td>
            <td>${item.alunos}</td>
        </tr>
        `
    })
}