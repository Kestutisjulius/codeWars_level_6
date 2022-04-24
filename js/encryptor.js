function encryptor (ki, message) {
    const alphabet_ = [...'abcdefghijklmnopqrstuvwxyz'];
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const ab = [...alphabet_, ...alphabet];
    const likutis = (ki % 26);
    let encrypt = '';
    let position = '';
    for(let i = 0; i < message.length ; i++) {
        if(alphabet_.includes(message[i])) {
            for(let j = 0; j < alphabet_.length; j++) {
                if((alphabet_.indexOf(message[i]) + likutis) >= 0 && (alphabet_.indexOf(message[i]) + likutis) < 26 ) {
                    position = alphabet_.indexOf(message[i]);
                } 
                if((alphabet_.indexOf(message[i]) + likutis) >= 26) {
                    position = alphabet_.indexOf(message[i]) - 26 ;
                }
                if((alphabet_.indexOf(message[i]) + likutis) < 0) {
                    position = alphabet_.indexOf(message[i]) + 26 ;
                }
        }
            encrypt += alphabet_[position+likutis];  
        }
        if(alphabet.includes(message[i])) {
            for(let j = 0; j < alphabet.length; j++) {
                if((alphabet.indexOf(message[i]) + likutis) >= 0 && (alphabet.indexOf(message[i]) + likutis) < 26 ) {
                    position = alphabet.indexOf(message[i]);
                } 
                if((alphabet.indexOf(message[i]) + likutis) >= 26) {
                    position = alphabet.indexOf(message[i]) - 26 ;
                }
                if((alphabet.indexOf(message[i]) + likutis) < 0) {
                    position = alphabet.indexOf(message[i]) + 26 ;
                }
        }
            encrypt += alphabet[position+likutis];  
        }
        if(!ab.includes(message[i])) {
            encrypt += message[i];
        }
    }
	return encrypt;
}


console.log(encryptor(27, 'Whoopi Goldberg'));
