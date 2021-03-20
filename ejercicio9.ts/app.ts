const cubo = (x: number) => Math.pow(x,3);

const MostrarCubo = (x:number) =>{
    console.log(cubo(x).toString());
}

const factorial = (n: number) : number =>{
    if(n === 0)
    {
        return 1;
    }
    else
    {
        return n * factorial(n-1);
    }
}


const factPrimo = (numero:number) =>{
    if(numero >= 0)
    {
        console.log(factorial(numero));
    }
    else
    {
        MostrarCubo(numero);
    }
}

factPrimo(-2);