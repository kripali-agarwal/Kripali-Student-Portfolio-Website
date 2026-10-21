add=document.querySelector("#Addition")
subtract=document.querySelector("#Subtraction")
multiply=document.querySelector("#Multiplication")
divide=document.querySelector("#Division")
exponent=document.querySelector("#Exponentiation")
quotient=document.querySelector("#Quotient")
remainder=document.querySelector("#Remainder")
out=document.querySelector("#Output")

function Addition() {
   let num1=parseFloat(document.querySelector("#number1").value)
   let num2=parseFloat(document.querySelector("#number2").value)
   return out.textContent=(num1 + num2)
}

function Subtraction() {
    let num1=parseFloat(document.querySelector("#number1").value)
    let num2=parseFloat(document.querySelector("#number2").value)
    return out.textContent=(num1 - num2)
}

function Multiplication() {
    let num1=parseFloat(document.querySelector("#number1").value)
    let num2=parseFloat(document.querySelector("#number2").value)
    return out.textContent=(num1*num2)
}

function Division() {
    let num1=parseFloat(document.querySelector("#number1").value)
    let num2=parseFloat(document.querySelector("#number2").value)
    return out.textContent=(num1/num2)
}

function Exponentiation() {
    let num1=parseFloat(document.querySelector("#number1").value)
    let num2=parseFloat(document.querySelector("#number2").value)
    return out.textContent=(num1**num2)
}

function Quotient() {
    let num1=parseFloat(document.querySelector("#number1").value)
    let num2=parseFloat(document.querySelector("#number2").value)
    return out.textContent=(Math.floor(num1/num2))
}

function Remainder() {
    let num1=parseFloat(document.querySelector("#number1").value)
    let num2=parseFloat(document.querySelector("#number2").value)
    return out.textContent=(num1%num2)
}

add.addEventListener("click", Addition)
subtract.addEventListener("click", Subtraction)
multiply.addEventListener("click", Multiplication)
divide.addEventListener("click", Division)
exponent.addEventListener("click", Exponentiation)
quotient.addEventListener("click", Quotient)
remainder.addEventListener("click", Remainder)