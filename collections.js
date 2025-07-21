const offer = document.getElementById("offer");
const menubar = document.getElementById("menubar");
const sidenav = document.getElementById("sidenav");
const closesidenav = document.getElementById("closesidenav");
const search = document.getElementById("search");
const divlist = document.querySelectorAll("#product-group div");

offer.addEventListener("click",function(){
    offer.parentElement.classList.add("hidden");
});

menubar.addEventListener("click",function(){
    sidenav.style.left="0%"; 
});

closesidenav.addEventListener("click",function(){
    sidenav.style.left="-50%"; 
});

const occassion = document.getElementsByName("ocassion");
const colors = document.getElementsByName("colors");
const arrivals = document.getElementsByName("arrivals");


search.addEventListener("keyup",function(){
    var enteredValue = this.value.toLowerCase();
    
    for(count=0;count<divlist.length;count=count+1){
        var h1text = divlist[count].querySelector("h1").textContent.toLowerCase();
        if(h1text.indexOf(enteredValue)==-1){
            divlist[count].style.display="none";
        }
        else{
             divlist[count].style.display="grid";
        }
    }
})
