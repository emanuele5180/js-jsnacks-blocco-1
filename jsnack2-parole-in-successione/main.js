var parola1 = prompt("inserisci la parola 1");
var parola2 = prompt("inserisci la parola2");

if (parola1.length<parola2.length) {
  console.log(parola1);

}else if (parola2.length<parola1.length) {
  console.log(parola2);

} else{
  console.log("le parole sono uguali");
}
