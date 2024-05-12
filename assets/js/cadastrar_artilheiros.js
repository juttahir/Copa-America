document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", (event) => {
        event.preventDefault()

        const form = document.querySelector("form")

        const artilheiro = {
            imagem: form.imagem.value,
            nome: form.nome.value,
            descricao: form.descricao.value,
            gols: form.gols.value
        }

        console.log(form.nome.value)

        if(artilheiro.imagem && artilheiro.nome && artilheiro.descricao && artilheiro.gols){
            console.log("Funcionou")
            salvar(artilheiro)
        }
    })

function salvar(artilheiro){
    const artilheiros = JSON.parse(localStorage.getItem("artilheiros")) || []
    artilheiros.push(artilheiro)
    localStorage.setItem("artilheiros", JSON.stringify(artilheiros))

    window.location = "artilheiros.html"
}