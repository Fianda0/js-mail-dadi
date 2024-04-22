let playerInput = document.getElementById('numb-player').innerText;
console.log(playerInput)

let computerInput = document.getElementById('numb-computer').innerText;
console.log(computerInput)

const btnPlay = document.getElementById('click-play');

btnPlay.addEventListener('click', function () {
    playerInput = Math.floor(Math.random() * 6 + 1)
    document.getElementById('numb-player').innerText = playerInput;
    console.log('P', playerInput)

    computerInput = Math.floor(Math.random() * 6 + 1)
    document.getElementById('numb-computer').innerText = computerInput;
    console.log('C', computerInput)

    if (playerInput > computerInput) {
        document.getElementById('risultato').innerText = 'Il vincitore e` il player'
    } else if (playerInput < computerInput) {
        document.getElementById('risultato').innerText = 'Il vincitore e` il computer'

    } else {
        document.getElementById('risultato').innerText = 'Pareggio'
    }
})
