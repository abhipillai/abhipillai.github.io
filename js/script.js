"use strict";

if (document.readyState == 'complete')
doOnLoad();

$(window).bind("load", doOnLoad);


// smooth scrolling
$(document).ready(function(){
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});
//Active menu item
$(document).ready(function(){
    $('.navbar-nav  li a').click(function(){
        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});
//highlight menu item on scroll
$(document).ready(function(){
    $(window).scroll(function(){
        $("section").each(function(){
            var elid = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grtTop = $(this).offset().top - 70;

            if($(window).scrollTop() > grtTop && $(window).scrollTop() < grtTop + hei){
                $(".navbar-nav li a[href='#" + elid + "']").parent().addClass("active");
            }
            else{
                $(".navbar-nav li a[href='#" + elid + "']").parent().removeClass("active");
            }
        });
    });
});

document.getElementById("button-link").addEventListener("mouseenter", changeColor, false);
document.getElementById("button-link").addEventListener("mouseleave", originalColor, false);
$("#button-link").click(function(){
    $('html,body').animate({
        scrollTop: $(".About").offset().top
    },
    'slow'
    );
});



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

//window.onload = typeWriter;


/* show and hide header */
$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() < $('.header-container').height()) {
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0)'
            })
        }
        else{
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            })
            $('.navbar-default').css({
                'background-color': 'rgba(59, 59, 59, 0.7)',
                'border-color': '#444'
            })
            $('.navbar-nav >li > a').css({
                'padding-top': '15px'
            })
        }
    });
}); 
// Slider
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto: true,
        minSlide: 1,
        maxSlide: 4,
        slideMargin: 50,
        captions: true,
        mode: 'fade'
    });
});
// Add animation
$(document).ready(function(){
    new WOW().init();
});
// Skill bar
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});