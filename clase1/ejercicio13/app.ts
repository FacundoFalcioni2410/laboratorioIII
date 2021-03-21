const numerosPrimos: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

const descomponerNumero = (numero: number) =>{
    let result: number[] = [];

    for(let i: number = 0; numero != 1; i++)
    {
        while(numero % numerosPrimos[i] === 0)
        {
            if(numero % numerosPrimos[i] === 0)
            {   
                numero = numero / numerosPrimos[i];
                result.push(numerosPrimos[i]);
            }
        }
    }

    let string: string = result.join('');
    return sumarTerminos(parseInt(string));
}

const iguales = (numero1: number, numero2: number) =>{
    return numero1 === numero2;
}

const sumarTerminos = (numero: number) =>{
    let string: string = numero.toString();
    let arr: string[] = string.split('');
    let result: number = 0;

    for(let i:number = 0; i < arr.length; i++)
    {
        result += parseInt(arr[i]);
    }
    return result;   
}

console.log(iguales(sumarTerminos(378), descomponerNumero(378)));


