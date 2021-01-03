const arrowUp = document.querySelector(".up");

//up up and awiiiiiiie
const observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true){
        console.log('Element has just become visible in screen');
        arrowUp.removeAttribute("style");
    }
    else{
        arrowUp.style.display = "block"
        setTimeout(()=>{
            arrowUp.style.opacity = "1";
        }, 200);
    }
}, { threshold: [0] });

observer.observe(document.querySelector("section"));