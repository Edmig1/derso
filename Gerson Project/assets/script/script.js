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
         form = new FormData(btn)
         capital = parseFloat(form.get('capital'))
         tempo = parseFloat(form.get('tempo'))
         taxa =parseFloat(form.get('taxa'))
         if(tipo.checked == true){
            js()
         }

    })
    btn.addEventListener('submit', function(event){
        event.preventDefault()
         form = new FormData(btn)
         capital = parseFloat(form.get('capital'))
         tempo = parseFloat(form.get('tempo'))
         taxa =parseFloat(form.get('taxa'))
         if(tipo2.checked == true){
            jc()
         }
})
function js(){
    let resultado = capital*(taxa/100)*tempo
    console.log(resultado)
    r = resultado.toFixed(2)
    rc = (resultado + capital).toFixed(2)
    valor.innerHTML = 'O Valor total a ser pago é: '+ rc + ', E o juro é: '+ r
    return resultado
    
}
function jc(){
    let resultado = (((taxa/100)+1)**tempo)*capital
    console.log(resultado)
    r = resultado.toFixed(2)
    rc = (resultado- capital).toFixed(2)
    valor.innerHTML = 'O Valor total a ser pago é: '+ r + ', E o juro é: '+ rc
    return resultado
    
}

