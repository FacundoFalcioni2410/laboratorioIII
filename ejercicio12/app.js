"use strict";
var analizarFecha = function (cadena) {
    var arr = [];
    var mes;
    var dia;
    arr = cadena.split('/');
    mes = parseInt(arr[1]);
    dia = parseInt(arr[0]);
    return signoPorFecha(dia, mes);
};
var signoPorFecha = function (dia, mes) {
    var respuesta = "";
    Math.abs(mes);
    switch (mes) {
        case 3:
            if (dia < 21) {
                respuesta = "Piscis";
            }
            else {
                respuesta = "Aries";
            }
            break;
        case 4:
            if (dia < 21) {
                respuesta = "Aries";
            }
            else {
                respuesta = "Tauro";
            }
            break;
        case 5:
            if (dia < 22) {
                respuesta = "Tauro";
            }
            else {
                respuesta = "Geminis";
            }
            break;
        case 6:
            if (dia < 23) {
                respuesta = "Geminis";
            }
            else {
                respuesta = "Cancer";
            }
            break;
        case 7:
            if (dia < 24) {
                respuesta = "Cancer";
            }
            else {
                respuesta = "Leo";
            }
            break;
        case 8:
            if (dia < 23) {
                respuesta = "Leo";
            }
            else {
                respuesta = "Virgo";
            }
            break;
        case 8:
            if (dia < 23) {
                respuesta = "Leo";
            }
            else {
                respuesta = "Virgo";
            }
            break;
        case 9:
            if (dia < 23) {
                respuesta = "Virgo";
            }
            else {
                respuesta = "Libra";
            }
            break;
        case 10:
            if (dia < 23) {
                respuesta = "Libra";
            }
            else {
                respuesta = "Escorpio";
            }
            break;
        case 11:
            if (dia < 23) {
                respuesta = "Escorpio";
            }
            else {
                respuesta = "Sagitario";
            }
            break;
        case 12:
            if (dia < 22) {
                respuesta = "Sagitario";
            }
            else {
                respuesta = "Capricornio";
            }
            break;
        case 1:
            if (dia < 21) {
                respuesta = "Capricornio";
            }
            else {
                respuesta = "Acuario";
            }
            break;
        case 1:
            if (dia < 19) {
                respuesta = "Acuario";
            }
            else {
                respuesta = "Piscis";
            }
            break;
    }
    return respuesta;
};
console.log(analizarFecha("24/10/2000"));
//# sourceMappingURL=app.js.map