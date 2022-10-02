function comprobar(seleccionado){
    if (seleccionado == "Triangulo"){
        document.querySelector("#frmTriangulo").style.display = 'block';
    } else {
        document.querySelector("#frmCirculo").style.display = 'block';
    }
} 

let seleccionado;
addEventListener("DOMContentLoaded", (e) => {
    let opcion = document.querySelector("#opcion");
    opcion.addEventListener("change", (e) => {
        document.querySelector("#frmTriangulo").style.display = 'none';
        document.querySelector("#frmCirculo").style.display = 'none';
        seleccionado = opcion.value;
        comprobar(seleccionado);
    })
})

addEventListener("DOMContentLoaded", (e) => {
    let area = document.querySelector("#area");
    area.addEventListener("submit", (e) => {
        e.preventDefault();
        if(seleccionado == "Triangulo"){
            let base = document.querySelector("#base").value;
            let altura = document.querySelector("#altura").value;
            let area = (base * altura) / 2;
            document.querySelector("#resultado").innerHTML = area;
        } else if (seleccionado == "Circulo"){
            let radio = document.querySelector("#radio").value;
            let area = Math.PI * radio * radio;
            document.querySelector("#resultado").innerHTML = area;
        } else {
            alert("Debe seleccionar una figura")
        }
    })
})

/*function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#mayor").innerHTML="";
    document.querySelector("#menor").innerHTML="";
    document.querySelector("#iguales").innerHTML="";
}

addEventListener('reset', limpiar);*/