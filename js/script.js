// Far visualizzare 5 numeri casuali .FATTO.
    //  -genero i 5 numeri con for, MathFloor e Random
    //  -li visualizzo a pagina a pagina 
// Appena questi numeri vengono visualizzati, far partire un timer di 30 secondi .FATTO.
    // creo funzione che indica cosa faccio in base ai secondi
// Allo scadere dei 30 secondi, i 5 numeri scompaiono e appare imput dove inserire i numeri visualizzati precedentemente . FATTO.
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
// recupero il form contenente gli imput
const answersform = document.getElementById(`answers-form`)
// recupero gli imput per inserire i numeri
const formcontrol = document.querySelectorAll(`.form-control`)
// recupero il pulsante conferma
const button = document.querySelector(`.btn`)


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
        // faccio scomparire i numeri alla fine del countdown
        numberslist.className = numberslist.classList+" d-none"     
        // faccio scomparire il countdown alla fine dei 30 secondi
        countdown.className = countdown.classList+" d-none"
        // faccio comparire il form per inserire i visualizzati
        answersform.className ="d-inline"
    }
},1000)

//// visualizzo in html
countdown.innerText = seconds

