let numeroSecreto =0;
let intentos =0;
let listaNumerosSorteados=[];
let numeroMaximo =10;
condicionesIniciales();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número a la ${intentos} ${(intentos === 1) ? 'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.querySelector('#intentar').setAttribute('disabled',true);
    } 
    else{
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else{
            asignarTextoElemento('p','El numero secreto es Mayor');
        }
        intentos ++;
        limpiarCaja();
    }
  return;
}
function limpiarCaja(){
    //let valorCaja=document.querySelector('#valorUsuario');
    //valorCaja.value='';
    document.querySelector('#valorUsuario').value='';

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sortiamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
            asignarTextoElemento('p','Ya se sortearon todos los números posibles');
            
        }else{


        //Revisar si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            
            return generarNumeroSecreto();
        }
        else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //genearar numero aleatorio
    //inicializar el numero intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    document.getElementById('intentar').removeAttribute('disabled');
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();  
}
