const body = document.querySelector("body");
const svg = document.querySelector("svg");
const head = document.querySelector("#head");

// Frame Color
const red = document.querySelector(".one");
const orange = document.querySelector(".two");
const yellow = document.querySelector(".three");
const green = document.querySelector(".four");
const sky = document.querySelector(".five");
const blue = document.querySelector(".six");

function mode() {
    if (body.classList.contains("dark-mode")) {
        body.style.backgroundColor = '#f9f9f9';
        svg.style.fill = '#191919';
        head.style.color = '#191919';
        body.classList.remove("dark-mode");
        darkMode();                                                                                                                                                                                                                                                                                             
    } else {
        body.style.backgroundColor = '#191919';
        svg.style.fill = '#f9f9f9';
        head.style.color = '#f9f9f9';
        body.classList.add("dark-mode");
        lightMode();
    }
}

function lightMode(){
    red.style.backgroundColor = "#f84141";
    orange.style.backgroundColor = "#ff693a";
    yellow.style.backgroundColor = "#ffd25e";
    green.style.backgroundColor = "#3cd253";
    sky.style.backgroundColor = "#5d94ff";
    blue.style.backgroundColor = "#285c82"
}

function darkMode(){
    red.style.backgroundColor = "#ed0000";
    orange.style.backgroundColor = "#fc3c00";
    yellow.style.backgroundColor = "#fbb500";
    green.style.backgroundColor = "#00ab1b";
    sky.style.backgroundColor = "#0057ff";
    blue.style.backgroundColor = "#1c3e57"
}