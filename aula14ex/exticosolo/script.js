function tabuada( ) 
{
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0)
    {
        window.alert(`Digite um número ai!`)
    }
    else 
    {
        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10)
        {
            let item = document.createElement('option')
            item.text = `${n} * ${cont} = ${n*cont} `
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }
}