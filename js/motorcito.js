var estadoLicuadora ="apagada";
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido";
        licuadora.classList.add("active");
        console.log("me prendiste");
    } else {
        estadoLicuadora = "apagada";
        licuadora.classList.remove("active");
        console.log("me apagaste");
   }           
}