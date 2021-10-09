const displayBtn = document.querySelector(".fa-chevron-right")
const friends = document.querySelector(".friend")
const displayBtnUp = friends.querySelector(".fa-chevron-up")

function displayFriend (event){
    friends.classList.toggle("hidden")
    
}
function friendHidden(event){
    friends.classList.add("hidden")

}
displayBtn.addEventListener("click", displayFriend)
displayBtnUp.addEventListener("click", friendHidden)

