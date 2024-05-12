const paises = JSON.parse(localStorage.getItem("paises")) || []

paises.forEach( tabela => card(tabela) )

function card(tabela){

    const content = `
        
    <table class="table table-striped tabela">
    <p class="tabela">Grupo ${tabela.grupo}</p>
    <thead>
      <tr>
        <th scope="col-8"></th>
        <th scope="col-2">Clube</th>
        <th scope="col-1">Pts</th>
        <th scope="col-1">PJ</th>
        <th scope="col-1">VIT</th>
        <th scope="col-1">E</th>
        <th scope="col-1">DER</th>
        <th scope="col-1">GM</th>
        <th scope="col-1">GC</th>
        <th scope="col-1">SG</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><img src="./assets/images/Bandeiras/${tabela.bandeira}">${tabela.paises}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
    </tbody>
</table>
        `

        const card = document.createElement("div")
        card.innerHTML = content

    document
        .querySelector("#listaDePaises")
        .appendChild(card);
}