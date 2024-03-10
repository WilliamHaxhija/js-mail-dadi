const userMail = prompt('Il tuo indirizzo email');
const mailList = ['pippo@gmail.it', 'pluto@gmail.it', 'paperino@gmail.it', 'topolino@gmail.it', 'qui@gmail.it', 'quo@gmail.it', 'qua@gmail.it', 'topolina@gmail.it', 'max@gmail.it', 'ciao@gmail.it'];
let check = 'Esito Negativo';
for (i = 0; i < mailList.length; i++) {
    if (userMail === mailList[i]) {
        check = 'Esito Positivo';
    }
}
document.querySelector('#outcome').innerHTML = check;