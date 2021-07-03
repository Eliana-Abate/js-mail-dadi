/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e stampare il risultato.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//! Esercizio DADI: 

//Variabili
var numbers = ['1', '2', '3', '4', '5', '6'];
console.log(numbers.length);

var playerNumber = Math.floor(Math.random() * numbers.length) + 1;
console.log('scelta player: ', playerNumber);

var cpuNumber = Math.floor(Math.random() * numbers.length) + 1;
console.log('scelta cpu: ', cpuNumber);


//Display message
var dadoPlayer = document.getElementById('player');
dadoPlayer.innerHTML = playerNumber

var dadoCpu = document.getElementById('computer');
dadoCpu.innerHTML = cpuNumber;

var message = document.getElementById('message');


//Conditions
if (playerNumber > cpuNumber) {
    message.innerHTML = 'Hai vinto!';

} else if (playerNumber < cpuNumber) {
    message.innerHTML = 'Hai perso!';
    
} else {
    message.innerHTML = 'Pareggio!';
}