const liczba_a = document.querySelector('#liczba_a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');


btn.addEventListener('click', function() {
    let a = parseInt(liczba_a.value);
    if(a>9 && a<100){
        wynik.innerHTML = 'Liczba dwucyfrowa  ';
        if(a % 2 == 0){
            wynik.innerHTML += ' parzysta';
        } else {
            wynik.innerHTML += ' nieparzysta';
        }
    } else {
        wynik.innerHTML = 'Liczba niedwucyfrowa ';
    }




})
