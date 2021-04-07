//Un alert() espone 5 numeri generati casualmente.
//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//generiamo 5 numeri random

var randomNumbers = [];
//ciclo while per inserire 5 numeri diversi e pusharli in randomNumbers
while (randomNumbers.length < 5){
    var numeroRandom = Math.floor(Math.random() * 100) + 1; 

    if(randomNumbers.includes(numeroRandom) == false){
        randomNumbers.push(numeroRandom);
    }
}
//console.log(randomNumbers);

//stampiamo i 5 numeri nell' alert
alert(randomNumbers);

//parte immediatamente un countdown di 30 secondi 

//terminati i 30 secondi vengono chiesti 5 numeri all' utente

//programma stampa quanti e quali numeri ha individuato l'utente

