var sec = 0
var min = 0
var hora = 0
var intervalo


function Digitos(digit){
    if(digit<10){
       return('0'+digit)
        }

    else{
        return(digit)
        }
    }

function start(){
    watch()
    intervalo = setInterval(watch,1000)
}

function pause(){
    clearInterval(intervalo)
}

function reset(){
    clearInterval(intervalo)
    sec = 0
    min = 0
    document.getElementById('time').innerText = '00:00:00'
}






function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
    }

    if(min==60){
        min=0
        sec=0
        hora++
    }
    document.getElementById('time').innerText = Digitos(hora)+':'+Digitos(min)+':'+Digitos(sec)
}