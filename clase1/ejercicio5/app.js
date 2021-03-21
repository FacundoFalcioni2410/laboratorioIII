"use strict";
var nombre = "Facundo";
var nombre = "facundo";
var apellido = "falcioni";
var MostrarNombreApellido = function (nombre, apellido) {
    apellido = apellido.toUpperCase();
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    console.log(apellido + ", " + nombre);
};
MostrarNombreApellido(nombre, apellido);
//# sourceMappingURL=app.js.map