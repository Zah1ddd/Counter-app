let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let counter =document.querySelector(".slide")
let  reset = document.querySelector(".reset")
let slideValue = 0
const clickReset = function(){
    slideValue=0
    counter.innerHTML=slideValue;
}
const clickPlus = function(){ 
    slideValue++;
    counter.innerHTML=slideValue;
}

const clickMinus = function(){
    slideValue--;
    counter.innerHTML=slideValue;
}
minus.addEventListener("click",clickMinus)
plus.addEventListener("click",clickPlus)
reset.addEventListener("click",clickReset)