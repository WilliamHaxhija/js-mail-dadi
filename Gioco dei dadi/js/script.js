const diceButton = document.querySelector('#dice-button');
diceButton.addEventListener('click', function () {
    let userNumber = Math.floor((Math.random(1) * 6) + 1);
    document.querySelector('.user-number').innerHTML = userNumber;
    let pcNumber = Math.floor((Math.random(1) * 6) + 1);
    document.querySelector('.pc-number').innerHTML = pcNumber;
    let winOrLoose = 'Pareggio!';
    if (userNumber > pcNumber) {
       winOrLoose = 'Hai Vinto!';
    } else if (pcNumber > userNumber) {
       winOrLoose = 'Hai Perso!';
    }
    document.querySelector('#game-result').innerHTML = winOrLoose;
});