function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h e ${minutos}m.`

    if (hora >= 0 && hora < 12 ) {
        //Bomd Dia!
        img.src = 'manha.jpg'
        document.body.style.background = `yellow`
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = `orange`
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = `black`
    }
}