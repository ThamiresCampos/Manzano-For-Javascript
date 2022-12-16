var celsius = 10;

for (contadora = 1; contadora <= 100; contadora++) {
    var F = ((9 * celsius) + 160) / 5;
    var celsius = celsius + 10;

    document.write(celsius + " ° C " + " = " + F + " ° F " + "<br>")
}