// document.addEventListener("DOMContentLoaded",function(){
//onload
//ek extra span se typing effect kharab
//extra space--solved
// $(document).ready(function(){
    const text =document.querySelector(".fancy");
const strtext=text.textContent;
const splitText=strtext.split("");
text.textContent="";
let timer2;
let span;
console.log(splitText.length);
for(let i=0;i<splitText.length;i++){
    text.innerHTML=text.innerHTML+"<span>"+splitText[i]+"</span>";
}
let x=0;
let timer=setInterval(onTick,100);
// console.log(onTick);
function onTick(){
    span=text.querySelectorAll('span') ;  
   span[x].classList.add("fade");
//    console.log(span[x]);
   
   if(x==splitText.length-1)
   {
       complete();
       timer2=setInterval(onTick2,90);
   }
   x++;
   
}
function complete(){
    clearInterval(timer);
}

const text2 =document.querySelector(".fancy2")
const strtext2=text2.textContent;
const splitText2=strtext2.split("");
text2.textContent="";
for(let t=0;t<splitText2.length;t++)
{
    text2.innerHTML+="<span>"+splitText2[t]+"</span>"
}
let y=0;

function onTick2(){
    const paracontent=document.querySelectorAll("p>span")[y];
    paracontent.classList.add("fade2");
    if(y==splitText2.length-1)
    {
        complete2();
    }
    console.log(paracontent)
    y++;

}
function complete2(){
    clearInterval(timer2);
}



let toggle=document.querySelector("div.nav");
console.log(toggle);
 const tag=document.querySelector(".toggle");
 (tag.addEventListener("click",function(){toggle.classList.toggle("collapse");}));
const slide=document.querySelectorAll(".img");
const next=document.getElementById("#next");
const prev=document.getElementById("#prev");
const auto=true;
let ha;
console.log(slide);
function nextSlide(){
    if(auto)
{   window.clearInterval(ha);
    ha=window.setInterval(nextSlide,5000);
}
    const current=document.querySelector(".current");
   //Remove class current
    current.classList.remove("current");
     //Checking for sibling 
    if(current.nextElementSibling)
    { //Add class current
        current.nextElementSibling.classList.add("current");
    }
    else{//Else Adding to the first element class current
        slide[0].classList.add("current");
    }
    
}
function prevSlide(){
    if(auto)
    {   window.clearInterval(ha);
        ha=window.setInterval(nextSlide,5000);
    }
    const current=document.querySelector(".current");
   //Remove class current
    current.classList.remove("current");

     //Checking for sibling 
    if(current.previousElementSibling)
    { //Add class current to previous element
        current.previousElementSibling.classList.add("current");
    }
    else{//Else Adding to the last element class current
        slide[slide.length-1].classList.add("current");
    }   
}
//Auto play
if(auto)
{
   ha= window.setInterval(nextSlide,5000);
}
// })
