// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

 //Array para almacenar los nombres de los amigos
 let amigos = [];

 //Función para agregar un amigo a la lista
 function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Si pasa todas las validaciones, agregar el nombre a la lista
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
   
 }


 // Función para actualizar la lista de amigos en la página
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(function(nombre) {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];
        resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    } else {
        resultado.innerHTML = "<li>No hay nombres en la lista.</li>";
    }
}

// Función para reiniciar la lista de amigos
function reiniciarLista() {
    amigos.length = 0; // Vaciar el array
    actualizarLista(); // Actualizar la lista visible
    document.getElementById("resultado").innerHTML = ""; // Limpiar el resultado del sorteo
}