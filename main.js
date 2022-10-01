function positivo(numero){
    if (numero > 0 && numero < 100){
        let resultado ="El número es positivo y menor que 100";
        return resultado;
    } else if (numero > 0 && numero > 100){
        let resultado = "El número es positivo y mayor que 100";
        return resultado;
    } else if (numero < 0){
        let resultado = "El número es negativo y menor que 100";
        return resultado;
    } else if(numero == 100){
        let resultado = "El número es 100";
        return resultado;
    }else {
        let resultado = "El número es 0";
        return resultado;
    }
    
} 
addEventListener("DOMContentLoaded", (e)=>{
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e)=>{
        e.preventDefault();
        let numero = document.querySelector("#numero").value;
        let resultado = positivo(numero);
        document.querySelector("#resultado").innerHTML = resultado;
    })
})


function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
}

addEventListener('reset', limpiar);