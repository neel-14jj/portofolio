let teller =1
let richting=1
let aantal=document.querySelectorAll("body div").length
setInterval(function(){
    teller+=richting
    document.querySelector(".gekleurd").classList.remove("gekleurd")
    document.querySelector("body div:nth-child("+teller+")").classList.add("gekleurd");
    if(teller == aantal || teller == 1){
        richting *=-1
    }
},50);
