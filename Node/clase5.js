const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingrese su nombnre: ");
console.log(`¡Hola ${nombre}!`);

/*1. Crear una función que convierta pulgadas en centímetros.
Recibe por parámetro pulgadas y retorna su equivalente en centímetros.
*/

/* let convertirPulgadasACentimetros = function(valor){  //EXPRESADA
    return valor * 2.54
}
*/

function convertirPulgadaACentimetro(valor) {
  //DECLARADA
  return valor * 2.54;
}

console.log(convertirPulgadaACentimetro(5));

/*2. Crear una función que recibe un string y lo convierte en una URL.
Ej: “pepito” es devuelto como “http://www.pepito.com”
*/

/* let convertirString = function(palabra){  //EXPRESADA
    return `http://www.${palabra}.com`

}
*/

function convertirString(palabra) {
  //DECLARADA
  return `http://www.${palabra}.com`;
}

console.log(convertirString(nombre));

/*3. Crear una función que recibe un string y devuelve la misma frase pero con
admiración.
*/

/* let convertirString = function(palabra){  //EXPRESADA
        return `${palabra}!`

}
*/

function convertirString(palabra) {
  //DECLARADA
  return `${palabra}!`;
}

console.log(convertirString(nombre));

/*4. Crear una función que calcule la edad de los perros, considerando que 1 año
para nosotros son 7 de ellos.
*/

/* 
let edad = prompt("Ingrese la edad de su perro: ");
let convertirEdadPerro = (edad) => edad * 7;      //ARROW
*/

let edad = prompt("Ingrese la edad de su perro: ");

function convertirEdadPerro(edad) {
  return edad * 7;
}

console.log(convertirEdadPerro(edad));

/*5. Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas.
*/

/*
let salarioMensual = prompt("Ingrese su salario mensual: ");
let calcularValorHora = (salarioMensual) => salarioMensual / 160;    //ARROW

*/

let salarioMensual = prompt("Ingrese su salario mensual: ");

function calcularValorHora(salarioMensual) {
  return salarioMensual / 160;
}

console.log(calcularValorHora(salarioMensual));

/*6. Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores.
*/

// IMC peso /altura^2

let peso = prompt("Ingrese su peso: ");
let altura = prompt("Ingrese su altura: ");

// let calcularImc = (peso, altura) => peso / Math.pow(altura, 2)  //ARROW

function calcularImc(peso, altura) {
  return peso / Math.pow(altura, 2);
  return;
}

console.log(calcularImc(peso, altura));

/*
7. Crear una función que recibe un string en minúscula, lo convierta a mayúsculas
y lo retorne.
Investigá qué hace el método de strings .toUpperCase()
*/

let minuscula = (palabra) => palabra.toUpperCase();
console.log(minuscula("mañana"));

/*
8. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese
parámetro.
Pista: te servirá revisar qué hace la palabra reservada typeof.
*/

let tipoDato = (dato) => typeof dato;
console.log(tipoDato("chau"));
console.log(tipoDato(23));
console.log(tipoDato(true));

/*
9. Crear una función que le pasamos el radio de un círculo y nos devuelve la
circunferencia.
Pista: Investigá si el objeto Math tiene entre sus propiedades el número Pi.
*/

let circunferencia = (radio) => radio * 2 * Math.PI;
console.log(circunferencia(25));
