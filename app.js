
function number1(){
    const fact = document.querySelector("#number")
    const resp1 = document.querySelector("#resp1")

    let calc = 1

    for(let i = 0; i < Number(fact.value); i++) {
        calc *= (Number(fact.value) - i)

    }

    return resp1.innerHTML = `O fatorial de ${fact.value} é ${calc}`

}

function number2(){
    resp2 = document.querySelector("#resp2")

    for(let i = 0; i <= 30; i++){
        pot = Math.pow(4, i)
        const p = resp2.appendChild(document.createTextNode(`4 ** ${i} = ${pot} | `))

    }

} 

function number3() {
    const resp3 = document.querySelector("#resp3")

    let total = 0

    for(let i = 0; i <= 1000; i++){
        if(i % 2 == 0){
            total += i

        }
    }

    resp3.innerHTML = (`A soma de todos os números pares até 1000: ${total}`)

}

function number4(){
    const number = document.querySelector("#number")
    const resp4 = document.querySelector("#resp4")

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

function number5(){
    resp5 = document.querySelector("#resp5")
    
    for(let i = 1; i <= 1000; i++){
        if(i % 2 == 0 || i % 3 == 0){
            if(i == 2 || i == 3) resp5.appendChild(document.createTextNode(`${i} | `))
        
        } else {
            resp5.appendChild(document.createTextNode(`${i} | `))
        }
    }

}
const buton = document.querySelector("#enviar")
buton.addEventListener("click", () => {
    number1()
    number2()
    number3()
    number4()
    number5()

}) 