const buton = document.getElementById('enviar')


buton.addEventListener('click', () => {
    const userDate = document.getElementById('userDate')
    const strDate = userDate.value


    const yDate = parseInt(strDate.split('-')[0])
    const mDate = parseInt(strDate.split('-')[1]) - 1 // O mês vai de 0 - 11
    const dDate = parseInt(strDate.split('-')[2])

    const birthDate = new Date(yDate, mDate, dDate)

    const actualDate = new Date()
    const mili = (actualDate.getTime() - birthDate.getTime())

    let liveHours = (mili / (1000 * 60 * 60)).toFixed(2)

    const resp = document.getElementById('resp')
    resp.appendChild(document.createTextNode(`Seu total de horas de vida foi ${liveHours}`))

})


