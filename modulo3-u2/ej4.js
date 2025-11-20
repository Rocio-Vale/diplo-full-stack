const numeros = [12, 99, 45, 3, 87];
let mayor = numeros[0];

for(let i=0; i<numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros[i];
    }
}

console.log(`El número mayor es: ${mayor}`);