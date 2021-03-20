"use strict";
var cubo = function (x) { return Math.pow(x, 3); };
var MostrarCubo = function (x) {
    console.log(cubo(x).toString());
};
var factorial = function (n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
};
var factPrimo = function (numero) {
    if (numero >= 0) {
        console.log(factorial(numero));
    }
    else {
        MostrarCubo(numero);
    }
};
factPrimo(-2);
//# sourceMappingURL=app.js.map