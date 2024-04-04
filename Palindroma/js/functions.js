/**
 * @param {word} text
 * @returns {object} 
 */

function userPal(parola) {
    const parolaForm = parola.toLowerCase();

    const parolaInvertita = parola.split('').reverse().join('');
    
    return parolaForm === parolaInvertita;
}



