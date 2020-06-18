//Al click su un bottone, il programma acquisisce tramite prompt un numero.
document.getElementById('doit').addEventListener('click', function () {
  var numero = prompt ("inserisci un numero");
  console.log(numero);
})
//Se il numero è positivo, il background di un p#colore diventa verde,
//se negativo rosso e se zero blu.
