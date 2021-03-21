"use strict";
var repetir = function (cantidad, cadena) {
    if (cadena) {
        for (var i = 0; i < cantidad; i++) {
            console.log(cadena + "\n");
        }
    }
    else {
        console.log(cantidad * -1);
    }
};
repetir(6);
//# sourceMappingURL=app.js.map