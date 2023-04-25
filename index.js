import cipher from './cipher.js';

//Damos funcionalidad a los botones
const button1 = document.getElementById("botonCifrar");
button1.addEventListener("click", (event) => {
  const msg = document.getElementById("mensajeCifrado").value;
  const offset = document.getElementById("desplazamiento").value;
  const msgcoded = cipher.encode(Number(offset), msg);
  event.preventDefault();
  const resultado = document.querySelector("#mensajeCifrado2");
  resultado.textContent = msgcoded;
}
);

const button2 = document.getElementById("botonDescifrar");
button2.addEventListener("click", (event) => {
  const msgdcd = document.getElementById("mensajeDescifrado").value;
  const offset2 = document.getElementById("desplazamiento2").value;
  const msgdecoded = cipher.decode(Number(offset2), msgdcd);
  event.preventDefault();
  const resultado2 = document.querySelector("#mensajeDescifrado2");
  resultado2.textContent = msgdecoded;
}
);

