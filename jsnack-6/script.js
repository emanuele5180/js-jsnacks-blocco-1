document.getElementById("start").addEventListener("click", function (){
  var numeroCasuale = Math.floor( Math.random() *10);

  console.log(numeroCasuale);

  if (!(numeroCasuale%2)) {
    document.getElementById("testa").display=block;
  } else {
    document.getElementById("croce").display=block;
  }
});
