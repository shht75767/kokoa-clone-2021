const h4 = document.querySelector(".user-component__title")
const userName = localStorage.getItem("user_name")

function paintId(){
    h4.innerText = userName
}
paintId()



