const knowledgeBase = [
    {
        keywords: ["hola", "buen", "hey"],
        response: "¡Hola! ¿Cómo vas con la materia? Soy el asistente de Autogestión Aplicada. Si necesitas saber algo sobre los programas de Práctica III de Tecnologías, Primaria o Letras, decime y lo charlamos."
    },
    {
        keywords: ["tecnologia", "secundaria"],
        response: "Che, el programa de Tecnologías está muy bueno. Se enfoca mucho en narrativas de práctica [cite: 5] y en cómo la escuela secundaria es un espacio social y cultural clave[cite: 10]. También vas a tener que armar proyectos interdisciplinarios[cite: 15]. ¿Estás con esa parte ahora?"
    },
    {
        keywords: ["primaria", "unpa"],
        response: "Para Primaria en la UNPA, el foco está en la identidad docente y la biografía escolar[cite: 39, 43]. Es súper importante entender la 'gramática escolar'[cite: 47]. ¿Ya empezaste con las observaciones áulicas o las ayudantías? [cite: 48, 49]"
    },
    {
        keywords: ["letras", "uncuyo", "lengua"],
        response: "En Letras de la UNCuyo, arrancan fuerte con evaluación[cite: 66]. No es solo poner nota, ven autoevaluación y coevaluación[cite: 72, 73]. Además, le dan mucha bola a la inclusión y al Diseño Universal para el Aprendizaje[cite: 80, 81]. ¿Buscabas algo de eso?"
    },
    {
        keywords: ["evaluacion", "aprobar", "final", "coloquio"],
        response: "Para aprobar (al menos en Tecnologías), tenés que presentar una secuencia didáctica completa [cite: 111] y defender tus prácticas en un coloquio final[cite: 112]. Se fijan mucho en la coherencia entre lo que decís (teoría) y lo que hacés (práctica)[cite: 114]. ¡No te olvides de la reflexión crítica! [cite: 118]"
    },
    {
        keywords: ["fechas", "cuando"],
        response: "Mira, según el calendario de Tecnologías, arrancaron el 18 de marzo y terminan el 29 de noviembre[cite: 99, 100]. ¡Falta poco para el parcial integrador de junio! [cite: 109]"
    }
];

// Función para procesar la respuesta
function getBotResponse(userText) {
    const input = userText.toLowerCase();
    
    // Buscar el mejor match
    const match = knowledgeBase.find(item => 
        item.keywords.some(key => input.includes(key))
    );

    if (match) return match.response;

    return "Mmm, no encuentro eso justo ahora en los programas que tengo cargados. ¿Me podrías preguntar de otra forma? O si querés, hablamos de las unidades de Tecnologías, Primaria o Letras.";
}
