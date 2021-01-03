const cancel = document.querySelector(".cancel");

cancel.addEventListener("click", backToLogin);

function backToLogin(evt){
    evt.preventDefault();
    window.location = "../html/login.html";
}