mostrar()

function mostrar(){
    fetch('https://n8n.fabianovaz.com.br/webhook/turma')
    .then( response => response.json())
    .then( turma => {
        const tabela = document.querySelector("#tabela-turma")
        tabela.innerHTML = ''
        
        turma.map( item => {
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
    } )
    .catch( erro => console.error("Deu ruim aqui..", erro))
}

document.querySelector("#formDisc").addEventListener('submit', cadastrar)
function cadastrar(event){
    event.preventDefault();

    const form = new FormData(event.target);

    //const objeto = {};
    //form.forEach((value, key) => objeto[key] = value)

    objeto = {
        curso: "Técnico em Informática",
        modulo: form.get('modulo'),
        disciplina: form.get('disciplina'),
        professor: form.get('professor'),
        turno: form.get('turno'),
        alunos: parseInt(form.get('alunos'))
    }

    fetch('https://n8n.fabianovaz.com.br/webhook/turma',
    {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(objeto)
    })
    .then(response => {
        console.log('Resposta do servidor:', response);
        if(response.ok)
            mostrar()
    })
    .catch( erro => console.error("Deu ruim aqui..", erro))
}