var soma = 0;

for (contadora = 1; contadora <= 500; contadora++) {
    if (contadora % 2 == 0) {
        var soma = soma + contadora;
    }
}
document.write("O somatório dos números pares dentro da faixa de 1 a 500 é: "+soma);