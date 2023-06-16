var btn = document.getElementById('form')
var tipo = document.getElementById('r1')
var valor = document.getElementById('valor')
var tipo2 = document.getElementById('r2')
r1.addEventListener('click', function(){
    if(tipo.value == 'simples'){
        var p = document.getElementById('p')
        p.innerHTML = 'Simples'
    }
})
r2.addEventListener('click', function(){
    if(tipo2.value == 'composto'){
        var p = document.getElementById('p')
        p.innerHTML = 'Composto'
    }
})

btn.addEventListener('submit', function(event){
    event.preventDefault()
    let form = new FormData(btn)
    let capital = parseFloat(form.get('capital'))
    let tempo = parseFloat(form.get('tempo'))
    let taxa = parseFloat(form.get('taxa'))
    if(tipo.checked == true){
        valor.innerHTML = 'O Valor total a ser pago é: '+ js(capital,taxa,tempo)[1] + ', E o juro é: '+ js(capital,taxa,tempo)[0]
        grafico(lista(capital,taxa,tempo,1))
    }else if (tipo2.checked == true) {
        valor.innerHTML = 'O Valor total a ser pago é: '+ jc(capital,taxa,tempo)[1] + ', E o juro é: '+ jc(capital,taxa,tempo)[0]
        grafico(lista(capital,taxa,tempo,2))
    }
})
function js(ca,ta,te){
    let resultado = ca*(ta/100)*te
    let total = resultado.toFixed(2)
    let montante = ca + resultado
    let tudo = [total,montante]
    return tudo
}
function jc(ca,ta,te){
    let resultado = (((ta/100)+1)**te)*ca
    let montante = resultado.toFixed(2)
    let total = (resultado - ca).toFixed(2)
    let tudo = [total,montante]
    return tudo   
}

function lista(ca,ta,te,conta){
    let lista = []
    if (conta == 1){
        for (var i = 0; i <= te; i++) {
            lista.push(js(ca,ta,i)[0])
        }
    }else if (conta == 2){
        for (var i = 0; i <= te; i++) {
            lista.push(jc(ca,ta,i)[0])
        }
    }
    return lista
}

function grafico(lista) {
    let itens = lista.length
    let porcentagem = []
    for (var i = 0; i < lista.length; i++) {
         result = (lista[i]*100) / lista.at(-1)
         porcentagem.push(result)
     } 
    let caixa = document.getElementById('grafic')
    caixa.innerHTML = ''
    for (var i = 0; i < itens; i++) {
        caixa.innerHTML += `
        <div class="coluna">
            <p>`+lista[i]+`</p>
        </div>
        `
    }
    for (var i = 0; i < itens; i++) {
        caixa.innerHTML += `
        <p> Mês `+i+`</p>
        `
    }
    caixa.style.gridTemplateColumns = 'repeat('+itens+',1fr)'
    let colunas = document.getElementsByClassName('coluna')
    let tamanho = porcentagem
    for (var i = 0; i < colunas.length; i++) {
        colunas[i].style.height = porcentagem[i]+'%'
    }
    console.log(colunas)

}