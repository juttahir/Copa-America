document.querySelector("#botao-cadastrar").addEventListener("click", (event) => {
    event.preventDefault();

    const form = document.querySelector("form");

    const jogador = {
        imagem: form.imagem.value,
        nome: form.nome.value,
        descricao: form.descricao.value,
        gols: form.gols.value
    };

    if (form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        salvar(jogador);
    } else {
        event.stopPropagation();
        form.classList.add('was-validated');
    }
});

function salvar(jogador) {
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || [];
    jogadores.push(jogador);
    localStorage.setItem("jogadores", JSON.stringify(jogadores));

    window.location = "artilheiros.html";
}

const campos = document.querySelectorAll('.needs-validation input');

campos.forEach(function(campo) {
    campo.addEventListener('input', function() {
        if (campo.validity.valid) {
            campo.classList.remove('is-invalid');
            campo.classList.add('is-valid');
            campo.nextElementSibling.style.display = 'none';
        } else {
            campo.classList.remove('is-valid');
            campo.classList.add('is-invalid');
            campo.nextElementSibling.style.display = 'block';
        }
    });
});

document.querySelector('.needs-validation').addEventListener('submit', function(event) {
    if (this.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    // Adicione a classe 'was-validated' para mostrar os tooltips de erro
    this.classList.add('was-validated');
}, false);
