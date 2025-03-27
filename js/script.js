// Far visualizzare 5 numeri casuali .FATTO.
    //  -genero i 5 numeri con for, MathFloor e Random
    //  -li visualizzo a pagina a pagina 
// Appena questi numeri vengono visualizzati, far partire un timer di 30 secondi
// Allo scadere dei 30 secondi, i 5 numeri scompaiono e appare imput dove inserire i numeri visualizzati precedentemente
// Una volta inseriti il software dice quanti e quali dei numeri da indovinare sono stati individuati

/////////// RECUPERO ELEMENTI DOM E INIZIALIZZAZIONE VARIABILI
//// dove verranno visuallizati i numeri
const numberslist = document.getElementById(`numbers-list`);
//// array dei numeri che compariranno
let num =[];
//// dove verrà visualizzato il countdown
const countdown = document.getElementById(`countdown`);
//// creo variabile che mi rappresenta i secondi
let seconds = 30;



/////////// CORPO PROGRAMMA
//// per generare i 5 numeri casuali
for(i=0;i<5;i++){
    generoNum = Math.floor(Math.random()*100);
    num.push(generoNum)
    console.log(num)
}
numberslist.innerHTML= num

//// per il coutdown
const interval = setInterval(function(){
    // decremento i secondi
    seconds--
    // cosa faccio in base ai secondi
    if(seconds != -1){
        // mostro i secondi in pagina
        countdown.innerText = seconds
    }
    else{
        clearInterval(interval);
    }
},1000)

//// visualizzo in html
countdown.innerText = seconds