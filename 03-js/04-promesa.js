// =====================================
// PROMESAS ❤️
// =====================================


// Crear estrellas

const stars =
document.getElementById("stars");


for(let i=0;i<250;i++){


let star =
document.createElement("div");


star.className="star";


let size =
Math.random()*4;


star.style.width=size+"px";

star.style.height=size+"px";


star.style.left =
Math.random()*100+"%";


star.style.top =
Math.random()*100+"%";


star.style.animationDelay =
Math.random()*3+"s";


stars.appendChild(star);


}





// Texto animado


const promises=[

"Prometo cuidar cada momento que compartimos ❤️",

"Prometo valorar cada sonrisa tuya ✨",

"Prometo estar presente en los días buenos y difíciles 🌙",

"Prometo seguir creando recuerdos hermosos contigo 🌹",

"Y sobre todo... prometo seguir eligiéndote 💖"

];



let i=0;


const text =
document.getElementById("promiseText");



function showPromise(){


if(i < promises.length){


text.innerHTML =
promises[i];


i++;


setTimeout(showPromise,3000);



}



}



showPromise();






// corazones


const hearts =
document.getElementById("hearts");



setInterval(()=>{


let heart =
document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"%";


hearts.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);



},500);






// botón final


document
.getElementById("next")
.onclick=function(){


document.body.style.transition="2s";

document.body.style.opacity=0;



setTimeout(()=>{


window.location.href=
"05-final.html";


},2000);



};