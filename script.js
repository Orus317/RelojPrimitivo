let contenedorHora = document.getElementById("contenedor_hora")
let boton_Reloj = document.getElementById("boton_Reloj")
boton_Reloj.addEventListener("click", encenderReloj)
let horaCompleta=[]
let momentoActual 
let relojEncendido = false

function mostrarHora(){
    horaCompleta = []
    momentoActual = new Date
    horaCompleta.push( momentoActual.getHours() )
    horaCompleta.push( momentoActual.getMinutes() )
    horaCompleta.push( momentoActual.getSeconds() )
    agregarCeroIzquierda()
    contenedorHora.innerHTML = `La hora es ${horaCompleta[0]}:${horaCompleta[1]}:${horaCompleta[2]}<br>`
    if(relojEncendido == true){
        setTimeout("mostrarHora()",1000)
    } else {
        contenedorHora.innerHTML = ``
    }
}
function encenderReloj(){
    console.log("ejecutado")
    if( boton_Reloj.value == "Encender"){
        boton_Reloj.value = "Apagar"
        relojEncendido = true
    } else{
        boton_Reloj.value = "Encender"
        relojEncendido = false
    }
    mostrarHora()
}

function agregarCeroIzquierda(){
    let i = 0
    for(t of horaCompleta){
        if(t<10){
            t = "0"+t
            horaCompleta[i] = t
            i++
        } else{
            i++
        }
    }
}

