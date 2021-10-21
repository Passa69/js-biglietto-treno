// A seconda dei dati dell'utente il pc dovrà generare un prezzo per il biglietto

// Chiediamo i chilometri
const km = parseInt(prompt("Scrivi qui la distanza da percorrere: "));
console.log(km);

// Chiediamo l'età
const age = parseInt(prompt("Scrivi qui la tua età: "));
console.log(age);

// Calcolo del prezzo
const ticket = km * 0.21; 
// console.log(ticket);

// Calcolo sconti
let discount;
if (age >= 18 && age <= 65) {
    discount = (ticket / 100) * 20;
} else if (age < 18) {
    discount = (ticket / 100) * 40;
} else {
    discount = 0;
}

// Stampa del prezzo
const finalPrice = (ticket - discount).toFixed(2);

document.getElementById("mio_id").innerHTML = `Il tuo biglietto costa: ${finalPrice}€`