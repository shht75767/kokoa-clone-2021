const loginForm = document.querySelector("#login-form")
const loginId = document.querySelector(".login-form_id")


function saveId (){
    const userId = loginId.value;
    localStorage.setItem("user_name", userId)
    paintId(userId)
}
function pageMove(event) {
    event.preventDefault()
    location.href = "friends.html";
    saveId()
}

loginForm.addEventListener("submit", pageMove)