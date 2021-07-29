function calcporcento(valor,porcentagem){
    let vvar = Number((valor*porcentagem/100).toFixed())
    return vvar
}

console.log(calcporcento(1000,25))