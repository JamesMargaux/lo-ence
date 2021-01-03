const loginSection = document.querySelector(".login-section");
const modal = document.querySelector(".modal");
const forgotPass = document.querySelector(".forgot");
const submit = document.querySelector(".submit");
const cancel = document.querySelector(".cancel");

forgotPass.addEventListener("click", showModal);
forgotPass.addEventListener("keyup", (evt)=>{
    if(evt.key === "Enter"){
        evt.preventDefault();
        showModal();
        
    }
});


submit.addEventListener("click", hideModal);
cancel.addEventListener("click", hideModal);

submit.addEventListener("keyup",(evt)=>{
    if(evt.key === "Enter"){
        evt.preventDefault();
        hideModal();
        
    }
});
cancel.addEventListener("keyup",(evt)=>{
    if(evt.key === "Enter"){
        evt.preventDefault();
        hideModal();
        
    }
});

window.addEventListener("keyup",(evt)=>{
    if(evt.key === "Escape"){
        evt.preventDefault();
        hideModal();
        
    }
});

function hideModal(){
    modal.removeAttribute("style");
    loginSection.removeAttribute("style");
}

function showModal(){
    modal.style.display = "flex";
    loginSection.style.backgroundColor = "rgb(150,150,150)";
    

}

