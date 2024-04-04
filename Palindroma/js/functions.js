/**
 * @param {word} text
 * @returns {object} 
 */

function userPal(parola) {
    const parolaForm = parola.replace().toLowerCase();

    const parolaInvertita = parola.split('').reverse().join('');
    
    return parolaForm === parolaInvertita;
}



