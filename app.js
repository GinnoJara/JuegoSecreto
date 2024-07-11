//Esto se hace de manera bruta
//let titulo = document.querySelector("h1");
//titulo.innerHTML = "Juego del número secreto";

//Esto se hace de manera bruta
//let parrafo = document.querySelector("p");
//parrafo.innerHTML = "Indica un número del 1 al 10";

let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroIntentos = 5;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
        if (numeroUsuario === numeroSecreto) {
            asignarTextoElemento("p", `¡Acertaste al número secreto! Y lo hiciste en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor, vuelve a intentarlo");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor, vuelve a intentarlo");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log("El numero secreto es " + numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroIntentos){
        asignarTextoElemento("p", "Ya jugaste la mayor cantidad de veces posibles")
    } else if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Indica un número del 1 al " + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
