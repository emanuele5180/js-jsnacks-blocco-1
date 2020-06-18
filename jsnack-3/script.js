//Al click su un bottone, il programma acquisisce tramite prompt un numero.
document.getElementById('doit').addEventListener("click", function () {
  var numero = prompt ("inserisci un numero");
  var sfondo = document.getElementById("colore")
  console.log(numero);
  if (numero > 0) {
    sfondo.className = "verde";

  }else if (numero < 0){
    sfondo.className = "rosso";

  }else {
    sfondo.className = "blu";

  }

});
//Se il numero è positivo, il background di un p#colore diventa verde,
//se negativo rosso e se zero blu.
