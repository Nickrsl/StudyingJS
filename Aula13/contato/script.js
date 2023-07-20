const email = document.querySelector("#email");

const campos = document.querySelectorAll("input, textarea");

function validEmail() {
    const valor = email.value;
    if(valor.includes("@")){
        email.style.borderColor = "green";
    }
    else {
        email.style.borderColor = "red";
    }
}

function validarCampoVazio(evento) {
    const campo = evento.target;//target é o objeto que representa o elemento que acionou o evento
    const valor = campo.value;
    if(valor == ""){
        campo.style.borderColor = "red";
    }
    else {
        campo.style.borderColor = "green";
    }
}

email.addEventListener("keyup", validEmail);

for (let campo of campos) {
    campo.addEventListener("change", validarCampoVazio);
}