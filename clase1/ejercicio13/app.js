"use strict";
var numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var descomponerNumero = function (numero) {
    var result = [];
    for (var i = 0; numero != 1; i++) {
        while (numero % numerosPrimos[i] === 0) {
            if (numero % numerosPrimos[i] === 0) {
                numero = numero / numerosPrimos[i];
                result.push(numerosPrimos[i]);
            }
        }
    }
    var string = result.join('');
    return sumarTerminos(parseInt(string));
};
var iguales = function (numero1, numero2) {
    return numero1 === numero2;
};
var sumarTerminos = function (numero) {
    var string = numero.toString();
    var arr = string.split('');
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        result += parseInt(arr[i]);
    }
    return result;
};
console.log(iguales(sumarTerminos(378), descomponerNumero(378)));
//# sourceMappingURL=app.js.map