function calcular() {
    var numTxt = document.getElementById('num')
    var ateTxt = document.getElementById('ate')
    var res = document.getElementById('res')
    
    if (numTxt.value.length == 0) {
        res.innerHTML = "Impossível Contar! Insira um número"
    }else{
        let num = Number(numTxt.value)
        let ate = Number(ateTxt.value)
        if (ate == 0) {
            alert("Limite da tabuada não definido, a tabuada irá até o 10!")
            ate = 10
        }
        res.innerHTML = `A tabuada do ${num} é a seguinte \u{1F447} <br>`
        for (let i = 0; i <= ate; i++) {
            let resposta = num * i
            res.innerHTML += `${num} x ${i} = ${resposta} <br>`
        }
        res.innerHTML += `\u{1F604}`
    }
}