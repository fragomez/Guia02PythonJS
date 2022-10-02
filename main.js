function calc(factura){
    const desc15 = 0.15;
    let subtotal = factura * desc15;
    let total = factura - subtotal;
    return total;
} 

addEventListener("DOMContentLoaded", (e) => {
    let calcular = document.querySelector("#guia2");
    calcular.addEventListener("submit", (e) => {
        e.preventDefault();
        let factura = document.querySelector("#factura").value;
        if(factura > 130000){
            let total = factura - (factura * 0.15);
            document.querySelector("#resultado").innerHTML = "TOTAL A PAGAR: $" + total + " pesos (descuento del 15% aplicado)";
        } else {
            document.querySelector("#resultado").innerHTML = "TOTAL A PAGAR: $" + factura + " pesos";
        }
    })
})

function limpiar(){
    document.querySelector("#guia2").reset();
    document.querySelector("#resultado").innerHTML="";
}

addEventListener('reset', limpiar);