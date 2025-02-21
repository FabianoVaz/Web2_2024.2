const usuarioLogado = localStorage.getItem("usuarioLogado")
if(usuarioLogado == null){
    window.location.href = "formLogin.html"
}

const usuario = JSON.parse(usuarioLogado)
document.querySelector("#nome").textContent = usuario.nome

document.querySelector("#logoff").addEventListener('click', deslogar);
function deslogar(){
    localStorage.removeItem("usuarioLogado")
    window.location.href = "formLogin.html"
}