"use strict";
var analizarCadena = function (cadena) {
    var array = [];
    cadena.replace('.', '').replace(',', '').replace('-', '');
    for (var i = 0; i < cadena.length; i++) {
        array.push(cadena.charAt(i));
    }
    if (array.every(function (element, index, array) {
        return element.charCodeAt(0) >= 97;
    }) ||
        array.every(function (element, index, array) {
            return element.charCodeAt(0) <= 90;
        })) {
        if (cadena.charCodeAt(0) >= 97) {
            return 'La cadena esta solamente conformada por minisculas';
        }
        else {
            return 'La cadena esta solamente conformada por mayusculas';
        }
    }
    else {
        return 'La cadena esta conformada por una mezcla de minisculas y mayusculas';
    }
};
console.log(analizarCadena("sdfsdfa"));
//# sourceMappingURL=app.js.map