const analizarCadena = (cadena: string) =>{
    let array : string[] = [];
    cadena.replace('.', '').replace(',','').replace('-','');
    for(let i: number = 0; i < cadena.length; i++)
    {
        array.push(cadena.charAt(i));
    }

    if(array.every((element,index,array) =>
    {
        return element.charCodeAt(0) >= 97;
    }) ||
    array.every( (element,index,array) =>
    {
        return element.charCodeAt(0) <= 90
    }))
    {
        if(cadena.charCodeAt(0) >= 97)
        {
            return 'La cadena esta solamente conformada por minisculas'
        }
        else
        {
            return 'La cadena esta solamente conformada por mayusculas';
        }
    }
    else
    {
        return 'La cadena esta conformada por una mezcla de minisculas y mayusculas';
    }
}

console.log(analizarCadena("sdfsdfa"));