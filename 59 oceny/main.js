const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let a = parseInt(liczba.value);
    switch (true) {
        case (a >=90 && a <= 100):
            wynik.innerHTML = '5';
            break;
        case  (a < 90 && a >= 80):
            wynik.innerHTML = '4+ ';
            break;
        case  (a < 80 && a >= 70):
            wynik.innerHTML = '4 ';
            break
        case  (a < 70 && a >= 60):
            wynik.innerHTML = '3+ ';
            break;
        case  (a < 60 && a >= 50):
            wynik.innerHTML = '3 ';
            break;
        case  (a < 50 && a > 0):
            wynik.innerHTML = '2 ';
            break;

        default:
            wynik.innerHTML = 'error (podaj liczbę procentów od 0 - 100) ';
    }})