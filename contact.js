
const menubar = document.getElementById("menubar");
const sidenav = document.getElementById("sidenav");
const closesidenav = document.getElementById("closesidenav");



menubar.addEventListener("click",function(){
    sidenav.style.left="0%"; 
});

closesidenav.addEventListener("click",function(){
    sidenav.style.left="-50%"; 
});