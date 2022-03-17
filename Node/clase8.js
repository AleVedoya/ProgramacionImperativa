console.log("--------------/ FUNCION POR PARAMETRO /--------------")


// 1) Crear una función que pida un valor por parámetro y muestre los 10
// números siguientes.


function mostrarNumeros(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(numero + i);
    }
}
mostrarNumeros(20);

console.log("--------------/ IMPRIMIR NUMEROS DEL 5 AL 20, DE 3 EN 3 /--------------")


// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.

function mostrarNumerosDe3(numero) {
    for (let i = 5; i <= 20; i+= 3) {
        console.log(i);
    }
}

console.log("--------------/ SUMATORIA DE NUMEROS DE 0 A 100 /--------------")


// 3) Escribir un programa que muestre la sumatoria de todos los números
// entre el 0 y el 100

let valor = 0;
function sumatoriaNumeros(numero) {
    for (let i = 0; i <= 100; i++) {
        valor += i;
    }
    return valor;
}

console.log(sumatoriaNumeros());

console.log("--------------/ FACTORIAL DE NUMEROS /--------------")

// 4) Dado un número entero positivo, mostrar su factorial. El factorial de
// un número se obtiene multiplicando todos los números enteros
// positivos que hay entre el 1 y ese número.

let otroValor = 1;
function factorial(numero) {
    for (let i = 1; i <= numero; i++) {
        otroValor *= i;
    }
    return otroValor;
}

console.log(factorial(10));

console.log("--------------/ SECUENCIA FIBONACCI /--------------")

// 5) Crear una función que muestre todos los números de la secuencia de
// fibonacci hasta el valor ingresado por parámetro.

function fibonacci(numero) {
    let num1 = 0;
    let num2 = 1;
    console.log(num1);
    console.log(num2);

        for (let fibo = 1; fibo <= numero; fibo++) {
        fibo = num1 + num2;
        num1 = num2;
        num2 = fibo;
            console.log(fibo);
            
    }
}
fibonacci(55);

