// =====================================
// CARTA ROMÁNTICA 💌
// Nuestro Universo ❤️
// =====================================


const envelope =
document.getElementById("envelope");


const openButton =
document.getElementById("open");


const continueButton =
document.getElementById("continue");



const texto = `

Quiero que sepas que eres una persona muy especial para mí.

Gracias por cada sonrisa, cada momento y cada recuerdo que hemos creado juntos.

No sé qué nos depara el futuro, pero sí sé que cada instante contigo vale muchísimo.

Espero poder seguir creando momentos bonitos a tu lado.

Siempre tendrás un lugar muy especial en mi corazón. ❤️

`;



let index = 0;



// Abrir carta

openButton.onclick=function(){


    envelope.classList.add("open");


    openButton.style.display="none";


    setTimeout(()=>{


        escribirCarta();


    },1200);



};




// Máquina de escribir

function escribirCarta(){


    if(index < texto.length){


        document
        .getElementById("letterText")
        .innerHTML += texto[index];


        index++;


        setTimeout(
            escribirCarta,
            45
        );


    }else{


        continueButton.style.display="block";


    }


}




// Crear corazones

const hearts =
document.getElementById("hearts");



setInterval(()=>{


    let heart =
    document.createElement("div");


    heart.className="heart";


    heart.innerHTML="❤️";


    heart.style.left =
    Math.random()*100+"%";


    heart.style.animationDuration =
    (5+Math.random()*5)+"s";


    hearts.appendChild(heart);



    setTimeout(()=>{

        heart.remove();

    },9000);



},500);





// Continuar

continueButton.onclick=function(){


    document.body.style.transition="2s";

    document.body.style.opacity="0";



    setTimeout(()=>{


        window.location.href =
        "04-promesa.html";


    },2000);



};