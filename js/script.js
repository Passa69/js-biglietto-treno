// A seconda dei dati dell'utente il pc dovrà generare un prezzo per il biglietto

// Chiediamo i chilometri
let km = parseInt(prompt("Scrivi qui la distanza da percorrere: "));
console.log(km);

// Chiediamo l'età
let age = parseInt(prompt("Scrivi qui la tua età: "));
console.log(age);

// Calcolo del prezzo
let ticket = km * 0.21; 
console.log(ticket);

let minor = (ticket / 100) * 20;
console.log(minor);

let over = (ticket / 100) * 40;
console.log(over);

// Aggiunta degli sconti
if (age >= 18 && age <= 65) {
    document.getElementById("mio_id").innerHTML = `Il tuo biglietto costa: ${ticket}€`
} else if (age < 18) {
    document.getElementById("mio_id").innerHTML = `Il tuo biglietto costa: ${minor}€`
} else {
    document.getElementById("mio_id").innerHTML = `Il tuo biglietto costa: ${over}€`
}
