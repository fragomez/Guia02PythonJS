/*let pares = 0, impares = 0;
function calc(numero1,numero2,numero3,numero4){
    if(numero1 % 2 !=0){
        impares = parseInt(numero1) - impares;
    } else {
        pares += parseInt(numero1);
    }
    if(numero2 % 2 !=0){
        impares = parseInt(numero2) - impares;
    } else {
        pares += parseInt(numero2);
    }
    if(numero3 % 2 !=0){
        impares = parseInt(numero3) - impares;
    } else {
        pares += parseInt(numero3);
    }
    if(numero4 % 2 !=0){
        impares = parseInt(numero4) - impares;
    } else {
        pares += parseInt(numero4);
    }
}

addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let numero1 = document.querySelector("#numero1").value;
        let numero2 = document.querySelector("#numero2").value;
        let numero3 = document.querySelector("#numero3").value;
        let numero4 = document.querySelector("#numero4").value;
        calc(numero1,numero2,numero3,numero4);
        document.querySelector("#resultado").innerHTML = `La suma de los pares es: ${pares}`;
        document.querySelector("#impares").innerHTML = `La resta de los impares es: ${impares}`;
    })
})

*/

addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let nota1 = document.querySelector("#nota1").value;
        let nota2 = document.querySelector("#nota2").value;
        let nota3 = document.querySelector("#nota3").value;
        let nota4 = document.querySelector("#nota4").value;
        let nota5 = document.querySelector("#nota5").value;
        let promedio = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4) + parseInt(nota5)) / 5;
        document.querySelector("#resultado").innerHTML = `Nota promedio: ${promedio}`;
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
    document.querySelector("#subtotal").innerHTML="";
    document.querySelector("#iva").innerHTML="";
}

addEventListener('reset', limpiar);