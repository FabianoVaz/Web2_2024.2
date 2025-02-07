const lista = document.querySelector("#lista-paises");

fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital')
.then(resposta => resposta.json())
.then( array_pais => {
    array_pais.sort((a, b) => a.name.common.localeCompare(b.name.common))
    array_pais.map( pais =>{
            lista.innerHTML += `
            <div class="paises-item">
                <div class="paises-text">
                    <span class="pais">${pais.name.common}</span>
                    <span class="capital">${pais.capital[0]}</span>
                </div>
                <div class="paises-flag">
                    <img src="${pais.flags.svg}" alt="">
                </div>
            </div>
            ` 
        })
})
.catch()