function contar() 
{
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] - Faltam alguns dados!')
    } 
    else 
    {
        res.innerHTML = 'Contando: <br> '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) 
        {
            window.alert('Passos inválidos! Considerendo passo 1')
            p = 1
        }

        if (i < f) 
        {
            //Contagem crescente
            for (let c = i; c <= f; c += p)
            {
                res.innerHTML += `${c} \u{1f449}`
            }
        } 
        else 
        {
            //Contagem regressiva
            for (let c = i; c >= f; c -= p) 
            {
            res.innerHTML +=  `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}