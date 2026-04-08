let messagesDiv;

window.onload = function() {
    messagesDiv = document.getElementById("messages");
};

// Enviar con botón
function sendMessage() {
    let input = document.getElementById("userInput");

    if (input.value.trim() === "") return;

    addMessage(input.value, "user");

    let response = generateResponse(input.value.toLowerCase());

    setTimeout(() => {
        addMessage(response, "bot");
    }, 500);

    input.value = "";
}

// Enviar con ENTER
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("userInput").addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});

// Agregar mensaje
function addMessage(text, sender) {
    let div = document.createElement("div");
    div.className = sender;
    div.textContent = text;
    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Nuevo chat
function newChat() {
    messagesDiv.innerHTML = "";
}

// =========================
// RESPUESTAS DEL CHATBOT
// =========================

function generateResponse(input) {

    // PROGRAMA
    if (input.includes("programa")) {
        return "El programa se centra en la formación docente mediante prácticas de enseñanza y reflexión pedagógica.";
    }

    if (input.includes("objetivos")) {
        return "Busca desarrollar habilidades para analizar, planificar y reflexionar sobre la práctica docente.";
    }

    if (input.includes("evaluación")) {
        return "La evaluación incluye trabajos prácticos, participación y reflexión.";
    }

    if (input.includes("prácticas")) {
        return "Las prácticas implican planificar, enseñar y analizar la enseñanza.";
    }

    if (input.includes("fases")) {
        return "Las fases son: preactiva, interactiva y posactiva.";
    }

    if (input.includes("escritura")) {
        return "La escritura permite reflexionar y construir conocimiento sobre la práctica docente.";
    }

    // DOCUMENTOS
    if (input.includes("hume")) {
        return "Hume sostiene que el conocimiento proviene de la experiencia.";
    }

    if (input.includes("percepciones")) {
        return "Las percepciones se dividen en impresiones e ideas.";
    }

    if (input.includes("inductivo")) {
        return "El conocimiento inductivo es probable, no seguro.";
    }

    // DEFAULT
    return "Podés preguntarme sobre el programa, prácticas de enseñanza o Hume 😊";
}
