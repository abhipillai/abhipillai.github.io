"use strict";

document.getElementById("button-link").addEventListener("mouseenter", changeColor, false);
document.getElementById("button-link").addEventListener("mouseleave", originalColor, false);
document.getElementById("button-link").addEventListener("click", function() {
    document.getElementsByClassName("About")[0].scrollIntoView();    
}, false);


function changeColor() {
    this.style.backgroundColor = "#129cf3";
    this.style.opacity="0.5";    
    this.style.borderColor = "#129cf3";
    document.getElementsByTagName("i")[0].classList.add("fa-angle-down");
    document.getElementsByTagName("i")[0].classList.remove("fa-angle-right");
}
function originalColor() {
    this.style.backgroundColor = "transparent";
    this.style.opacity="1";
    document.getElementsByTagName("i")[0].classList.add("fa-angle-right");
    document.getElementsByTagName("i")[0].classList.remove("fa-angle-down");
    this.style.borderColor = "whitesmoke"
}
var text = "Hello, I am ";
var bTag ="Abhishek Pillai";
var nextLine = "Welcome to my website";
var i = 0;
var j = 0;
var k = 0;
var speed = 75;

window.onload = typeWriter;

function typeWriter(){
    document.getElementById("button-link").style.color = "whitesmoke";
    document.getElementById("button-link").style.borderColor = "whitesmoke";
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    if(i == text.length){
        document.getElementById("typewriter").innerHTML += "<b id = 'bTag'></b>";
        typeBTag();
    }    
}
function typeBTag(){
    if(j < bTag.length){
        document.getElementById("bTag").innerHTML += bTag.charAt(j);
        j++;
        setTimeout(typeBTag, speed);
    }
    if(j == bTag.length){        
        typeNextLine();
    }
}
function typeNextLine(){
    if(k == 0){
        document.getElementById("typewriter").innerHTML += "<br>";
    }
    if(k < nextLine.length){
        document.getElementById("typewriter").innerHTML += nextLine.charAt(k);
        k++;
        setTimeout(typeNextLine, speed);
    }
}