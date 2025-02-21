obterDados();

function obterDados(){
    fetch("http://localhost:8080/veiculo")
    .then( resp => resp.json())
    .then( veiculos => {
        const tabelaHTML = document.querySelector("#corpo-tabela")
        tabelaHTML.innerHTML = ``

        veiculos.map( item => {
            tabelaHTML.innerHTML += `
                <tr>
                    <td>${item.id}</td>
                    <td>${item.modelo}</td>
                    <td>${item.placa}</td>
                    <td>${item.ano}</td>
                </tr>
            `
        })
    })
    .catch( err => console.log(err))
}

// mmmmmmmmmmmmmmmmmmmmmmmmm
document.querySelector("#addVeiculo").addEventListener('submit', cadastrar);

function cadastrar(event){
    event.preventDefault();

    const form = new FormData(event.target);

    veiculo = {
        'modelo': form.get('modelo'),
        'placa': form.get('placa'),
        'ano': parseInt( form.get('ano') )
    }

    fetch('http://localhost:8080/veiculo', 
    {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(veiculo)}
    )
    .then(resposta => {
        console.log('Resposta do servidor:', resposta);
        if(resposta.ok)
            obterDados()
    })
    .catch( erro => console.log(erro))

}
