var estadoLicuadora ="apagada";
var licuadora = document.getElementById("blender");
var sonidosLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");

/* FUNCION DE APAGADO Y ENCENDIDO DE LA LICUADORA */
function controlarLicuadora() {
  if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
        /* console.log("me prendiste"); */
    } else {
        estadoLicuadora = "apagada";
        hacerBrrBrr();
        licuadora.classList.remove("active");
        /* console.log("me apagaste"); */
   }           
}

function hacerBrrBrr(){
    if(sonidosLicuadora.paused){
        botonLicuadora.play();
        sonidosLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidosLicuadora.pause();
        sonidosLicuadora.currentTime = 0;
    }
}