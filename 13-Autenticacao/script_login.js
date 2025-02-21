document.querySelector("#formLogin").addEventListener("submit", logar)

function logar(event){
    event.preventDefault();

    const form = new FormData(event.target);

    const jsonUsuario = {
        "username": form.get("usuario"),
        "senha": form.get("senha"),
    }

    // Temporário -> simulador de Backend
    fetch("http://localhost:3000/usuarios")
    .then( resposta => resposta.json())
    .then( usuarios => {
        usuarios.map( usuario => {
            if(jsonUsuario.username == usuario.username){
                if(jsonUsuario.senha == usuario.senha){
                    localStorage.setItem("usuarioLogado", JSON.stringify(usuario))
                    window.location.href = "index.html"
                }
            }
        })
    })

}