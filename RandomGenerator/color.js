let start=document.getElementById("start");
let stop=document.getElementById("stop");
let colorInterval;
function color(){
    let hex='0123456789ABCDEF';
    let colr='#';
    for(let i=0;i<6;i++){
        colr+=hex[Math.floor(Math.random()*16)]
    }
    return colr;
}

let colorChanger=function (){
    document.body.style.backgroundColor=color();
}
let randomColor=function(){
    if(!colorInterval){
        colorInterval=setInterval(colorChanger,2000);
    }
   /* function colorChanger(){
        document.body.style.backgroundColor=color();
    }*/
}
function stopGen(){
    clearInterval(colorInterval);
    colorInterval=null;
}
start.addEventListener('click',randomColor);
stop.addEventListener('click',stopGen);