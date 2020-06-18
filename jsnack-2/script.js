//L’utente inserisce nome e cognome nei relativi input,

document.getElementById('get') .addEventListener ( "click", function (){
  var nome = document.getElementById ('nome').value;
  var cognome = document.getElementById ('cognome').value;
  //al click su un bottone, concatenare i valori degli input e stampare in console.
  console.log( nome + cognome );

  //bonus:stampa in html
  document.getElementById('dati').innerHTML = nome + cognome;

})
