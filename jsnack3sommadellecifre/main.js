var numero = prompt("inserisci un numero di 4 cifre");
var array = numero.split("");
console.log(array);

var sum =0;

for (var i = 0; i < array.length; i++) {




  sum += parseInt(array[i]);

}

console.log(sum);
