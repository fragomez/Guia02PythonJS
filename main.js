function calc(numero1,numero2,numero3){
    document.querySelector("#mayor").innerHTML="";
    document.querySelector("#menor").innerHTML="";
    document.querySelector("#iguales").innerHTML="";
    if (numero1 > numero2 && numero1 >= numero3){
        document.querySelector("#mayor").innerHTML = "El número mayor es " + numero1;
        if(numero2 > numero3){
            document.querySelector("#menor").innerHTML = "El número menor es " + numero3;
        } else {
            document.querySelector("#menor").innerHTML = "El número menor es " + numero2;
        }
    } else if (numero2 > numero1 && numero2 >= numero3){
        document.querySelector("#mayor").innerHTML = "El número mayor es " + numero2;
        if(numero1 > numero3){
            document.querySelector("#menor").innerHTML = "El número menor es " + numero1;
        } else{
            document.querySelector("#menor").innerHTML = "El número menor es " + numero3;
        }
    } else if (numero3 > numero1 && numero3 >= numero2){
        document.querySelector("#mayor").innerHTML = "El número mayor es " + numero3;
        if(numero1 > numero2){
            document.querySelector("#menor").innerHTML = "El número menor es " + numero2;
        } else {
            document.querySelector("#menor").innerHTML = "El número menor es " + numero1;
        }
    } else {
        document.querySelector("#iguales").innerHTML = "Los números ingresados son iguales";
    }
    
} 
addEventListener("DOMContentLoaded", (e)=>{
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e)=>{
        e.preventDefault();
        let numero1 = document.querySelector("#numero1").value;
        let numero2 = document.querySelector("#numero2").value;
        let numero3 = document.querySelector("#numero3").value;
        calc(numero1,numero2,numero3);
    })
})


function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#mayor").innerHTML="";
    document.querySelector("#menor").innerHTML="";
    document.querySelector("#iguales").innerHTML="";
}

addEventListener('reset', limpiar);