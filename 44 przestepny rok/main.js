const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');


btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);
    if(a % 4 == 0 &&( a % 100 !== 0 || a % 1000 == 0) ){
        wynik.innerHTML = 'Rok '+ a + ' jest przestępny';
    }
    else {
        wynik.innerHTML = 'Rok ' + a + ' jest nieprzestępny';

    }


})
