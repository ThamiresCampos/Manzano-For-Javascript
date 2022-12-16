var anterior = 1;
var resultado = 0;
var primeiro = 0;

document.write(" 1 " + "<br>");
for (contadora = 1; contadora <= 15; contadora++) {
    var resultado = primeiro + anterior;
    document.write(resultado + "<br>")
    var primeiro = anterior;
    var anterior = resultado;
}