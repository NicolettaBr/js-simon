//Un alert() espone 5 numeri generati casualmente.
//Da li parte un timer di 30 secondi.
//Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

//generiamo 5 numeri random

var randomNumbers = [];
console.log(randomNumbers);
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
//creo variabile da cui parte il countdown
var secondi = 3;
//utilizzo setInterval
var countdown = setInterval(function(){

    if(secondi==0){
        //se secondi=0, countdown finisce
        //blocco setInterval 

        clearInterval(countdown);

        //chiedo all' utente 5 numeri e li pusho in numeriUtente usando ciclo for
        //creo array vuoto in cui vengono inseriti i 5 numeri dati dall'utente
        var numeriUtente =[];
        console.log(numeriUtente);

        for (var i = 0; i < 5; i++){
            var richiestaNumero = parseInt(prompt('dammi un numero'));
            //console.log(richiestaNumero);

            if(numeriUtente.includes(richiestaNumero) == false){
                numeriUtente.push(richiestaNumero);
            
            }
        }
        
        //creo array in cui pushare numeri dati dall' utente e presenti nell' array numeri random
        var indovinati = [];
        for(var i = 0; i<numeriUtente.length; i++){
            var thisNumber = numeriUtente[i];
            console.log(thisNumber);

            if(randomNumbers.includes(thisNumber)==true){
                indovinati.push(thisNumber);
            }
        }
        console.log(indovinati);
        //stampo numeri indovinati
        alert('Hai trovato ' + indovinati.length + ' numeri. E questi sono : ' + indovinati);
    
    }else{
        //altrimenti continuo a decrementare secondi
        secondi--;
    }
    
}, 30000);


