// -Mail-
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// -Gioco dei dadi-
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const button = document.getElementById('btn');
console.log(button);

const email = document.getElementById('email');
console.log(email);

let listEmail = [
    'pippo@gmail.com',
    'minnie@gmail.com',
    'topolino@gmail.com',
    'pluto@gmail.com'
]

button.addEventListener('click', function(){
    const email = document.getElementById('email').value;
    console.log(email);
    let found = false;
    for(i = 0; i = listEmail - 1; i++){
        console.log(listEmail[i]);
        if(listEmail[i] === email){
            found = true;
        } else {
            console.log(found);
        }

        let text, cla;
        if (found){
            cla = 'alert-success';
            text = 'found';
        } else {
            cla = 'alert-danger';
            text = 'not-found';
        }
    }


})

