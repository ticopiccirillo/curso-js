function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')

    if (formano.value.length == 0 || Number(formano.value) > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente!')

    } else {

        var formsex = document.querySelectorAll('input.sexo');
        var idade = ano - Number(formano.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute(`id`, `foto`)

        if (formsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade <10) {
                //Criança
                imagem.setAttribute('src','criança-menino.jpg')
            } else if (idade < 17) {
                //Jovem - Adolescente
                imagem.setAttribute('src','homem-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src','homem-adulto.jpg')
            } else { //>50
                //Idoso
                imagem.setAttribute('src','idoso-homem.jpg')
            }
            
        } else if (formsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade <10) {
                //Criança
                imagem.setAttribute('src','criança-menina.jpg')
            } else if (idade < 18) {
                //Jovem - Adolescente
                imagem.setAttribute('src','mulher-jovem.jpg')
            } else if (idade < 50) {
                //Adulto
                imagem.setAttribute('src','mulher-adulta.jpg')
            } else {
                //Idoso
                imagem.setAttribute('src','idosa-mulher.jpg')  
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(imagem)
        
    }
}