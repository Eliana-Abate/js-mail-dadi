/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


//! Esercizio MAIL: 

var email = ['alfa@gmail.com', 'beta@gmail.com', 'gamma@gmail.com', 'delta@gmail.com', 'sigma@gmail.com', 'omega@gmail.com'];
console.table(email);

var userEmail = prompt('Effettua l\'accesso con l\'email registrata')
console.log('Utente loggato: ', userEmail);

var emailSigned = false;

for (var i = 0; i < email.length; i++) {
    if (userEmail == email[i]) {
        emailSigned = true;  
    }
}

if (emailSigned) {
    alert('Accesso effettuato');
    var message = document.getElementById('welcome');
    message.innerHTML = 'Benvenuto ' + userEmail;
} else {
    alert('Email non valida o non registrata');
}








