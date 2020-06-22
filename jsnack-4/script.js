document.getElementById("produce").addEventListener("click", function (){
  var numeroCasuale = Math.floor(Math.random()*10) + 1;
  console.log(numeroCasuale);
  var paridispari = document.getElementById("numero")

  if (!(numeroCasuale%2)) {
    paridispari.clasList.remove("pari")

  } else{
    paridispari.classList.remove("dispari")
  }




  // if (numeroCasuale ){
  //
  // }
});


// function isEven(numeroCasuale) {
//    return numeroCasuale % 2 == 0;
// }
//
// function isOdd(numeroCasuale) {
//    return Math.abs(numeroCasuale % 2) == 1;
// }
