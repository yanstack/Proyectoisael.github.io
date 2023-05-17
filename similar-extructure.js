
//break de la mañana 
const playM = document.querySelector('.iniciarM');
let resetM= document.querySelector('.resetM');
let relojAM;
let relojDM;
let sonidoM;
function startTimer(duration, display) {
  let timer = duration;
  let minutes, seconds;
  relojAM = setInterval(function() {
    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? seconds : seconds;
    displayM.value = minutes + ":" + seconds;

    if (--timer <=0) {
      clearInterval(relojAM)
      console.log(timer)
      let texto="Your break is over!"
      let alarmaM=new SpeechSynthesisUtterance(texto);
      alarmaM.lang="en-US"
      window.speechSynthesis.speak(alarmaM);
      displayM.style.color="white";
      displayM.style.backgroundColor="red"
      timer = 0;
       sonidoM=document.querySelector("audio");
      sonidoM.loop=true;
      sonidoM.play();
      
      if (timer == 0) {
        relojAM = setInterval(() => {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
          minutes = minutes < 10 ? minutes : minutes;
          seconds = seconds < 10 ? seconds : seconds;
          displayM.value = minutes + ":" + seconds;
          timer++;
          if(timer==5 || timer ==10 || timer==15 || timer ==20){
            let texto2 = "It's time to work!"
            let alarmaM2 = new SpeechSynthesisUtterance(texto2);
            alarmaM2.lang = "en-US"
            window.speechSynthesis.speak(alarmaM2);
          }
        }, 1000)

      }
    }


  }, 1000);


}
let durationM;
let sedM = 60;
let minM = 15;
let displayM;
playM.addEventListener("click", function() {

  durationM = sedM * minM; // 15 minutos en segundos
  displayM = document.querySelector('.breakM');
  startTimer(durationM, displayM);
});


resetM.addEventListener("click", function() {


displayM.value ="THE END";
durationM = "";
  
  clearInterval(relojAM);
  clearInterval(relojDM)
  sonidoM.pause();
  displayM.style.color="black";
  displayM.style.backgroundColor="white";
  
})



//break de  almuerzo



const playL = document.querySelector('.iniciarL');
let resetL= document.querySelector('.resetL');
let relojAL;
let relojDL;
let sonidoL;
function startTimerL(duration, display) {
  let timer = duration;
  let minutes, seconds;
  relojAL = setInterval(function() {
    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? seconds : seconds;
    displayL.value = minutes + ":" + seconds;

    if (--timer <=0) {
      clearInterval(relojAL)
      let texto="Your break is over!"
      let alarmaL=new SpeechSynthesisUtterance(texto);
      alarmaL.lang="en-US"
      window.speechSynthesis.speak(alarmaL);
      displayL.style.color="white";
      displayL.style.backgroundColor="red"
      timer = 0;
       sonidoL=document.querySelector("audio");
 sonidoL.loop=true;
      sonidoL.play();
      
      
      if (timer == 0) {
        relojAL = setInterval(() => {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
          minutes = minutes < 10 ? minutes : minutes;
          seconds = seconds < 10 ? seconds : seconds;
          displayL.value = minutes + ":" + seconds;
          timer++;
          if(timer==5 || timer ==10 || timer==15 || timer ==20){
            let texto2 = "It's time to work!"
            let alarmaL2 = new SpeechSynthesisUtterance(texto2);
            alarmaL2.lang = "en-US"
            window.speechSynthesis.speak(alarmaL2);
          }
        }, 1000)

      }
    }


  }, 1000);


}
let durationL;
let sedL = 60;
let minL = 30;
let displayL;
playL.addEventListener("click", function() {

  durationL = sedL * minL; // 15 minutos en segundos
  displayL = document.querySelector('.lunch');
  startTimerL(durationL, displayL);
});

resetL.addEventListener("click", function() {


displayL.value ="THE END";
durationL= "";
  
  clearInterval(relojAL);
  clearInterval(relojDL)
  sonidoL.pause();
  displayL.style.color="black";
  displayL.style.backgroundColor="white"
  
  
})




// break de la tarde


const playT= document.querySelector('.iniciarT');
let resetT= document.querySelector('.resetT');
let relojAT;
let relojDT;
let sonidoT;
function startTimerT(duration, display) {
  let timer = duration;
  let minutes, seconds;
  relojAT= setInterval(function() {
    minutes = parseInt(timer / 60);
    seconds = parseInt(timer % 60);

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? seconds : seconds;
    displayT.value = minutes + ":" + seconds;

    if (--timer <=0) {
      clearInterval(relojAT)
      console.log(timer)
      let texto="Your break is over!"
      let alarmaT=new SpeechSynthesisUtterance(texto);
      alarmaT.lang="en-US"
      window.speechSynthesis.speak(alarmaT);
      displayT.style.color="white";
      displayT.style.backgroundColor="red"
      timer = 0;
       sonidoT=document.querySelector("audio");
  sonidoT.loop=true;
      sonidoT.play();
      
      if (timer == 0) {
        relojAT = setInterval(() => {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
          minutes = minutes < 10 ? minutes : minutes;
          seconds = seconds < 10 ? seconds : seconds;
          displayT.value = minutes + ":" + seconds;
          timer++;
          if(timer==5 || timer ==10 || timer==15 || timer ==20){
            let texto2 = "It's time to work!"
            let alarmaT2 = new SpeechSynthesisUtterance(texto2);
            alarmaT2.lang = "en-US"
            window.speechSynthesis.speak(alarmaT2);
          }
        }, 1000)

      }
    }


  }, 1000);


}
let durationT;
let sedT = 60;
let minT = 15;
let displayT;
playT.addEventListener("click", function() {

  durationT = sedT * minT; // 15 minutos en segundos
  displayT = document.querySelector('.breakT');
  startTimerT(durationT, displayT);
});



resetT.addEventListener("click", function() {


displayT.value ="THE END";
durationT = "";
  
  clearInterval(relojAT);
  clearInterval(relojDT)
  sonidoT.pause();
  displayT.style.color="black";
  displayT.style.backgroundColor="white"
  
})



/*
playM.addEventListener("click",(e)=>{
  e.preventDefault();
setInterval(function () {
    console.log("hola");
  }, 1000)
});
function playma(){
  
setInterval(function () {
    console.log("hola");
  }, 1000)
}
/*function empleado(){
  this.salario=0;
  this.sueldo=function (salario){
    this.salario=salario;
    console.log("tu salario es "+this.salario)
  }
  
}
function horas(){
  return [35,45,65,78,98]
}
empleado.prototype.hora=horas;

const h=new empleado()
h.sueldo(35000)


console.log(h.hora()[3]);



// Definimos los parámetros de la estrategia
const precioActual =28877 ; // Cambiar según el precio actual del Bitcoin
const precioPromedioMovilCortoPlazo = 29231.4; // Cambiar según el precio promedio móvil a corto plazo actual
const porcentajeUmbralCompra = 2; // Cambiar según el porcentaje de umbral para comprar

// Definimos una función que nos diga si debemos comprar o no
function decidirCompra(precioActual, precioPromedioMovilCortoPlazo, porcentajeUmbralCompra) {
  const umbralCompra = precioPromedioMovilCortoPlazo * (1 - porcentajeUmbralCompra / 100);
  if (precioActual < umbralCompra) {
    return true;
  } else {
    return false;
  }
}

// Ejecutamos la función para tomar la decisión de compra
if (decidirCompra(precioActual, precioPromedioMovilCortoPlazo, porcentajeUmbralCompra)) {
  console.log("Comprar Bitcoin ahora");
} else {
  console.log("Esperar a que baje el precio del Bitcoin");
}

// Para calcular el promedio móvil de los precios del Bitcoin en los últimos 5 días
const precios = [28877,29252,29235,29318,29475];
const diasPromedioMovil = 5;
const preciosUltimosDias = precios.slice(-diasPromedioMovil);
const promedioMovil = preciosUltimosDias.reduce((a, b) => a + b, 0) / preciosUltimosDias.length;
console.log("El precio promedio móvil de los últimos 5 días es: ", promedioMovil);





/*

compañias  1 al 5 %
criptomonedas 0.5al 2%
ETFs de 1 al 3% 
*/