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

    // Crear un nuevo elemento de lista en la página
    let lista = document.getElementById("listaAmigos");
    let nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    nuevoElemento.classList.add("name-item"); // Clase para aplicar estilos
    lista.appendChild(nuevoElemento);

    // 🔹 Limpiar el campo de entrada después de agregar el nombre
    input.value = "";

    // 🔹 Enfocar el campo para que el usuario pueda escribir otro nombre rápidamente
    input.focus();
}
