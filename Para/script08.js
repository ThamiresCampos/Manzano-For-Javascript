let base = parseInt(prompt("Insira o valor da base: "));
let expoente = parseInt(prompt("Insira o valor do expoente: "));
var resultado = 1;

for (contadora = 1; contadora <= expoente; contadora++) {
    var resultado = resultado * base;
}
document.write(base + " ^ " + expoente + " = " + resultado);