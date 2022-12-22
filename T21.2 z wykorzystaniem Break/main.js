const liczba_a = document.querySelector('#liczba_a');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba_a.value);

    wynik.innerHTML = ``;
let j = 0;

        for (let i = 1; i < 31; i++) {
            wynik.innerHTML += i +' ';
     if(i==a){
         break
     }
        }
    wynik.innerHTML += `<br>`
s
       });