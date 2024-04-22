
const ingresso = [
    'giuseppe@bool.com',
    'riccardo@bool.com',
    'michele@bool.com',
    'giacomo@bool.com',
    'giovanni@bool.com'
]

const mailInput = document.getElementById('mail-input');

const btnControl = document.getElementById('btn-control')

console.log(ingresso)
console.log(mailInput.value)

btnControl.addEventListener('click', function () {
    console.log(mailInput.value)
    let n = 0
    for (i = 0; i < ingresso.length; i++) {
        console.log(ingresso[i])

        if (mailInput.value == ingresso[i]) {
            document.getElementById('risultato').innerText = 'Puoi entrare'
            console.log('si')
        } else {
            n = n + 1
            console.log('no')
        }
        console.log('n=', n)
        console.log('array', ingresso.length)

    }
    if (n == ingresso.length) {
        document.getElementById('risultato').innerText = 'Non puoi entrare'
        console.log('non puoi entrare')
    }
})
