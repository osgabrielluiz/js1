let but = document.getElementById('but')
but.addEventListener('click', somar)

function somar(){
let res = document.getElementById('res')
let numero1 = document.getElementById('n1').value
let numero2 = document.getElementById('n2').value

numero1 = Number(numero1)
numero2 = Number(numero2)

let s = numero1 + numero2

res.innerHTML = `A soma entre ${numero1} e ${numero2} é ${s}`

}
