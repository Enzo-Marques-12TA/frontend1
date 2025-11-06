const button = document.querySelector("button")
button.onclick = (event) => {
    event.preventDefault()
    signUpEagle()
}


function signUpEagle() {
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const age = document.querySelector("#age").value
    const nickname = document.querySelector("#nickname").value

    if (name === "" || email === "" || age === "" || nickname === ""){
        alert("Preencha TODAS as informações!")
        return
    }

    const user = {
        name,
        email,
        age,
        nickname
    }

    console.log(user)

    //enviar o user para o backend, o video cortou
}