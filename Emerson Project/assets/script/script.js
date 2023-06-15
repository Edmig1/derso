var btn = document.getElementById('form')
btn.addEventListener('submit', function(event){
    event.preventDefault()
    let form = new FormData(btn)
    let capital = parseFloat(form.get('capital'))
    let tempo = parseFloat(form.get('tempo'))
    let taxa =parseFloat(form.get('taxa'))
    if( capital !== 0){
        function valorsimples(){
            var p = document.getElementById('p')
            p.style.color = 'white'
            var resultado = (capital*taxa)/100
            var juros = resultado*tempo
            p.innerHTML = ("O valor dos Juros a serem pagos é: "+ juros)
            return juros
        }
        valorsimples()
    }
    if (isNaN(capital) || isNaN(tempo) || isNaN(taxa)) {
        p.innerHTML = "Valores inválidos."
    }
})
var btnjurossimples = document.getElementById('btnjs')
btnjurossimples.addEventListener('click', function(){
    var divform = document.getElementById('divform')
    divform.style.display = 'flex'
    var main = document.getElementById('main')
    main.style.display = 'grid'
    var option = document.getElementById('option')
    option.style.display = 'flex'
    option.style.flexDirection = 'column'
    option.style.justifyContent = 'center'
    option.style.alignItems = 'center'
    var p = document.getElementById('p')
    p.innerHTML = ''
    main.style.gridTemplateColumns = '1fr 1fr'
})
var btnfechar = document.getElementById('btnfechar')
btnfechar.addEventListener('click', function(){
    var divform = document.getElementById('divform')
    var option = document.getElementById('option')
    option.style.display = 'flex'
    option.style.flexDirection = 'row'
    option.style.justifyContent = 'center'
    option.style.alignItems = 'flex-start'
    divform.style.display = 'none'
    if (divform.style.display = 'none') {
        main.style.gridTemplateColumns = "1fr"
    }
})
var btnjurossimples = document.getElementById('btnjc')
btnjurossimples.addEventListener('click', function(){
    var divform = document.getElementById('divform')
    divform.style.display = 'flex'
    var main = document.getElementById('main')
    main.style.display = 'grid'
    var option = document.getElementById('option')
    option.style.display = 'flex'
    option.style.flexDirection = 'column'
    option.style.justifyContent = 'center'
    option.style.alignItems = 'center'
    var p = document.getElementById('p')
    p.innerHTML = ''
    main.style.gridTemplateColumns = '1fr 1fr'
    if( capital !== 0){
        function valorsimples(){
            var p = document.getElementById('p')
            p.style.color = 'white'
            var resultado = (capital*taxa)/100
            var juros = resultado*tempo
            p.innerHTML = ("O valor dos Juros a serem pagos é: "+ juros)
            return juros
        }
        valorsimples()
    }
    if (isNaN(capital) || isNaN(tempo) || isNaN(taxa)) {
        p.innerHTML = "Valores inválidos."
    }
})