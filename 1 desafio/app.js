function data () {
    const userDate = querySelector("#userDate")
    console.log(userDate)

    return userDate
}

const button = document.querySelector("#button")
button.addEventListener("click", data())