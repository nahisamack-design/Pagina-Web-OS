// Texto animado

const texto =
"Bienvenida a nuestro pequeño universo ❤️";


let posicion=0;


function escribir(){

    if(posicion < texto.length){

        document.getElementById("typing")
        .innerHTML += texto[posicion];

        posicion++;

        setTimeout(escribir,90);

    }

}


escribir();



// Crear estrellas

const stars =
document.getElementById("stars");


for(let i=0;i<250;i++){

    let estrella =
    document.createElement("div");


    estrella.className="star";


    let tamaño =
    Math.random()*4;


    estrella.style.width=
    tamaño+"px";


    estrella.style.height=
    tamaño+"px";


    estrella.style.left=
    Math.random()*100+"%";


    estrella.style.top=
    Math.random()*100+"%";


    estrella.style.animationDelay=
    Math.random()*3+"s";


    stars.appendChild(estrella);

}




// Corazones flotando


const hearts =
document.getElementById("hearts");


setInterval(()=>{


    let corazon =
    document.createElement("div");


    corazon.className="heart";


    corazon.innerHTML="❤️";


    corazon.style.left=
    Math.random()*100+"%";


    corazon.style.fontSize=
    (15+Math.random()*30)+"px";


    corazon.style.animationDuration=
    (5+Math.random()*5)+"s";


    hearts.appendChild(corazon);



    setTimeout(()=>{

        corazon.remove();

    },10000);



},400);





// Pétalos

const petals =
document.getElementById("petals");


setInterval(()=>{


    let petalo =
    document.createElement("div");


    petalo.className="petal";


    petalo.style.left=
    Math.random()*100+"%";


    petalo.style.animationDuration=
    (6+Math.random()*6)+"s";


    petals.appendChild(petalo);



    setTimeout(()=>{

        petalo.remove();

    },12000);



},700);




// Botón

document
.getElementById("startButton")
.onclick=function(){


    document.body.style.transition="2s";

    document.body.style.opacity="0";


    setTimeout(()=>{

        window.location.href=
        "02-jardin.html";


    },2000);


};