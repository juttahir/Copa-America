const artilheiros = JSON.parse(localStorage.getItem("artilheiros")) || []

artilheiros.forEach( artilheiro => card(artilheiro) )

function card(artilheiro){

    const content = `
        <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="${artilheiro.imagem}" class="rounded float-left" alt="...">
                            <h5 class="card-title d-flex justify-content-center">${artilheiro.nome}</h5>
                            <p class="card-text d-flex justify-content-center">${artilheiro.descricao}</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="badge bg-warning">
                                    <i class="nes-icon coin is-small"></i>
                                    <span>${artilheiro.gols} Gols</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `

        const card = document.createElement("div")
        card.innerHTML = content

    document
        .querySelector("#listaDeArtilheiros")
        .appendChild(card);
}