const goleiros = JSON.parse(localStorage.getItem("goleiros")) || []

goleiros.forEach( goleiro => card(goleiro) )

function card(goleiro){

    const content = `
        <div class="row justify-content-center">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <img src="${goleiro.imagem}" class="rounded float-left" alt="...">
                            <h5 class="card-title d-flex justify-content-center">${goleiro.nome}</h5>
                            <p class="card-text d-flex justify-content-center">${goleiro.descricao}</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <div class="badge bg-warning">
                                    <i class="nes-icon coin is-small"></i>
                                    <span>${goleiro.defesas} Jogos dem sofer gols</span>
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
        .querySelector("#listaDeGoleiros")
        .appendChild(card);
}