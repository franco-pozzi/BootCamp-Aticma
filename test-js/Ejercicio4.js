const IngresoArray = [2, 1, 10, 5, 42, 13]

const nuevoArray = IngresoArray.sort(function (a, b) {
    return a - b;
})

alert(nuevoArray)


// Ejercicio Numero 5

const var1 =  [1, 2, 4, 6, 7, 8]
const var2 =  [1, 2, 4, 5, 6, 7, 8]

const varUnion = [...var1, ...var2]

const sortVarUnion= varUnion.sort(function (a, b) {
    return a - b;
})

alert(sortVarUnion)

