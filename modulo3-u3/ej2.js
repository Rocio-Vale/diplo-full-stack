const cuadroDeTexto = document.getElementById("texto");
const cantCarac = document.getElementById("cantCaracteres")

let contador = 0;

cant = cuadroDeTexto.addEventListener("keyup", () => {
    if (cuadroDeTexto.value != "") {
        contador += 1;        
    }else {
        contador = 0;
    }
    cantCarac.innerText = contador;
})