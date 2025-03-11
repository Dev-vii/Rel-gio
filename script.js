let agora = new Date()
let hora = agora.getHours()
let min = agora.getMinutes()
let seg = agora.getSeconds()

document.getElementById('horario').innerHTML = (`${hora} : ${min} : ${seg}`)