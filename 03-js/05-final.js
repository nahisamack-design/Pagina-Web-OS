// =====================================
// FINAL ❤️
// =====================================



const stars =
document.getElementById("stars");



for(let i=0;i<300;i++){


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


stars.appendChild(star);


}






// Corazones


const hearts =
document.getElementById("hearts");



setInterval(()=>{


let heart =
document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"%";


heart.style.fontSize =
(15+Math.random()*30)+"px";


hearts.appendChild(heart);



setTimeout(()=>{

heart.remove();

},8000);



},300);






// Pétalos


const petals =
document.getElementById("petals");



setInterval(()=>{


let petal =
document.createElement("div");


petal.className="petal";


petal.style.left =
Math.random()*100+"%";


petal.style.animationDuration =
(5+Math.random()*5)+"s";


petals.appendChild(petal);



setTimeout(()=>{

petal.remove();

},10000);



},500);






// Reiniciar historia


document
.getElementById("restart")
.onclick=function(){


window.location.href="01-index.html";


};