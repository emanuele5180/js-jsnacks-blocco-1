



var invitati = [ "paperino", "topolino", "pluto", "pippo"];
var lista = false;



for (var i = 0; i < invitati.length; i++) {


  var nome = prompt("come ti chiami");
  if (nome == invitati) {
    lista = true;
    console.log("entra e muoviti!");

  } else {
    lista = false;
    console.log("smamma!");
  }

}
