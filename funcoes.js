var renda = document.getElementById('renda')
var valor = document.getElementById('valor')
var juros = document.getElementById('juros')
var corresponde = document.getElementById('corresponde')
var porcentagem = document.getElementById('investimento')
var valormensal = 0, jurosmensal = 0
porcentagem.value = 20

function calcporcento(valor,porcentagem){
    let vvar = Number((valor*porcentagem/100).toFixed(2))
    return vvar
}

function vrenda(){ // Insere o R$ e retorna o valor
    rendanum = renda.value.replaceAll(',','.').replaceAll('R$ ','')
    renda.value = 'R$ '+rendanum.replaceAll('.',',')
    renda.value == 'R$ '?renda.value = '':console.log('renda informada!')
    correspondente()
}

function correspondente(){
    valor.innerText = porcentagem.value
    valormensal = calcporcento(rendanum,porcentagem.value)
    if (isNaN(valormensal)){
        alert('Você informou um valor incorreto! Tente novamente.')
        renda.value = ''
        valormensal = 0
    }
    corresponde.innerText = `R$ ${valormensal} - ${porcentagem.value}%`
}

function jurosc(){
    if (juros.value == ''){
        juros.value = 4.25
    }
    jurosnum = juros.value.replaceAll('%','').replace(',','.')
    juros.value = jurosnum.replace('.',',')+'%'
    jurosmensal = Number.parseFloat(jurosnum/12)
}

function calcular(){
    if (rendanum == ''){
        alert('Você não informou a sua renda mensal!')
    } else {
        jurosc()
        let fortuna = valormensal
        let meses = 1
        while((fortuna >= 1000000 && meses%12!=0) || fortuna <= 1000000){
            meses++
            console.log(`Mês ${meses} - R$ ${fortuna}`)
            fortuna += calcporcento(fortuna,jurosmensal)
            fortuna += valormensal
            fortuna = Number.parseFloat(fortuna.toFixed(2))
        } 
        alert(`São necessarios ${meses/12} anos para se obter ${fortuna.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
    }
}