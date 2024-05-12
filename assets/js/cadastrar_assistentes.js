document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (event) => {
        event.preventDefault()

        const form = document.querySelector("form")

        const jogador = {
            imagem: form.imagem.value,
            nome: form.nome.value,
            descricao: form.descricao.value,
            assistencia: form.assistencia.value
        }

        console.log(form.nome.value)

        if(jogador.imagem && jogador.nome && jogador.descricao && jogador.assistencia){
            console.log("Funcionou")
            salvar(jogador)
        }
    })

function salvar(jogador){
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    window.location = "assistencia.html"
}