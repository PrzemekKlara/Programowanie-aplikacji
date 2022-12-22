const liczba_a = document.querySelector('#liczba_a');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value);

    for (j = 0; j < a; j++) {
        for (i = 0; i < a; i++) {
            if (i === j){
                wynik.innerHTML = `1`
        }
    else
        {
            wynik.innerHTML += `0`

        }
    }
        wynik.innerHTML += `<br>`

    }

});


