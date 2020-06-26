



var invitati = [ "paperino", "topolino", "pluto", "pippo"];
var lista = false;

var nome = prompt("come ti chiami");

for (var i = 0; i < invitati.length; i++) {

  if (nome == invitati[i]) {

    lista = true;


  }

}

if (lista == true) {


  console.log("entra e muoviti!");

} else {
  console.log("smamma!");



}
