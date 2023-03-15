"use strict";
const passEl__1 = document.querySelector('.pass1');
const passEl__2 = document.querySelector('.pass2');
console.log(passEl__1,passEl__2);
passEl__2.addEventListener('input', (e)=>{
    if (passEl__2.textContent !== passEl__1.textContent) {
        passEl__2.classList.add('error');
        passEl__2.classList.add('error');
    } else {
        passEl__2.classList.add('good');
        passEl__2.classList.add('good');
    }
});

