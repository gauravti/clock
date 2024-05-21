// document.addEventListener{}
const hr=document.querySelector("#hr")

setInterval(function(){
    const d = new Date();
    const h=d.getHours();
    let k;
    if (h>12){
        k=h-12
    }
    k=90+(k*30);
    // console.log(k);
    hr.style.transform="rotate("+k.toString()+"deg)";
}, 1000);



const min=document.querySelector("#min")

setInterval(function(){
    const d = new Date();
    const m=d.getMinutes();
    let k;
    k=90+(m*6);
    // console.log(k);
    min.style.transform="rotate("+k.toString()+"deg)";
}, 1000);

const sec=document.querySelector("#sec")

setInterval(function(){
    const d = new Date();
    const m=d.getSeconds();
    let k;
    k=90+(m*6);
    // console.log(k);
    sec.style.transform="rotate("+k.toString()+"deg)";
}, 1000);

