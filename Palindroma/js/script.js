const arrayVuoto = [];

const userWord = prompt("Inserisci parola!");
const result = userPal(userWord);

if (result) {
    console.log(userWord + " è un palindromo.");
} else {
    console.log(userWord + " non è un palindromo.");
}

arrayVuoto.push (userWord);
console.log(arrayVuoto);