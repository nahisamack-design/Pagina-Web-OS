// =====================================
// JARDÍN MÁGICO 🌹
// Nuestro Universo ❤️
// =====================================


// Crear estrellas

const stars = document.getElementById("stars");


for(let i = 0; i < 200; i++){

    const star = document.createElement("div");

    star.className = "star";


    let size = Math.random() * 4;


    star.style.width = size + "px";
    star.style.height = size + "px";


    star.style.left =
    Math.random()*100 + "%";


    star.style.top =
    Math.random()*100 + "%";


    star.style.animationDelay =
    Math.random()*3 + "s";


    stars.appendChild(star);

}



// =====================================
// CREAR FLORES
// =====================================


const garden =
document.getElementById("garden");


const frases = [

"Tu sonrisa es mi lugar favorito ❤️",

"Eres la flor más bonita de mi jardín 🌹",

"Gracias por hacer mis días mejores ✨",

"Contigo todo tiene más color 🌸",

"Siempre elegiría estar contigo 💖",

"Mi momento favorito siempre será contigo 🌙"

];



for(let i=0;i<12;i++){


    let flower =
    document.createElement("div");


    flower.className="flower";


    flower.innerHTML=`

        <div class="rose"></div>

        <div class="stem"></div>

        <div class="leaf"></div>

        <div class="leaf2"></div>

    `;


    flower.onclick=function(){


        let message =
        document.getElementById("message");


        message.innerHTML =
        frases[
        Math.floor(
        Math.random()*frases.length
        )
        ];


    };


    garden.appendChild(flower);


}




// =====================================
// PÉTALOS
// =====================================


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





// =====================================
// LUCIÉRNAGAS
// =====================================


const fireflies =
document.getElementById("fireflies");



for(let i=0;i<40;i++){


    let light =
    document.createElement("div");


    light.className="firefly";


    light.style.left =
    Math.random()*100+"%";


    light.style.top =
    Math.random()*100+"%";


    light.style.animationDelay =
    Math.random()*5+"s";


    fireflies.appendChild(light);

}




// =====================================
// BOTÓN A CARTA
// =====================================


document
.getElementById("continue")
.onclick=function(){


    document.body.style.transition =
    "2s";


    document.body.style.opacity="0";


    setTimeout(()=>{


        window.location.href =
        "03-carta.html";


    },2000);


};