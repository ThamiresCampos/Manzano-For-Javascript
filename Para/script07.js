var resultado = 0;

for (contadora = 0; contadora <= 15; contadora++) {
    var resultado = resultado * 3

    if (resultado == 0) {
        var resultado = resultado + 1;
    }
    document.write("3 ^ " + contadora + " = " + resultado + "<br>")
}