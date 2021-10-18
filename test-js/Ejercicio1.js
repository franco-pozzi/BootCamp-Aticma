function CantidadMayusculas(promp) {
    let contador = 0

    let prompArray = promp.split('')

    prompArray.map(letra =>
        letra === letra.toUpperCase() && ++contador
    )

    alert('La cantidad de mayusculas es ' + contador)
}