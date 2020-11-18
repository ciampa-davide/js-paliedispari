// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
// Dichiariamo chi ha vinto.

var scelta= prompt("Scegli fra pari o dispari");
var numeroUtente= parseInt(prompt("scegli un numero da 1 a 5"));

if (numeroUtente >= 1  && numeroUtente <= 5){

  var x = numeroComputer(num);
  var y = sommaNumeri(somma);
  var z = pariODispari(check);
  if (scelta == check) {

    alert("hai vinto!")

  }else {
    alert("hai perso!");
  }

}else{
  alert("scelta non valida. Ricarica la pagina e' scegli un numero adatto");

}




function numeroComputer(num){

  var num= Math.floor ( Math.random ()* 5 + 1);
  return num;

}

function sommaNumeri(somma){

  var  somma= numeroUtente + num;
  return somma;

}


function pariODispari(check){

  var check = somma;

  if (check % 2  == 0) {

    check = "pari";

  }else{

    check = "dispari";
  }
  return check;
}
