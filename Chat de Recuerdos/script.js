const mensajes = [
  { texto: "Claro, me encantaría", tipo: "sent" },
  { texto: "¿Recuerdas nuestro primer beso? 💋", tipo: "received" },
  { texto: "chiii Fue cuando te acompañe a reclamar unas pastas y ahi tome la gran valentia de pedirtelo sabes por que?, porque soy fuelteeee.", tipo: "sent" },
  {
    texto:
      "Qué lindo Fue ese dia , un beso que selló nuestra conexión. Nunca lo olvidaré 💖",
    tipo: "received",
  },
  {
    texto: "¿Qué te parece si seguimos recordando otros momentos especiales?",
    tipo: "received",
  },
  { texto: "Sí,  ¿Qué más recuerdas?", tipo: "sent" },
  {
    texto:"haz memoria tu",
    tipo: "received",
    
  },
  {
    texto:"Recuerdo cuando te lleve al cine nuestra primera salida con un poquito de complicaciones con tu mama y el horario pero fue un dia en el que me senti muy bien a tu lado . ",
      
    tipo: "sent",
  },
  {
    texto:
      "¿Recuerdas cuándo te dije 'te amo' por primera vez?",
    tipo: "received",
  },
  {
    texto:
      "Fue algo inexplicable que a dia de hoy espero siga siendo igual de fuerte ",
    tipo: "sent",
  },
  {
    texto:
      "¡Qué lindo Esos momentos son los que siempre llevo en mi corazón. 💖",
    tipo: "received",
  },
  {
    texto: "A mí también, amor. Cada día contigo es especial. 💕",
    tipo: "sent",
  },
  { texto: "¡Recuerdos completados! 😊", tipo: "received" },
];

let indiceMensaje = 0;

const chatBox = document.getElementById("chat-box");
const nextButton = document.getElementById("next-button");

nextButton.addEventListener("click", () => {
  if (indiceMensaje < mensajes.length) {
    const mensaje = mensajes[indiceMensaje];
    agregarMensaje(mensaje.texto, mensaje.tipo, mensaje.imagen);
    indiceMensaje++;
  } else {
    nextButton.disabled = true;
  }
});

function agregarMensaje(texto, tipo, imagen = null) {
  let mensaje = document.createElement("div");
  mensaje.classList.add("message", tipo);
  mensaje.textContent = texto;

  if (imagen) {
    let img = document.createElement("img");
    img.src = imagen;
    img.alt = "Recuerdo especial";
    img.style.maxWidth = "100%";
    mensaje.appendChild(img);
  }

  chatBox.appendChild(mensaje);
  chatBox.scrollTop = chatBox.scrollHeight;
}
