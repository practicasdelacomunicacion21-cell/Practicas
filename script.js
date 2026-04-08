const chatBox = document.getElementById("chatBox");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botResponse(input) {
  input = input.toLowerCase();

  if (input.includes("evaluacion") || input.includes("aprueba")) {
    return "La materia se aprueba con promedio 7, asistencia y aprobación de todas las instancias (trabajos, prácticas y coloquio).";
  }

  if (input.includes("asistencia")) {
    return "Necesitás 80% de asistencia a clases y 100% en prácticas.";
  }

  if (input.includes("practica") || input.includes("escuela")) {
    return "En las prácticas vas a observar clases, planificar y dar clases reales en escuelas.";
  }

  if (input.includes("secuencia")) {
    return "Una secuencia didáctica es un conjunto organizado de actividades con objetivos, recursos y evaluación.";
  }

  if (input.includes("coloquio") || input.includes("final")) {
    return "En el coloquio final presentás tu secuencia didáctica y una reflexión sobre tu práctica.";
  }

  if (input.includes("contenido") || input.includes("unidades")) {
    return "La materia tiene 3 unidades: perfil docente, el aula y organización de la enseñanza.";
  }

  if (input.includes("octubre")) {
    return "En octubre realizás tus prácticas en escuelas asociadas.";
  }

  return "No entendí tu pregunta. Probá preguntar sobre evaluación, prácticas, asistencia o contenidos.";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (text === "") return;

  addMessage(text, "user");

  setTimeout(() => {
    const response = botResponse(text);
    addMessage(response, "bot");
  }, 500);

  input.value = "";
}

window.onload = () => {
  addMessage("Hola 👋 Soy el asistente de Práctica III. ¿En qué te ayudo?", "bot");
};