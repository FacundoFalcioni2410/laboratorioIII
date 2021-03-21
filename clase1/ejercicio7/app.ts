
var numerosPrimos: number[] = [];

const primo = (numero:number) => {

    for (let i = 2; i < numero; i++) {
  
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }

const esPrimo = () =>{
  let j: number = 2;
  let cantidad:number = 0;
  do{
    if (primo(j))
    {
        numerosPrimos.push(j);
        cantidad++;
    }
    j++;
  }while(cantidad !== 20)

}


console.log(numerosPrimos);