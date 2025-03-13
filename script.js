const hr = document.getElementById('horas')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let agora = new Date()
    let hora = agora.getHours
    let minuto = agora.getMinutes
    let segundo = agora.getSeconds

    hr.textContent = hora
    min.textContent = minuto
    seg.textContent = segundo
})