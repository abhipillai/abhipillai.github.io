"use strict";

document.getElementById("button-link").addEventListener("mouseenter", changeColor, false);
document.getElementById("button-link").addEventListener("mouseleave", originalColor, false);
document.getElementById("button-link").addEventListener("click", function() {
    document.location = "index.html#About";    
}, false);
document.getElementById("Home").style.height = window.innerHeight + 'px';
document.getElementById("Home").style.width = window.innerWidth + 'px';

function changeColor() {
    this.style.backgroundColor = "lavender";
    this.style.color = "#f35435";
    document.getElementById("arrow").classList.remove("right-arrow");
    document.getElementById("arrow").classList.add("down-arrow");
    this.style.borderColor = "#f35435";
}
function originalColor() {
    this.style.backgroundColor = "transparent";
    this.style.color = "white";
    document.getElementById("arrow").classList.add("right-arrow");
    document.getElementById("arrow").classList.remove("down-arrow");
    this.style.borderColor = "whitesmoke"
}
var text = "Hello, I am ";
var bTag ="Abhishek Pillai";
var nextLine = "Welcome to my website";
var i = 0;
var j = 0;
var k = 0;
var speed = 75;
var speed2 = 2200;

window.onload = typeWriter;

function typeWriter(){
    setTimeout(function(){document.getElementById("button-link").style.visibility = "visible"}, speed2);
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