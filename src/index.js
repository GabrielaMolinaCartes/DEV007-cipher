import cipher from './cipher.js';

//Funcionalidad del boton Cifrar
const button1 = document.getElementById("botonCifrar");
button1.addEventListener("click", (event) => {
  //Nombro las variables a utilizar llamandolas desde html por su id y pidiendo que devuelva su valor 
  const msg = document.getElementById("mensajeCifrado").value;
  const offset = document.getElementById("desplazamiento").value;
  //agregué la variables recién descritas como parámetros de cipher.encode para generar la variable que va a utilizar la función de cifrar desde cipher.js
  const msgcoded = cipher.encode(Number(offset), msg);
  //Agregué un prevent Default para el parámetro evento
  event.preventDefault()
  //utilizo un querySelector para mi variable resultado y así recorra todas las letras ingresadas
  const resultado = document.querySelector("#mensajeCifrado2");
  //Le doy valor a mi resultado pidiendole que me entregue el contenido del texto resultando en el mensaje cifrado.
  resultado.textContent = msgcoded;
}
);

//Funcionalidad del boton Descifrar
const button2 = document.getElementById("botonDescifrar");
button2.addEventListener("click", (event) => {
  //Nombro las variables a utilizar llamandolas desde html por su id y pidiendo que devuelva su valor 
  const msgdcd = document.getElementById("mensajeDescifrado").value;
  const offset2 = document.getElementById("desplazamiento2").value;
  //agregué la variables recién descritas como parámetros de cipher.decode para generar la variable que va a utilizar la función de descifrar desde cipher.js
  const msgdecoded = cipher.decode(Number(offset2), msgdcd);
  //Agregué un prevent Default para el parámetro evento
  event.preventDefault()
  //utilizo un querySelector para mi variable resultado y así recorra todas las letras ingresadas
  const resultado2 = document.querySelector("#mensajeDescifrado2");
  //Le doy valor a mi resultado pidiendole que me entregue el contenido del texto resultando en el mensaje descifrado.
  resultado2.textContent = msgdecoded;
}
);

