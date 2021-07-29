var renda = document.getElementById('renda')
var porcentagem = document.getElementById('investimento')
var valor = document.getElementById('valor')
var juros = document.getElementById('juros')
var corresponde = document.getElementById('corresponde')
var rendaformatado = 0
var jurosmensal = 0
porcentagem.value = "20"
var rendanumerica = 0
var tamanho = 0

function calcporcento(valor,porcentagem){
    let vvar = Number((valor*porcentagem/100).toFixed())
    return vvar
}


function valorrenda(){ // Insere o R$ e retorna o valor
    var convert = renda.value.replace('R$ ','').replace(',','.')
    renda.value = `R$ ${convert.replace('.',',')}`
    correspondente()
}

function correspondente(){
    valor.innerText = porcentagem.value
    rendaformatado = renda.value.replace('R$ ','').replace(',','.')
    rendanumerica = rendaformatado
    rendaformatado = calcporcento(rendaformatado,porcentagem.value)
    if (rendaformatado == 'NaN') {
        tamanho = rendanumerica.length
        renda.value = `R$ ${rendanumerica.replace(rendanumerica[tamanho-1],'')}`
    } else {
        corresponde.innerText = `R$ ${rendaformatado} - ${porcentagem.value}%`
    }
    return rendaformatado
}

function jurosc(){
    if (juros.value == ''){
        juros.value = 6
    }
    jurosnum = juros.value.replaceAll('%','')
    juros.value = jurosnum+'%'
    jurosmensal = Number(jurosnum/12)
}

function calcular(){
    if (renda.value == ''){
        alert('Você não informou a sua renda mensal!')
    } else {
        jurosc()
        let valormensal = correspondente()
        let fortuna = 0
        let meses = 0
        while((fortuna >= 1000000 && meses%12!=0) || fortuna <= 1000000){
            fortuna += calcporcento(fortuna,jurosmensal)
            fortuna += valormensal
            fortuna = Number.parseFloat(fortuna)
            meses++
        } 
        alert(`São necessarios ${meses/12} anos para se obter ${fortuna.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    }
}