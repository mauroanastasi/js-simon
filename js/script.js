// Far visualizzare 5 numeri casuali .FATTO.
    //  -genero i 5 numeri con for, MathFloor e Random
    //  -li visualizzo a pagina a pagina 
// Appena questi numeri vengono visualizzati, far partire un timer di 30 secondi
// Allo scadere dei 30 secondi, i 5 numeri scompaiono e appare imput dove inserire i numeri visualizzati precedentemente
// Una volta inseriti il software dice quanti e quali dei numeri da indovinare sono stati individuati

// RECUPERO ELEMENTI DOM E INIZIALIZZAZIONE VARIABILI
//// dove verranno visuallizati i numeri
const numberslist = document.getElementById(`numbers-list`)
//// dove verrà visualizzato il countdown
const countdown = document.getElementById(`countdown`)
//// array dei numeri che compariranno
let num =[];

// per generare i 5 numeri casuali
for(i=0;i<5;i++){
    generoNum = Math.floor(Math.random()*100);
    num.push(generoNum)
    console.log(num)
}
numberslist.innerHTML= num




setTimeout(function(){

},30000)