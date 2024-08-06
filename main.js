const passwordInput = document.querySelector("#password-input")
const changeView = document.querySelector("#change-view")

function handleClick(e){
    if(e.target.classList.contains('dont-view')){
        e.target.classList.remove('dont-view')
        e.target.classList.add('view')
        passwordInput.setAttribute('type', 'text')
    }else{
        e.target.classList.remove('view')
        e.target.classList.add('dont-view')
        passwordInput.setAttribute('type', 'password')
    }
}

changeView.addEventListener("click", handleClick)