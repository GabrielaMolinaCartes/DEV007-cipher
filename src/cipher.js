const cipher = {
  encode: function (offset, msg) {
    let msgcoded = "";
    if (typeof offset !== "number" || typeof msg !== "string") {
      throw new TypeError("Invalid arguments: offset must be a number and msg must be a string");
    } else
      for (let i = 0; i < msg.length; i++) {
        const character = msg[i];
        const character_ascii = character.charCodeAt(character);
        const coded_character = (((character_ascii + offset) - 65) % 26) + 65;
        if (character_ascii >= 65 && character_ascii <= 90) {
          msgcoded = msgcoded + String.fromCharCode(coded_character);
        }
        if (character_ascii === 32) {
          msgcoded = msgcoded + " ";
        }
      }
    return msgcoded;
  },


  decode: function (offset2, msgdcd) {
    let msgdecoded = "";
    if (typeof offset2 !== "number" || typeof msgdcd !== "string") {
      throw new TypeError("Invalid arguments: offset2 must be a number and msgdcd must be a string");
    } else
      for (let i = 0; i < msgdcd.length; i++) {
        const character2 = msgdcd[i];
        const character2_ascii = character2.charCodeAt(character2);
        const decoded_character2 = (((character2_ascii - offset2) + 65) % 26) + 65;
        if (character2_ascii >= 65 && character2_ascii <= 90) {
          msgdecoded = msgdecoded + String.fromCharCode(decoded_character2);
        }
        if (character2_ascii === 32) {
          msgdecoded = msgdecoded + " ";
        }
      }
    return msgdecoded;
  }

}

export default cipher;
