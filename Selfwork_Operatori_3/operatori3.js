
let valore1 = +(prompt('Scegli un nomero'));
let valore2 = +(prompt("Scegli un'altro numero"));

let somma =  valore1 + valore2;
let sottrazione = valore1 - valore2;
let moltiplicazione = valore1 * valore2;
let divisione = valore1 / valore2;
let potenza1 = valore1 ** 2;
let potenza2 = valore2 ** 2;

console.log(`Hai selto i seguenti numeri: ${valore1} e ${valore2}. \n
    Con i numeri da te scelti, i risultati delle varie operazioni sono: \n
    Somma: ${somma}; \n
    Differenza: ${sottrazione}; \n
    Moltiplicazione: ${moltiplicazione};\n
    Divisione: ${divisione}; \n
    Potenza del primo valore: ${potenza1}; \n
    Potenza del secondo valore: ${potenza2}.`)