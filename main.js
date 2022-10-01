function calc(numero1,numero2,numero3){
    if (numero1 > numero2 && numero1 > numero3){
        let resultado ="El número mayor es " + numero1;
        return resultado;
    } else if (numero2 > numero1 && numero2 > numero3){
        let resultado = "El número mayor es " + numero2;
        return resultado;
    } else if (numero3 > numero1 && numero3 > numero2){
        let resultado = "El número mayor es " + numero3;
        return resultado;
    } else {
        let resultado = "Los números ingresados son iguales";
        return resultado;
    }
    
} 
addEventListener("DOMContentLoaded", (e)=>{
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e)=>{
        e.preventDefault();
        let numero1 = document.querySelector("#numero1").value;
        let numero2 = document.querySelector("#numero2").value;
        let numero3 = document.querySelector("#numero3").value;
        let resultado = calc(numero1,numero2,numero3);
        document.querySelector("#resultado").innerHTML = resultado;
    })
})


function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
}

addEventListener('reset', limpiar);