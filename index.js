function carregar() {
let msg = window.document.getElementById('msg')
let img = window.document.getElementById('imagem')
let data = new Date()
let dayNow = window.document.getElementById('dayNow')
let hora = data.getHours()
let minuto = data.getMinutes()
if ( hora >= 0 && hora < 12 ) {
    dayNow.innerHTML = `Good Morning`
    msg.innerHTML = `${hora}:${minuto}`
    img.src = 'manha.jpg'
} else if (hora >= 12 && hora < 18) {
    dayNow.innerHTML = `Good Afternoon`
    msg.innerHTML = `${hora}:${minuto}`
    img.src = 'tarde.jpg'
} else {
    dayNow.innerHTML = `Good Night`
    msg.innerHTML = `${hora}:${minuto}`
    img.src = 'noite.jpg'
}
if (minuto < 10){
    minuto = "0" + minuto
}
}