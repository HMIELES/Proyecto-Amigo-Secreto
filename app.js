let amigos = [];
document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();   

    if (amigo === "") {
        alert("Por favor, ingresa un nombre válido de un amigo");
        return;
    }

    if (amigo === "" || amigo.length < 2) { 
        alert("Por favor, ingresa un nombre válido con más de una letra.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert("Este nombre de amigo ya ha sido agregado");
        ocument.getElementById("amigo").value = "";
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    mostrarAmigos();
}

function mostrarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const amigoItem = document.createElement("li");
        amigoItem.textContent = amigo;
        listaAmigos.appendChild(amigoItem);
    });
}

function sortearAmigo() {
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
}   