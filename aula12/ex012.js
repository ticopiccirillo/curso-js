var agora = new Date()
var agoramin = new Date()
var hora = agora.getHours()
var minuts = agoramin.getMinutes()
console.log (`Agora são exatamente ${hora}h${minuts}m.`)
if (hora <12 ) {
    console.log('Bom dia!')
} else if ( hora <18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}