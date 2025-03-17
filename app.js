// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista con validación y actualización del array
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener ejecución si el campo está vacío
    }

    // Validar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    console.log("Lista actualizada de amigos:", amigos); // Para depuración

    // Actualizar la lista en el HTML
    actualizarListaAmigos();

    // Limpiar el campo de entrada después de agregar el nombre
    input.value = "";
    input.focus();
}

// 🔹 Nueva función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista antes de actualizarla
    lista.innerHTML = "";

    // Recorrer el array de amigos y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos[i];
        nuevoElemento.classList.add("name-item"); // Clase para estilos
        lista.appendChild(nuevoElemento);
    }
}

