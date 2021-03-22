const numerosPrimos: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199];

const descomponerNumero = (numero: number) =>{
    let factoresPrimos: number[] = [];

    for(let i: number = 0; i < numerosPrimos.length && numero != 1; i++)
    {
        while(numero % numerosPrimos[i] === 0)
        {   
            numero = numero / numerosPrimos[i];
            factoresPrimos.push(numerosPrimos[i]);
        }
    }

    let string: string = factoresPrimos.join('');
    return sumarTerminos(parseInt(string));
}

const iguales = (numero1: number, numero2: number) =>{
    return numero1 === numero2;
}

const sumarTerminos = (numero: number) =>{
    let string: string = numero.toString();
    let arr: string[] = string.split('');
    let result: number = 0;

    arr.forEach(element => {
        result+= parseInt(element);
    });
    return result;   
}

console.log(iguales(sumarTerminos(1086), descomponerNumero(1086)));


