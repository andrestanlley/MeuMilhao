var renda = document.getElementById('renda')
var porcentagem = document.getElementById('investimento')
porcentagem.value = "20"
var valor = document.getElementById('valor')
valor.innerText = porcentagem.value
var juros = document.getElementById('juros')
var backuprenda = 0



function valorrenda(){ // Insere o R$ e retorna o valor
    var convert = renda.value.replace('R$ ','').replace(',','.')
    renda.value = `R$ ${convert.replace('.',',')}`
    porcentagem2()
}

function porcentagem2(){
    valor.innerText = porcentagem.value
    var corresponde = document.getElementById('corresponde')
    var rendaformatado = renda.value.replace('R$ ','').replace(',','.')
    backuprenda = rendaformatado
    rendaformatado = Number(rendaformatado*porcentagem.value/100).toFixed()
    if (rendaformatado == 'NaN') {
        var tamanho = backuprenda.length
        renda.value = `R$ ${backuprenda.replace(backuprenda[tamanho-1],'')}`
    } else {
        corresponde.innerText = `R$ ${rendaformatado} - ${porcentagem.value}%`
    }
}

function calcular(){
    var fortuna = 0
    var meses = 0
    juros = (juros.value/12).toFixed(1)
    var valormensal = backuprenda*porcentagem.value/100
    while((fortuna >= 1000000 && meses%12!=0) || fortuna <= 1000000){
        fortuna += fortuna*juros/100
        fortuna += valormensal
        fortuna = Number.parseFloat(fortuna)
        meses ++
        console.log(`Mês ${meses} - R$ ${fortuna}`)
    } 
    alert(`São necessarios ${meses/12} anos para se obter ${fortuna.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}`)
}