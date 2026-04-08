function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML += `<div class="user">${input}</div>`;

    let response = getBotResponse(input.toLowerCase());

    setTimeout(() => {
        chatbox.innerHTML += `<div class="bot">${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    document.getElementById("userInput").value = "";
}

function getBotResponse(input) {

    // 📘 PRÁCTICAS DE LA ENSEÑANZA
    if (input.includes("prácticas de la enseñanza")) {
        return "Las prácticas de la enseñanza son complejas y forman parte del campo pedagógico-didáctico. Se estudian para comprender y mejorar la formación docente.";
    }

    if (input.includes("formación docente")) {
        return "La formación docente implica la construcción de saberes a partir de la experiencia, la reflexión y el trabajo colaborativo entre docentes y estudiantes.";
    }

    if (input.includes("escritura")) {
        return "La escritura tiene un valor fundamental en la formación docente porque permite reflexionar, sistematizar experiencias y construir conocimiento sobre la práctica.";
    }

    if (input.includes("fases de la enseñanza")) {
        return "La enseñanza tiene tres fases: preactiva (planificación), interactiva (clase) y posactiva (reflexión sobre lo ocurrido).";
    }

    // 📘 HUME
    if (input.includes("hume")) {
        return "David Hume fue un filósofo de la Ilustración escocesa que estudió cómo funciona la mente humana y los límites del conocimiento.";
    }

    if (input.includes("conocimiento inductivo")) {
        return "El conocimiento inductivo va de lo particular a lo general y nunca es definitivo, sino probable y basado en la experiencia.";
    }

    if (input.includes("percepciones")) {
        return "Para Hume, las percepciones son los elementos básicos de la mente y se dividen en impresiones (más intensas) e ideas (menos intensas).";
    }

    if (input.includes("impresiones")) {
        return "Las impresiones son percepciones intensas como sensaciones, emociones o experiencias directas.";
    }

    // 📘 RESPUESTA GENERAL
    if (input.includes("resumen")) {
        return "Los documentos tratan sobre la formación docente, las prácticas de enseñanza y teorías del conocimiento como la de Hume.";
    }

    return "No tengo esa información específica, pero podés preguntarme sobre prácticas de enseñanza, formación docente o Hume.";
}
