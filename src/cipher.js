//Variable cipher que es llamada desde index.js
const cipher = {
  //Defino la funcion de cifrar, agregando los parámetros desplazamiento y mensaje ingresado
  encode: function (offset, msg) {
    //Al inicio el mensaje se encuentra vacío
    let msgcoded = "";
    //Agrego una condicional para corregir errores de test
    if (typeof offset !== "number" || typeof msg !== "string") {
      throw new TypeError("Invalid arguments: offset must be a number and msg must be a string");
    } else
    //Agrego un else para el bucle for que recorre cada una de las letras del mensaje ingresado por la usuaria
      for (let i = 0; i < msg.length; i++) {
        //Defino las variables a utilizar con método ASCII 
        const character = msg[i];
        const character_ascii = character.charCodeAt(character);
        //Agrego la fórmula del código ASCII para cifrar
        const coded_character = (((character_ascii + offset) - 65) % 26) + 65;
        //Agrego una condicional para que sólo considere las letras mayúsculas del abecedario definidas en el código ASCII 
        if (character_ascii >= 65 && character_ascii <= 90) {
          msgcoded = msgcoded + String.fromCharCode(coded_character);
        }
        //Agrego otra condicional para que considere los espacios entre palabras.
        if (character_ascii === 32) {
          msgcoded = msgcoded + " ";
        }
      }
    //Retorna el mensaje cifrado
    return msgcoded;
  },
  
  //Defino la funcion de descifrar, agregando los parámetros desplazamiento y mensaje ingresado
  decode: function (offset2, msgdcd) {
    //Al inicio el mensaje se encuentra vacío
    let msgdecoded = "";
    //Agrego una condicional para corregir errores de test
    if (typeof offset2 !== "number" || typeof msgdcd !== "string") {
      throw new TypeError("Invalid arguments: offset2 must be a number and msgdcd must be a string");
    } else
    //Agrego un else para el bucle for que recorre cada una de las letras del mensaje ingresado por la usuaria
      for (let i = 0; i < msgdcd.length; i++) {
        //Defino las variables a utilizar con método ASCII 
        const character2 = msgdcd[i];
        const character2_ascii = character2.charCodeAt(character2);
        //Agrego la fórmula del código ASCII para descifrar
        const decoded_character2 = (((character2_ascii - offset2) + 65) % 26) + 65;
        //Agrego una condicional para que sólo considere las letras mayúsculas del abecedario definidas en el código ASCII 
        if (character2_ascii >= 65 && character2_ascii <= 90) {
          msgdecoded = msgdecoded + String.fromCharCode(decoded_character2);
        }
        //Agrego otra condicional para que considere los espacios entre palabras.
        if (character2_ascii === 32) {
          msgdecoded = msgdecoded + " ";
        }
      }
    //Retorna el mensaje descifrado
    return msgdecoded;
  }

}

export default cipher;
