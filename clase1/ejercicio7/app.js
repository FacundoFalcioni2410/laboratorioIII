"use strict";
var cantidad = 0;
var j = 2;
var numerosPrimos = [];
var primo = function (numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
};
do {
    if (primo(j)) {
        numerosPrimos.push(j);
        cantidad++;
    }
    j++;
} while (cantidad !== 20);
console.log(numerosPrimos);
//# sourceMappingURL=app.js.map