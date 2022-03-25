const prompt = require("prompt-sync")({ sigint: true });

/*
1) Escribí un programa que le pida al usuario ingresar una frase y
la imprima en la consola.
Recordá que para pedirle al usuario que escriba una frase
debés utilizar el método prompt() y para escribir en la consola
debés utilizar el método console.log().
*/

let frase = prompt("Escribir una frase: ");

console.log(frase);

/*
2) Escribí un programa que le pregunte al usuario su nombre e
imprima "Hola " seguido del nombre y un signo de
exclamación.
Por ejemplo, si el usuario ingresa "Pedro" el programa debe
imprimir en la consola "Hola Pedro!".
*/

let nombre = prompt("¿Cómo es tu nombre? ");

console.log(`Hola ${nombre}!`);

/*
3) Escribí un programa que le pida al usuario ingresar un número,
luego le pida un segundo número, e imprima en la consola la
suma de los dos números que ingresó el usuario.
*/

let num1 = Number(prompt("Ingresá un número: "));
let num2 = Number(prompt("Ingresá otro número: "));

suma = num1 + num2;

console.log(`${num1} + ${num2} = ${suma}`);

/*
4) Escribí un programa que le pida al usuario su año de
nacimiento e imprima su edad actual en la consola con la frase
"Tienes X años" (siendo X la cantidad de años).
Por ejemplo, asumiendo que el año actual es 2019 y el usuario
ingresa 1999, el programa debe imprimir en la consola: “Tienes
20 años”.
*/

let anioNacimiento = prompt("Cuál es tu año de nacimiento?: ");
let anioActual = 2022;
let edad = anioActual - anioNacimiento;

console.log(`Tienes ${edad} años.`);

/*
5) Escribí un programa que piense un número de forma aleatoria
del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el
número es correcto debe imprimir en la consola "Felicitaciones,
ese era!", de lo contrario, debe imprimir "Lo siento, intenta
nuevamente!"
*/

// Math.floor devuelve el máximo entero menor o igual a un número
// Math.random() devuelve un numero al azar entre 0 y 1 pero sin incluir este último
// Multiplicamos * 10 y despues le sumamos 1 para que nos de un numero del 1 al 10

let numElegido = prompt("Adivina que numero estoy pensando, del 1 al 10?: ")
let numAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinarNumero() {
    if (numAleatorio === numElegido) {
        console.log("Felicitaciones,ese era!")
    } else {
        console.log("Lo siento, intenta nuevamente!")
    }
}
adivinarNumero();

/*
6) Escribí un programa que imprima los números pares del 0 al
100.
*/

function numPares() {
  let pares;
  for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      pares = i;
      console.log(pares);
    }
  }
}
numPares();

/*
7) Escribí un programa que itere sobre el arreglo nombres e
imprima cada uno en la consola: const nombres = ["Pedro",
"Pablo", "Maria", "Juan", "Diana"];
*/

const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
function imprimirArreglo() {
    for (i = 0; i < nombres.length; i++) {
        console.log(nombres[i]);
    }
}
imprimirArreglo();

/*
8) Construí un pseudocódigo que permita ingresar un número, si
el número es mayor de 500, se debe calcular y mostrar en
pantalla el 18% de este.
*/

let num3 = prompt("Ingrese un número: ");
function calcularPorcentaje() {
  if (num3 > 500) {
      let porcentaje = num3 * 0.18;
      console.log(porcentaje);
  }
}
calcularPorcentaje();

/*
9) Escribí una función llamada elemento que recibe un arreglo
como parámetro. La función debe devolver el valor que se
encuentra en la tercera posición. Si el arreglo no tiene al menos
3 elementos deberá retornar -1.
*/

let arreglo = [2, 5, 8];
function elemento() {
  if (arreglo.length < 3) {
    console.log(-1);
  } else {
    console.log(arreglo[2]);
  }
}
elemento();

/*
10) Se ingresa por teclado un número natural de hasta 2 cifras, si
tiene una cifra que muestre lo mínimo que le falta para ser un
número de 2 cifras; de lo contrario, que muestre lo mínimo que
le falta para ser un número de 3 cifras. Considerar que el
usuario ingresa números de hasta dos cifras.
*/

let numNat = prompt("Ingrese un numero natural de hasta 2 cifras: ");
function faltanCifras() {
  if (numNat < 10) {
    console.log("Al numero le falta una cifra para ser de 2 cifras");
  } else if (numNat < 100) {
    console.log("Al numero le falta una cifra para ser de 3 cifras");
  } else {
      console.log("Debe ingresar un número de 2 cifras solamente");
  }
}
faltanCifras();

/*
11) Hacer un algoritmo que muestre el promedio de varias
notas o de N notas ingresadas, se debe definir el valor de N
para conocer la cantidad de notas a ingresar.
*/

function promedio() {
  let CantNotas = 5;
  let sumNotas = 0;
  for (i = 1; i <= CantNotas; i++) {
    let nota = Number(prompt("Ingrese la nota: "));
    sumNotas += nota;
  }
  console.log("El promedio de tus notas es: " + sumNotas / CantNotas);
}
promedio();

/*
12) Hacer un programa que calcule la suma de los N primeros
números naturales, dónde N es el número límite ingresado por
teclado.
*/

let n = Number(prompt("Ingrese un número naural: "))
function sumatoriaNaturales() {
    let sumar = 0;
    for (let i = 1; i <= n; i++) {
        sumar += i;
    }
    console.log(sumar);
}
sumatoriaNaturales();