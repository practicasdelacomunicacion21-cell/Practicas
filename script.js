function sendMessage() {
    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (input.trim() === "") return;

    chatbox.innerHTML += `<div class="user">${input}</div>`;

    let response = getBotResponse(input.toLowerCase());

    setTimeout(() => {
        chatbox.innerHTML += `<div class="bot">${response}</div>`;
        chatbox.scrollTop = chatbox.scrollHeight;
    }, 500);

    document.getElementById("userInput").value = "";
}

function getBotResponse(input) {

    // =========================
    // 📘 PROGRAMA DE LA MATERIA
    // =========================

    if (input.includes("programa")) {
        return "El programa aborda la formación docente a través de las prácticas de la enseñanza, enfocándose en la reflexión, la escritura y el análisis de la práctica.";
    }

    if (input.includes("objetivos")) {
        return "El objetivo es que los estudiantes comprendan, analicen y mejoren sus prácticas de enseñanza mediante la reflexión y la construcción de saber pedagógico.";
    }

    if (input.includes("contenidos")) {
        return "Los contenidos incluyen: prácticas de enseñanza, formación docente, escritura pedagógica, análisis de la práctica y construcción de conocimiento didáctico.";
    }

    if (input.includes("evaluación")) {
        return "La evaluación se basa en la participación, producciones escritas, prácticas realizadas y reflexiones sobre la enseñanza.";
    }

    if (input.includes("prácticas")) {
        return "Las prácticas de la enseñanza son experiencias donde el estudiante planifica, enseña y reflexiona sobre su propia práctica docente.";
    }

    if (input.includes("fases")) {
        return "Las fases de la enseñanza son: preactiva (planificación), interactiva (desarrollo de la clase) y posactiva (reflexión posterior).";
    }

    if (input.includes("escritura")) {
        return "La escritura permite reflexionar, analizar y construir conocimiento sobre la práctica docente. Tiene un valor fundamental en la formación.";
    }

    if (input.includes("formación docente")) {
        return "La formación docente implica aprender a enseñar a través de la práctica, la reflexión y el trabajo colaborativo.";
    }

    // =========================
    // 📘 DOCUMENTO HUME
    // =========================

    if (input.includes("hume")) {
        return "David Hume fue un filósofo que estudió cómo conocemos el mundo y sostuvo que el conocimiento proviene de la experiencia.";
    }

    if (input.includes("conocimiento inductivo")) {
        return "El conocimiento inductivo va de lo particular a lo general y es probable, no absoluto.";
    }

    if (input.includes("percepciones")) {
        return "Hume dice que la mente está formada por percepciones: impresiones (más intensas) e ideas (menos intensas).";
    }

    if (input.includes("impresiones")) {
        return "Las impresiones son experiencias directas como sensaciones, emociones o percepciones vivas.";
    }

    // =========================
    // 📘 RESPUESTAS GENERALES
    // =========================

    if (input.includes("resumen")) {
        return "Los materiales tratan sobre prácticas de enseñanza, formación docente y teorías del conocimiento como la de Hume.";
    }

    if (input.includes("ayuda")) {
        return "Podés preguntarme sobre el programa, prácticas, evaluación, formación docente o Hume.";
    }

    return "No encontré esa información. Probá preguntar sobre el programa, prácticas de enseñanza o Hume.";
}
