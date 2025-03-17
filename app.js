// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];


function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Validar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    console.log("Lista actualizada de amigos:", amigos);

    // Actualizar la lista en el HTML
    actualizarListaAmigos();

    // Limpiar el campo de entrada después de agregar el nombre
    input.value = "";
    input.focus();
}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizarla
    lista.innerHTML = "";

    // Recorrer el array de amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        nuevoElemento.classList.add("name-item");
        lista.appendChild(nuevoElemento);
    }
}

// 🔹 Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio dentro del rango del array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");

    // Limpiar el resultado antes de actualizarlo
    resultado.innerHTML = "";

    // Crear un nuevo elemento con el resultado
    let resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = `🎉 El amigo secreto es: ${amigoSorteado} 🎁`;
    resultadoElemento.classList.add("result-item");

    // Agregar el resultado a la lista
    resultado.appendChild(resultadoElemento);
}

// 🔹 Asegurar que el botón tenga el evento asignado al cargar la página
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});


