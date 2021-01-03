/* const key = "AIzaSyB27bg5n6ylbUejnYQUZZCiDMQx7MkUs2s";
const base = "https://www.googleapis.com/youtube/v3/videos";

fetch(`https://www.googleapis.com/youtube/v3/videos?id=bbv4T0wnvH4&key=${key}&part=snippet,player`)
.then(response => {
    return response.json();
}).then(json =>{
    console.log(json);
    generateVideo(json);
}).catch(err => {
    console.log(err);
});

function generateVideo(json){
    const body = document.body;
    console.log(json.items[0].player.embedHtml)
    body.append(json.items[0].player.embedHtml);
}; */

const searchBtn = document.querySelector(".search");
const searchBar = document.querySelector(".searchBar");
const nav = document.querySelector("nav");
const humberger1 = document.querySelector(".humburger");
const humberger2 = document.querySelector(".humburger2");
const logo = document.querySelector(".logo");


//search button animation
searchBtn.addEventListener("keyup", (evt)=>{
    if(evt.keyCode === 13){
        evt.preventDefault();
        showSearchBox();
        searchBar.focus();
        
    }
})
searchBtn.addEventListener("click", showSearchBox);

function showSearchBox(){
    if(!isElementVisible(nav)){
        if(isElementVisible(searchBar)){
            searchBar.style.flex = "0";
            searchBar.style.padding = "0"
            setTimeout(()=>{
                searchBar.style.display = "none";
                logo.style.display = "block";
                setTimeout(()=>{
                    logo.style.opacity = "1";
                },10)
            },210);
            
        }
        else{
            logo.style.opacity = "0";
            searchBar.style.display = "block";
            setTimeout(()=>{
                logo.style.display = "none";
                searchBar.style.flex = "1";
                searchBar.style.padding = "5px 20px 5px 20px"
            },200);
        }
    }
    else{
        
        if(isElementVisible(searchBar)){
            searchBar.style.flex = "0";
            searchBar.style.padding = "0"
            setTimeout(()=>{
                searchBar.style.display = "none";
            },210);
        }
        else{
            searchBar.style.display = "block";
            setTimeout(()=>{
                searchBar.style.flex = "1";
                searchBar.style.padding = "5px 20px 5px 20px"
            },50);
        }
    }
}


//mobile nav
humberger1.addEventListener("click", () =>{
    nav.style.display = "flex";
    setTimeout(()=>{
    nav.style.width = "40vw";
    },50);
});
humberger2.addEventListener("click", hideNav);

function hideNav(){
    nav.style.width = "0";
    setTimeout(()=>{
        nav.removeAttribute("style")
;    },100);
}


//utility to check if the element is visible
function isElementVisible(element) { 
    if (element.offsetWidth ||  
       element.offsetHeight ||  
       element.getClientRects().length) 
        return true; 
    else 
        return false; 
} 