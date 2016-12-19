var numero1, numero2, resultado;
numero1 = prompt("Por favor ingresa un numero");
numero2 = prompt("Por favor ingresa otro numero");
resultado = parseInt(numero1) + parseInt(numero2);
alert (resultado);




/*
 * Complete the function below.
 */
function promedio(num1, num2, num3) {
    var suma = num1 + num2 +num3;
    var promedio = suma/3;
    return promedio;

}

function sueldoSemanal(horas, pago) {
    return horas * pago;
    
    


}

/*
 * Complete the function below.
 */
function costoLlamada(tiempo, costoMinuto) {
return tiempo * costoMinuto;

}


