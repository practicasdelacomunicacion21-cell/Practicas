document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");
    const sendBtn = document.getElementById("send-btn");

    // Base de conocimientos extraída de los programas de Práctica III
    const knowledgeBase = [
        {
            keywords: ["tecnologia", "secundaria", "it"],
            response: "En el Profesorado de Tecnologías, la Unidad 1 se enfoca en la construcción de sentido y narrativas de práctica[cite: 3, 4, 5]. Verás temas como integración de TIC y aprendizaje basado en proyectos en la Unidad 2[cite: 20, 21]."
        },
        {
            keywords: ["primaria", "unpa"],
            response: "Para Educación Primaria (UNPA), el programa aborda la biografía escolar y la identidad docente en la Unidad 1[cite: 35, 39, 43]. También incluye prácticas de ensayo y microclases en la Unidad 2[cite: 50, 51]."
        },
        {
            keywords: ["letras", "uncuyo", "lengua"],
            response: "En el Profesorado de Letras, la Unidad 1 trata sobre evaluación formativa, autoevaluación y coevaluación[cite: 65, 70, 72, 73]. La Unidad 2 se centra en la investigación e inclusión educativa[cite: 75, 80]."
        },
        {
            keywords: ["evaluacion", "notas", "examen"],
            response: "La evaluación en Tecnologías incluye un parcial integrador en junio, evaluación de microclases y un coloquio final con defensa de prácticas[cite: 109, 110, 112]. En Letras se utilizan instrumentos de evaluación y rúbricas de acreditación[cite: 69, 71]."
        },
        {
            keywords: ["fechas", "cuando empieza", "termina"],
            response: "Para el profesorado de Tecnologías, el inicio de actividades es el 18 de marzo y la finalización el 29 de noviembre."
        }
    ];

    function appendMessage(text, sender) {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message", sender);
        msgDiv.innerText = text;
        chatBox.appendChild(msgDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userText) {
        const input = userText.toLowerCase();
        
        // Buscar coincidencia en la base de conocimientos
        for (let item of knowledgeBase) {
            if (item.keywords.some(key => input.includes(key))) {
                return item.response;
            }
        }
        
        return "Lo siento, no encontré información específica sobre eso en los programas. Prueba preguntando por una carrera (Tecnologías, Primaria o Letras) o sobre evaluación.";
    }

    function sendMessage() {
        const text = userInput.value.trim();
        if (text !== "") {
            appendMessage(text, "user");
            userInput.value = "";
            
            setTimeout(() => {
                const response = getBotResponse(text);
                appendMessage(response, "bot");
            }, 600);
        }
    }

    sendBtn.addEventListener("click", sendMessage);
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });
});
