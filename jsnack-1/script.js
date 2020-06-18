// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
var primoNumero = parseInt (prompt ("inserisci il primo numero"));
var secondoNumero = parseInt (prompt ("inserisci il secondo numero"));

if (primoNumero > secondoNumero){
  document.getElementById('numeromaggiore') .innerHTML = "il numero più grande è" + primoNumero;
}else if (primoNumero < secondoNumero) {
  document.getElementById('numeromaggiore') .innerHTML = "il numero più grande è" + secondoNumero;
}else { (primoNumero = secondoNumero);
  document.getElementById('numeromaggiore') .innerHTML = "i numeri sono uguali";
};
