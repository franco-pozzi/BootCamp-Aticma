const ArrayVacio = []

const IngresoN = prompt('Ingresar cantidad de numeros')

for (let i = 0; i < IngresoN; i++){
    ArrayVacio.push(Math.floor(Math.random() * 100))    
}

console.log(ArrayVacio)

