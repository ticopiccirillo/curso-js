let valores = [8, 1, 7, 4, 2, 9 ,5, 8, 9, 3, 7 , 9, 2, 1, 3, 4, 5, 6, 9]

/*for(let posicao= 0; posicao < valores.length; posicao++) {
    console.log(`A posição ${posicao} tem o valor ${ valores[posicao]}`)
}*/

for(let pos in valores)
{
    console.log(valores[pos])
}