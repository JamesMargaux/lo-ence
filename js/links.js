const drum = document.querySelector(".drum");
const space = document.querySelector(".space");
const anime = document.querySelector(".anime");
const cart = document.querySelector(".cart");

//link to product pages

drum.addEventListener("click", getURL);
space.addEventListener("click", getURL);
anime.addEventListener("click", getURL);
cart.addEventListener("click", getURL2);

function getURL(evt){
    console.log(evt);
    let url = evt.srcElement.attributes[1].nodeValue;
    if(url === "../html/lofiDrumkit.html"){
        goto(url);
    }
    else if(url === "../html/space808.html"){
        goto(url);
    }
    else if(url === "../html/animeSample.html"){
        goto(url);
    }
    else if(url2 === "../html/cart.html"){
        goto(url2);
    }
}

function getURL2(evt){
    console.log(evt);
    let url2 = evt.srcElement.parentNode.attributes[2].nodeValue;
    goto(url2);
}

function goto(url){
    window.location = url;
}