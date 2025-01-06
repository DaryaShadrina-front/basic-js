const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
}

encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.process(message, key, 'encrypt');
}

decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    return this.process(encryptedMessage, key, 'decrypt');
}

process(input, key, method) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    input = input.toUpperCase();
    key = key.toUpperCase();
    let output = '';
    let keyIndex = 0;

    for (let i = 0; i < input.length; i++) {
        const inputChar = input[i];
        if (alphabet.includes(inputChar)) {
            const inputIndex = alphabet.indexOf(inputChar);
            const keyChar = key[keyIndex % key.length];
            const keyIndexShift = alphabet.indexOf(keyChar);

            let outputIndex;
            if (method === 'encrypt') {
                outputIndex = (inputIndex + keyIndexShift) % alphabet.length;
            } else {
                outputIndex = (inputIndex - keyIndexShift + alphabet.length) % alphabet.length;
            }

            output += alphabet[outputIndex];
            keyIndex++;
        } else {
            output += inputChar;
        }
    }

    if (!this.direct) {
        output = output.split('').reverse().join('');
    }

    return output;
}
}

module.exports = {
  VigenereCipheringMachine
};
