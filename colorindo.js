

let caixa=document.querySelector('.area')
let button= document.querySelector('#btgreen')
let butão2= document.querySelector('#btorange')
let input= document.querySelector('#btred')

btgreen.addEventListener('click', modoGreen)
btorange.addEventListener('click', corOrange)
btred.addEventListener('click', corRed)


function modoGreen(){
    caixa.style.background="green"
}

function corOrange(){
    caixa.style.background="orange"
}

function corRed(){
    caixa.style.background="red"
}