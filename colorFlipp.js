const changeColor=function(){
    const hex="0123456789ABCDEF"
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;

}

const btn=document.getElementById("btn")
const color=document.querySelector(".color")

btn.addEventListener("click",function(){
    color.textContent=changeColor();
    color.style.backgroundColor=changeColor();
    btn.style.color=changeColor();
    document.body.style.backgroundColor=changeColor();

})