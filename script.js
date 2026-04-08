let messagesDiv = document.getElementById("messages");

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

function addMessage(text, sender) {
    let div = document.createElement("div");
    div.className = sender;
    div.textContent = text;
    messagesDiv.appendChild(div);

    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function newChat() {
    messagesDiv.innerHTML = "";
}

// =========================
// 🤖 RESPUESTAS INTELIGENTES
// =========================

function generateResponse(input) {

    // 📘 PROGRAMA
    if (input.includes("programa")) {
        return "El programa se centra en la formación docente mediante prácticas de enseñanza y reflexión pedagógica.";
    }

    if (input.includes("objetivos")) {
        return "Busca desarrollar habilidades para analizar, planificar y reflexionar sobre la práctica docente.";
    }

    if (input.includes("evaluación")) {
        return "La evaluación incluye trabajos prácticos, participación y reflexión sobre la práctica.";
    }

    if (input.includes("prácticas")) {
        return "Las prácticas implican planificar, enseñar y analizar la propia enseñanza.";
    }

    if (input.includes("fases")) {
        return "Las fases son: preactiva, interactiva y posactiva.";
    }

    // 📘 DOCUMENTOS
    if (input.includes("hume")) {
        return "Hume sostiene que el conocimiento proviene de la experiencia.";
    }

    if (input.includes("percepciones")) {
        return "Se dividen en impresiones (fuertes) e ideas (débiles).";
    }

    if (input.includes("inductivo")) {
        return "El conocimiento inductivo es probable, no seguro.";
    }

    // 💬 DEFAULT
    return "Podés preguntarme sobre el programa, prácticas de enseñanza o Hume 😊";
}
