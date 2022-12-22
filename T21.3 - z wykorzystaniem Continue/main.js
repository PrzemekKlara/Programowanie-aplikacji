const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);
    wynik.innerHTML = ``;
    let j = 0;

    for (let i = 1; i < 16; i++) {

        if(i==a){ continue;

        } else{}
        wynik.innerHTML += i +' ';
    }
    wynik.innerHTML += `<br>`

});