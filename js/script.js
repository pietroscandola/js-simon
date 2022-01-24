/* 
Descrizione:
Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirà a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.

Bonus:
    - controllare che i numeri casuali siano diversi tra loro
    - controllare che l'utente non inserisca 2 volte lo stesso numero 
*/


// Funzioni
function arrayContainsNumber(array, number) {
    let esiste = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            esiste = true;
            break;
        }
    }
    return esiste;
}

// Genero dei numeri casuali e li mostro in un alert
const risultato = [];
for (let i = 0; i < 5; i++) {
    const number = Math.floor(Math.random() * 100) + 1;

    // controllare che i numeri casuali siano diversi tra loro
    if (!risultato.includes(number)) {
        risultato.push(number);
    }
}
console.log('numeri randomizzati: ', risultato);
alert(risultato);

// dall'ok  parte un timer di 30 secondi.

setTimeout(timerFunction, 3000);


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
function timerFunction() {
    const userNumbersArray = [];
    const inputs = [];
    for (let i = 0; i < 5; i++) {
        let userNumbersInput = parseInt(prompt('Inserisci i numeri precedentemente visualizzati'));
        while (inputs.includes(userNumbersInput)) {
            userNumbersInput = parseInt(prompt('Il numero è già stato inserito'));
        }
        if (arrayContainsNumber(risultato, userNumbersInput)) {
            userNumbersArray.push(userNumbersInput);
        }
        inputs.push(userNumbersInput);
    }
    console.log("numeri inseriti dall'utente: ", userNumbersArray);

    alert(`i numeri inseriti correttamente sono: ${userNumbersArray}`)
}