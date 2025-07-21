const offer = document.getElementById("offer");
const menubar = document.getElementById("menubar");
const sidenav = document.getElementById("sidenav");
const closesidenav = document.getElementById("closesidenav");
const imagelist = document.getElementById("image");
const leftarrow = document.getElementById("leftarrow");
const rightarrow=document.getElementById("rightarrow");
const navbar = document.getElementById("navbar");
offer.addEventListener("click",function(){
    offer.parentElement.classList.add("hidden");
    navbar.style.top="0";
});

menubar.addEventListener("click",function(){
    sidenav.style.left="0%"; 
});

closesidenav.addEventListener("click",function(){
    sidenav.style.left="-50%"; 
});


rightarrow.addEventListener("click",function(){
   
})