const userPD = prompt("Scegli pari o dispari");
const userNum = parseInt(prompt("Scegli un numero da 1 a 5"));

if (userPD !== "pari" && userPD !== "dispari") {
    console.log("Non è valido!");
} else if (userNum >= 1 && userNum <= 5) {
    const computerNum = rndNumber(1, 5);
    console.log(`user number: ${userNum}, computer number: ${computerNum}`);

    const somma = userNum + computerNum;
    console.log(somma);

    let result;
    if (pd(somma)) {
        result = "pari";
    } else {
        result = "dispari";
    }

    if (userPD === result) {
        console.log(`Hai vinto! Il risultato (${somma}) è ${result}.`);
    } else {
        console.log(`Hai perso! Il risultato (${somma}) è ${result}.`);
    }
} else {
    console.log("Non è valido!");
}

