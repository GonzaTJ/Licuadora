var estadoLicuadora ="apagada"

function controlarLicuadora() {
  if (estadoLicuadora == "apagada"){
        estadoLicuadora = "encendido"
        console.log("me prendiste")
    } else {
        estadoLicuadora = "apagada"
        console.log("me apagaste")
   }           
}