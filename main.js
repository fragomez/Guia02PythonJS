function calc(lado1,lado2){
    let area = lado1 * lado2;
    return area;
} 

addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let lado1 = document.querySelector("#lado1").value;
        let lado2 = document.querySelector("#lado2").value;
        if(lado1 < 0 || lado2 < 0){
            alert("Los lados deben ser positivos");
            
        } else {
            let resultado = calc(lado1,lado2)
            document.querySelector("#resultado").innerHTML = resultado;
        }
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#mayor").innerHTML="";
    document.querySelector("#menor").innerHTML="";
    document.querySelector("#iguales").innerHTML="";
}

addEventListener('reset', limpiar);