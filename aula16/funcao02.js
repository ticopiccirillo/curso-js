function soma(n1, n2) 
{
    return n1 + n2
}

//let res = (soma(3, 5))
/* da o mesmo resulktado, porem no ex. acima foi criado uma variavel, no ex abaxio a mesma variavel foi criada j adireto dentro do console.log

console.log(soma(3, 8))*/

//se por acaso nao for dado o segundo parametro.

function soma(n1=0, n2=0) 
{
    return n1 + n2
}
console.log(soma(6))
