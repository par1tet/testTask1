const passwordInput = document.querySelector("#password-input")
const changeView = document.querySelector("#change-view")
const iconsSocial = document.querySelectorAll(".main__form-social > img")

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

function handleMouseOver(e){
    e.target.setAttribute('src', `${e.target.getAttribute('src').slice(0,-4)}-hover.svg`)
}

function handleMouseOut(e){
    e.target.setAttribute('src', `${e.target.getAttribute('src').slice(0,-10)}.svg`)
}

changeView.addEventListener("click", handleClick)

for(let i = 0;i !== iconsSocial.length;i++){
    iconsSocial[i].addEventListener("mouseover", handleMouseOver)
    iconsSocial[i].addEventListener("mouseout", handleMouseOut)
}