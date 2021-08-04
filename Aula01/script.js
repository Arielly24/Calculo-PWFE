const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const somar = document.getElementById("somar")
const subtrair = document.getElementById("subtrair")
const multiplicar = document.getElementById("multiplicar")
const dividir = document.getElementById("dividir")
const formulario = document.getElementById("formulario")


function soma() {
    resultado.value = parseInt(numero1.value) + parseInt(numero2.value)
    formulario.classList.add("red")    
}

somar.addEventListener("click", soma)


function subtrai(){
    resultado.value = parseInt(numero1.value) - parseInt(numero2.value) 
    formulario.classList.add("blue")
}

subtrair.addEventListener("click", subtrai)

function multiplica() {
    resultado.value = parseInt(numero1.value) * parseInt(numero2.value) 
    formulario.classList.add("green") 
}

multiplicar.addEventListener("click", multiplica)

function divide() {
    resultado.value = parseInt(numero1.value) / parseInt(numero2.value)
    formulario.classList.add("yellow")
}

dividir.addEventListener("click", divide)