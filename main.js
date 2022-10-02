function calc(temperatura,presion){
    let alerta = temperatura * temperatura;
    return alerta;
} 

addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        document.querySelector("#alarma").style.display = 'none';
        document.querySelector("#resultado").innerHTML="";
        document.querySelector("#alarma").innerHTML="";
        let temperatura = document.querySelector("#temperatura").value;
        let presion = document.querySelector("#presion").value;
        if(temperatura > 100){
            document.querySelector("#alarma").style.display = 'block';
            document.querySelector("#alarma").innerHTML="ALARMA: TEMPERATURA MUY ALTA";
        } else if(presion > 200){
            document.querySelector("#alarma").style.display = 'block';
            document.querySelector("#alarma").innerHTML="ALARMA: TEMPERATURA MUY ALTA";
        } else {
            document.querySelector("#resultado").innerHTML = "NORMAL";
        }
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
    document.querySelector("#alarma").style.display = 'none';
}

addEventListener('reset', limpiar);