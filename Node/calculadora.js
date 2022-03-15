const prompt = require("prompt-sync")({ sigint: true });

//  Calculadora - Nivel I

let num1 = prompt("Ingrese un  número: ");
let num2 = prompt("Ingrese otro número: ");

function sumar(num1, num2) {
    return Number(num1) + Number(num2);
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    while (num2 != 0) {
        return num1 / num2;
    }
    console.log("No se puede dividir por cero");
}

// Calculadora - Nivel II

console.log('--------------Testeo de Operaciones / Calculadora--------------');

console.log('--------------/ SUMA /--------------');

console.log(sumar(num1, num2));

console.log('--------------/ RESTA /--------------');

console.log(restar(num1, num2));

console.log('--------------/ MULTIPLICACION /--------------');

console.log(multiplicar(num1, num2));

console.log('--------------/ DIVISION /--------------');

console.log(dividir(num1, num2));

// Calculadora - Nivel III - Funciones extras


console.log('--------------CUADRADO DE UN NUMERO--------------');

let num3 = prompt("Ingrese otro número: ");

function cuadradoDeUnNumero(num3) {
    return multiplicar(num3, num3);
}

console.log(cuadradoDeUnNumero(num3));

console.log('--------------PROMEDIO DE TRES NUMEROS--------------');

function promedioDeTresNumeros(num1, num2, num3) {
    return (sumar(Number(num1), Number(num2)) + Number(num3)) / 3;
}

console.log(promedioDeTresNumeros(num1, num2, num3));

console.log('--------------PORCENTAJE--------------');

let num4 = prompt("Ingrese un número: ");
let num5 = prompt("Ingrese el porcentaje: ");


function calcularPorcentaje(num4, num5) {
    return multiplicar(num4, num5) / 100;
}

console.log(calcularPorcentaje(num4, num5));

console.log('--------------GENERADOR DE PORCENTAJE--------------');

let num6 = prompt("Ingrese un número: ");
let num7 = prompt("Ingrese el porcentaje: ");

function GeneradorDePorcentaje(num6, num7) {
    return multiplicar(num6, 100) / num7;
}

console.log(GeneradorDePorcentaje(num6, num7));
