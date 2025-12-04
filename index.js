function init(){
    const menu = document.querySelector("nav ul")
    //recuperar user do session storage e conveter o mesmo para objeto 

    const user = JSON.parse(sessionStorage.getItem("user"))

    //verificar a existência de um usuário para que a altersaçaõ do menuy seja realizada
    if(user){
        menu.innerHTML += `
            <li>
                <a href="./pages/usuarios/usuarios.html">Usuários</a>
            </li>
            <li>
                <h2>Usuário: ${user.name}</h2>
            </li>
            <li>
                <button id="logout">Sair</button>
            </li>
        `

        const logoutButton = document.querySelector("#logout")
        logoutButton.addEventListener("click", logout)

        return
    }

    //no caso do usuário não estar logado
    menu.innerHTML += `
    <li>
    <a href="./pages/login/login.html">Login</a>
    </li>
    `
}

init()


 function logout(){
    //remover user do sessionStorage
    sessionStorage.removeItem("user")
    alert("Você saiu, mas não se preocupe! Você pode voltar outras vezes! Tchau... Que a porta bata onde o sol não bate. Bon Voyage.")
    window.location.reload()
 }               

