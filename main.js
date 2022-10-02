function calc(seleccionado){
    let horas = document.querySelector("#horas").value;
    if (seleccionado == "Planta"){
        const sueldoBase = 20000;
        let sueldo = sueldoBase * horas;
        return sueldo;
    } else if (seleccionado == "Administrativo"){
        const sueldoBase = 10000;
        let sueldo = sueldoBase * horas;
        return sueldo;
    } else {
        document.querySelector("#resultado").innerHTML = "Debe seleccionar un tipo de empleado";
    }
}

addEventListener("DOMContentLoaded", (e) => {
    let opcion = document.querySelector("#opcion");
    opcion.addEventListener("change", (e) => {
        let seleccionado = opcion.value;
        let calcular = document.querySelector("#guia2");
        calcular.addEventListener("submit", (e) => {
            e.preventDefault();
            let sueldo = calc(seleccionado);
            document.querySelector("#resultado").innerHTML = "El sueldo es de <strong>$" + sueldo + " pesos</strong>";
        })
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
}

addEventListener('reset', limpiar);