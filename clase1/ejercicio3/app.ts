const repetir = (cantidad : number, cadena? : string) =>{
    if(cadena)
    {
        for(let i : number = 0; i < cantidad; i++)
        {
            console.log(cadena + "\n");
        }
    }
    else
    {
        
        console.log(cantidad * -1);
    }
}

repetir(6);