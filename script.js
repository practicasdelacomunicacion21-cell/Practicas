document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Estado para recordar la carrera del alumno
    let carreraActual = null;

    const baseDeDatos = {
        tecnologia: {
            nombre: "Tecnologías",
            data: "En el Profesorado de Tecnologías nos enfocamos en narrativas de práctica (Unidad 1) y secuencias didácticas con TIC (Unidad 2)[cite: 4, 14, 20]. El año va del 18 de marzo al 29 de noviembre.",
            evaluacion: "Se evalúa con un parcial en junio, microclases y un coloquio final de defensa[cite: 109, 110, 112]. Se busca coherencia teoría-práctica[cite: 114]."
        },
        primaria: {
            nombre: "Educación Primaria (UNPA)",
            data: "Para Primaria, el eje es la biografía escolar y la identidad docente[cite: 36, 39, 43]. En la Unidad 2 vemos observación áulica y ayudantías[cite: 44, 48, 49].",
            evaluacion: "Se analiza mucho la crónica pedagógica y la presencia en el aula[cite: 60, 63]."
        },
        letras: {
            nombre: "Letras (UNCuyo)",
            data: "En Letras empezamos con Evaluación Educativa (Unidad 1) y luego vemos Diseño Universal para el Aprendizaje (DUA) en la Unidad 2[cite: 66, 81].",
            evaluacion: "Vemos autoevaluación, coevaluación y heteroevaluación[cite: 72, 73, 74]."
        }
    };

    function botDice(texto) {
        const div = document.createElement("div");
        div.className = "message bot";
        div.innerText = texto;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function responder(mensaje) {
        const msg = mensaje.toLowerCase();
        
        // Identificar carrera
        if (msg.includes("tecnologia")) carreraActual = "tecnologia";
        else if (msg.includes("primaria")) carreraActual = "primaria";
        else if (msg.includes("letras")) carreraActual = "letras";

        if (msg.includes("hola")) {
            return "¡Hola! ¿Cómo venís con las lecturas? Decime de qué profesorado sos (Tecnologías, Primaria o Letras) y te ayudo con el programa.";
        }

        if (carreraActual) {
            const info = baseDeDatos[carreraActual];
            if (msg.includes("evalua") || msg.includes("aprobar")) return info.evaluacion;
            if (msg.includes("unidad") || msg.includes("que vemos")) return info.data;
            return `¡Dale! Ya sé que sos de ${info.nombre}. ¿Querés saber qué temas entran en las unidades o cómo es el examen final?`;
        }

        return "Che, no estoy seguro de qué carrera sos. ¿Me recordás si es Tecnologías, Primaria o Letras?";
    }

    sendBtn.onclick = () => {
        const texto = userInput.value.trim();
        if (texto) {
            const userDiv = document.createElement("div");
            userDiv.className = "message user";
            userDiv.innerText = texto;
            chatBox.appendChild(userDiv);
            userInput.value = "";
            
            setTimeout(() => botDice(responder(texto)), 600);
        }
    };
});
