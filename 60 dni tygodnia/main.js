const liczba = document.querySelector('#liczba');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let a = parseInt(liczba.value);
switch (a) {
    case 1:
        wynik.innerHTML = 'poniedziałek ';
        break;
    case  2:
        wynik.innerHTML = 'wtorek ';
        break;
    case  3:
        wynik.innerHTML = 'środa ';
        break
    case  4:
        wynik.innerHTML = 'czwartek ';
        break;
    case  5:
        wynik.innerHTML = 'piątek ';
        break;
    case  6:
        wynik.innerHTML = 'sobota ';
        break;
    case  7:
        wynik.innerHTML = 'niedziela ';
        break;

        default:
            wynik.innerHTML = 'error (nie jest to liczba z zakresu) ';
}})