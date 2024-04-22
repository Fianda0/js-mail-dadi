
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

    for (i = 0; i < ingresso.length; i++) {
        console.log(ingresso[i])

        if (mailInput.value == ingresso[i]) {
            console.log('entra')
        }
    }

})
