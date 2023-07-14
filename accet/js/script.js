'use strict'

/**
 * Add event listener on multiple elements
 */
const addEventsOnElements = function(elements,eventType,callback){
    for(let i = 0, len = elements.lenghts; i < len; i++){
     elements[i].addEventListener(eventType,callback);
    }
}

/**
 * Preloader
 */
const Preloader = document.querySelector("[data-preloader]");
window.addEventListener("load",function(){
    Preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});
/**
 * Mobile Nav Toggle
 */
 const navbar = document.querySelector("[data-navbar]");
 const navbarLinks = document.querySelectorAll("[data-nav-link]");
 const navToggler = document.querySelector("[data-nav-toggler]");

 const toggleNavbar = function (){ navbar.classList.toggle("active");}
 navToggler.addEventListener("click", toggleNavbar);

 /**
 * Header
 * active header when window scrolled to 50px
 * 
 */
const header = document.querySelector("[data-header]");
const activeHeader = function (){
    window.scrollY > 50 ? header.classList.add("active")
        :header.classList.remove("active");
}
window.addEventListener("scroll",activeHeader)
  
