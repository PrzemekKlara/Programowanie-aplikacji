const liczba_x = document.querySelector('#liczba_x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let a = parseInt(Math.floor(wartosc_x.value));
    wynik.innerHTML = `x = ${a} <br>`;
    for(let i=0; i<=11; i++){
        wynik.innerHTML += `${i} * ${a} = ${i*a} <br>`;
    }
})
