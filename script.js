document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Estado de la conversación para dar respuestas más precisas
    let contextoCarrera = null;

    const respuestas = {
        tecnologia: {
            saludo: "¡Genial que estés con Tecnologías! Es un programa muy enfocado en la innovación y la práctica situada[cite: 3, 17].",
            unidades: "En la Unidad 1 vemos narrativas y relatos de práctica [cite: 4, 5], mientras que en la 2 nos metemos de lleno con microclases e integración de TIC[cite: 14, 19, 20].",
            evaluacion: "Ojo con esto: la evaluación es continua. Incluye un parcial en junio, el diseño de secuencias didácticas con TIC y un coloquio final de defensa[cite: 109, 111, 112].",
            fechas: "El cronograma es claro: arrancamos el 18 de marzo y cerramos el año el 29 de noviembre[cite: 99, 100]."
        },
        primaria: {
            saludo: "¡Ah, Primaria en la UNPA! Un recorrido muy humano sobre la identidad docente[cite: 35, 43].",
            unidades: "Se trabaja mucho la biografía escolar en la Unidad 1 [cite: 36, 39] y dispositivos de formación como la observación áulica y las ayudantías en la Unidad 2[cite: 44, 48, 49].",
            evaluacion: "Se valora mucho la presencia pedagógica y el análisis de tus propias crónicas pedagógicas[cite: 60, 63, 64]."
        },
        letras: {
            saludo: "Letras en la UNCuyo tiene un enfoque muy interesante en la investigación y la inclusión[cite: 65, 75].",
            unidades: "La Unidad 1 es clave por el tema de evaluación formativa[cite: 66, 70]. En la Unidad 2 se ve mucho sobre el Diseño Universal para el Aprendizaje (DUA)[cite: 75, 81].",
            evaluacion: "Acá se evalúa la elaboración de materiales propios y la capacidad de enseñar en aulas heterogéneas[cite: 85, 89]."
        }
    };

    function procesarMensaje(mensaje) {
        const msg = mensaje.toLowerCase();
        
        // Detección de carrera para fijar el contexto
        if (msg.includes("tecnología") || msg.includes("secundaria")) contextoCarrera = "tecnologia";
        else if (msg.includes("primaria") || msg.includes("unpa")) contextoCarrera = "primaria";
        else if (msg.includes("letras") || msg.includes("lengua")) contextoCarrera = "letras";

        // Lógica de respuesta basada en contexto + intención
        if (msg.includes("hola") || msg.includes("buen")) {
            return "¡Hola! Qué bueno encontrarte por acá. ¿En qué programa de Práctica III te puedo dar una mano hoy?";
        }

        if (contextoCarrera) {
            const programa = respuestas[contextoCarrera];
            if (msg.includes("evalua") || msg.includes("aprobar") || msg.includes("nota")) return programa.evaluacion;
            if (msg.includes("unidad") || msg.includes("temas") || msg.includes("visto")) return programa.unidades;
            if (msg.includes("fecha") || msg.includes("cuando")) return programa.fechas || "No tengo las fechas exactas para esta carrera, pero suele seguir el calendario académico general.";
            return programa.saludo + " ¿Querías consultarme algo específico sobre las unidades o la evaluación?";
        }

        return "Todavía no estoy seguro de qué carrera me hablás. ¿Es para el Profesorado de Tecnología, Primaria o Letras? ";
    }

    function añadirMensaje(texto, autor) {
        const div = document.createElement("div");
        div.className = `message ${autor}`;
        div.innerText = texto;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function enviar() {
        const texto = userInput.value.trim();
        if (!texto) return;

        añadirMensaje(texto, "user");
        userInput.value = "";

        // Simula escritura
        setTimeout(() => {
            const respuesta = procesarMensaje(texto);
            añadirMensaje(respuesta, "bot");
        }, 700);
    }

    sendBtn.addEventListener("click", enviar);
    userInput.addEventListener("keypress", (e) => { if (e.key === "Enter") enviar(); });
});
