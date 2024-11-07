fetch('https://viacep.com.br/ws/48603004/json/')
.then( response => response.json())
.then( data => exibirDados(data) )
.catch( erro => console.error("Deu ruim aqui..", erro))

function exibirDados(cep){
    const tabela = document.querySelector("#tabela-turma")
    tabela.innerHTML += `
        <tr>
            <td>${cep.logradouro}</td>
            <td>${cep.bairro}</td>
            <td>${cep.localidade}</td>
        </tr>`
}