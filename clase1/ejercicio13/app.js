"use strict";
var numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];
var descomponerNumero = function (numero) {
    var factoresPrimos = [];
    for (var i = 0; i < numerosPrimos.length && numero != 1; i++) {
        while (numero % numerosPrimos[i] === 0) {
            numero = numero / numerosPrimos[i];
            factoresPrimos.push(numerosPrimos[i]);
        }
    }
    var string = factoresPrimos.join('');
    return sumarTerminos(parseInt(string));
};
var iguales = function (numero1, numero2) {
    return numero1 === numero2;
};
var sumarTerminos = function (numero) {
    var string = numero.toString();
    var arr = string.split('');
    var result = 0;
    arr.forEach(function (element) {
        result += parseInt(element);
    });
    return result;
};
console.log(iguales(sumarTerminos(1086), descomponerNumero(1086)));
//# sourceMappingURL=app.js.map