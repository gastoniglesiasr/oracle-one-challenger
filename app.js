// Lista de amigos ingresados
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Captura el input del nombre
    const nombre = input.value.trim(); // Elimina espacios innecesarios

    // Validación: evitar nombres vacíos
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Validación: evitar nombres repetidos
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);
    actualizarListaAmigos(); // Refresca la lista en la interfaz
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos"); // Captura la lista en el HTML
    lista.innerHTML = ""; // Vacía la lista antes de actualizar
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.textContent = amigo;

        // Botón para eliminar amigo
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("btn-delete");
        btnEliminar.onclick = () => eliminarAmigo(index);
        
        li.appendChild(btnEliminar);
        lista.appendChild(li); // Agrega el elemento a la lista en la interfaz
    });
}

// Función para eliminar un amigo de la lista
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el nombre en la posición index
    actualizarListaAmigos(); // Refresca la lista en la interfaz
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Deben haber al menos 2 participantes para realizar el sorteo.");
        return;
    }
    
    // Se genera una copia de la lista y se desordena aleatoriamente
    let amigosDesordenados = [...amigos].sort(() => Math.random() - 0.5);
    let resultado = [];
    
    // Se asigna a cada persona un amigo secreto de forma cíclica
    for (let i = 0; i < amigos.length; i++) {
        let amigoActual = amigosDesordenados[i];
        let amigoSecreto = amigosDesordenados[(i + 1) % amigos.length]; // Asigna al siguiente en la lista
        resultado.push(`${amigoActual} → ${amigoSecreto}`);
    }
    
    mostrarResultado(resultado); // Muestra los resultados en pantalla
}

// Función para mostrar el resultado del sorteo en la interfaz
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado"); // Captura el área de resultados
    listaResultado.innerHTML = ""; // Vacía la lista antes de actualizar
    
    resultado.forEach((pair) => {
        const li = document.createElement("li"); // Crea un nuevo elemento de lista
        li.textContent = pair;
        listaResultado.appendChild(li); // Agrega cada resultado a la interfaz
    });
}