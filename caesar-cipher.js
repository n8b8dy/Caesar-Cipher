// Caesar cipher encryptor/decryptor
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function caesarCipher(shift, text, alphabet = ALPHABET) {	
	shift = Math.abs(shift) - alphabet.length > 0 ? shift % alphabet.length : shift;
	
	return text.split('').map(letter => {
		if (!alphabet.includes(letter.toLowerCase())) {return letter}
		
		let index = alphabet.indexOf(letter.toLowerCase()); 
		
		if ((index + shift) >= alphabet.length) {
			return alphabet[(index + shift) - alphabet.length];
		} else if ((index + shift) < 0) {
		 return alphabet[(index + shift) + alphabet.length];
		}
		
		return alphabet[index + shift];
	}).join('').toUpperCase();
}
