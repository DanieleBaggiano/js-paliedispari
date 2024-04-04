/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */

function rndNumber(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min;
}

/**
 * 
 * @param {number} somma 
 * @returns {boolean}
 */
function pd (somma) { 
    return somma % 2 === 0;
}