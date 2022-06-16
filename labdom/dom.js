function number1 (){
    const n1 = document.querySelector("#num1")
    const n2 = document.querySelector("#num2")
    const result = document.querySelector("#resp1")
    
    const soma = parseInt(n1.value) + parseInt(n2.value)

    return result.innerHTML = `Soma: ${soma}`

}  

function number2 (){
    const n1 = document.querySelector("#num1")
    const n2 = document.querySelector("#num2")
    const result = document.querySelector("#resp2")
    let maior = undefined

    if (n1.value >= n2.value) maior = Number(n1.value)
    else if (n1.value <= n2.value) maior = Number(n2.value)
    else if (maior.value == undefined) maior = "ERROR!"

    return result.innerHTML = `O maior número digitado foi ${maior}`

}

function number3 (){
    const n1 = document.querySelector("#num1")
    const result = document.querySelector("#resp3")
    let n1Verif = undefined

    if (parseInt(n1.value) % 2 == 0 || parseInt(n1.value) % 3 == 0){
        if(n1.value ==  2 || n1.value == 3) n1Verif = "é primo!"
        n1Verif = "não é primo!" 

    } else {
        n1Verif = "é primo!"
    }

    return result.innerHTML = `O primeiro número ${n1Verif}`
    
}

function number4(){
    const catAdj = document.querySelector("#num1")
    const catOp = document.querySelector("#num2")
    const resp4 = document.querySelector("#resp4")
    let h = undefined

    h = Math.sqrt( (Math.pow(catAdj.value, 2) + Math.pow(catOp.value, 2)) )

    return resp4.innerHTML = `Hipotenusa = ${h}`

}

function number5(){
    const sal = document.querySelector("#salario")
    const reaj = document.querySelector("#reaj")
    const resp5 = document.querySelector("#resp5")
    
    let result = Number(sal.value )

    result += (sal.value * (reaj.value)/100)

    resp5.innerHTML = `Seu salário foi ajustado! Novo salário: ${result}`

}

function number6(){
    const c = document.querySelector("#temperatura")
    const resp6 = document.querySelector("#resp6")

    let f = ((Number(c.value) * 9) / 5) + 32

    resp6.innerHTML = `A temperatura digitada em Fahrenheit: ${f}°`

}

function number7(){
    const n1 = document.querySelector("#nota1")
    const n2 = document.querySelector("#nota2")
    const n3 = document.querySelector("#nota3")
    const resp7 = document.querySelector("#resp7")
    
    const med = (((n1.value * 2) + (n2.value * 3) + (n3.value * 5)) / 10)

    resp7.innerHTML = `Média: ${Number(med)}`

}


const buton1 = document.querySelector("#enviar")
buton1.addEventListener("click", ()=>{
    number1()
    number2()
    number3()
    number4()
    
})

const buton2 = document.querySelector("#enviar2")
buton2.addEventListener("click", number5)

const buton3 = document.querySelector("#enviar3")
buton3.addEventListener("click", number6)

const buton4 = document.querySelector("#enviar4")
buton4.addEventListener("click", number7)