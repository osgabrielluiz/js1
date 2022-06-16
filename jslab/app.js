
function n1(){
    const fact = document.getElementById('number')
    const resp1 = document.getElementById('resp1')

    let calc = 1

    for(let i = 0; i < Number(fact.value); i++) {
        calc *= (Number(fact.value) - i)

    }

    return resp1.innerHTML = `O fatorial de ${fact.value} é ${calc}`

}

function n2(){
    resp2 = document.getElementById('resp2')

    for(let i = 0; i <= 30; i++){
        pot = Math.pow(4, i)
        const p = resp2.appendChild(document.createTextNode(`4 ** ${i} = ${pot} | `))

    }

} 

function n3() {
    const resp3 = document.getElementById('resp3')

    let total = 0

    for(let i = 0; i <= 1000; i++){
        if(i % 2 == 0){
            total += i

        }
    }

    resp3.innerHTML = (`A soma de todos os números pares até 1000: ${total}`)

}

function n4(){
    const number = document.getElementById('number')
    const resp4 = document.getElementById('resp4')

    let atual = 1
    let nxt = 0
    let back = 0

    for(let i = 1; i < 100; i++){
        nxt += back
        back = atual
        atual = nxt

        resp4.appendChild(document.createTextNode(`${atual} | `))
    }
}

function n5(){
    resp5 = document.getElementById('resp5')
    
    for(let i = 1; i <= 1000; i++){
        if(i % 2 == 0 || i % 3 == 0){
            if(i == 2 || i == 3) resp5.appendChild(document.createTextNode(`${i} | `))
        
        } else {
            resp5.appendChild(document.createTextNode(`${i} | `))
        }
    }

}
const buton = document.getElementById('enviar')
buton.addEventListener('click', () => {
    n1()
    n2()
    n3()
    n4()
    n5()

}) 