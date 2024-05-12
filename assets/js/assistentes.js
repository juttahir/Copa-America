const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []

jogadores.forEach( jogador => card(jogador) )

function card(jogador){

    const content = `
        <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="${jogador.imagem}" class="rounded float-left" alt="...">
                            <h5 class="card-title d-flex justify-content-center">${jogador.nome}</h5>
                            <p class="card-text d-flex justify-content-center">${jogador.descricao}</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="badge bg-warning">
                                    <i class="nes-icon coin is-small"></i>
                                    <span>${jogador.assistencia} Assistencias</span>
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
        .querySelector("#listaDejogadores")
        .appendChild(card);
}