function Converter() {
    var valorElemento = document.getElementById("valor")
    var valor = valorElemento.value
    var valorEmDolarNumerico = parseFloat(valor)
    var valorEmReal = valorEmDolarNumerico * 5.13

    var elementoValorConvertido = document.getElementById("valorConvertido")
    console.log(elementoValorConvertido)
    var valorConvertido = "A conversão para reais é R$ " + valorEmReal.toFixed(2)
    elementoValorConvertido.innerHTML = valorConvertido


}


