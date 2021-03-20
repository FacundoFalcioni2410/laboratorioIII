var nombre:string = "Facundo";
var nombre:string = "facundo";
var apellido:string = "falcioni";

const MostrarNombreApellido = (nombre:string, apellido:string) =>{
    apellido = apellido.toUpperCase();
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    console.log(`${apellido}, ${nombre}`)
}

MostrarNombreApellido(nombre,apellido);