const prompt = require("prompt-sync")({ sigint: true });

/*********** Colecciones de películas (y más…) ***********/

/*1. Crear la estructura adecuada para guardar las siguientes películas:
"star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"
Importante: verificá que todo funciona correctamente accediendo a alguna de
las películas una vez creada la estructura correspondiente.*/

let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];

// console.log(peliculas);

/*2. Más tarde, de producción dieron el aviso de que las películas deberían estar todas
en mayúsculas. Para esto solicitan que crees una función que reciba por
parámetro un array y convierta el contenido de cada elemento a mayúsculas.
Pista: revisá qué hace el método de strings .toUpperCase().*/

function mayusculas() {
  for (i = 0; i < peliculas.length; i++) {
    peliculas[i] = peliculas[i].toUpperCase();
  }
  //   console.log(peliculas);
}
mayusculas();

/*3. Mientras trabajabas en el feature anterior, se dio el aviso de que también hay que
crear otra estructura similar a la primera, pero con las siguientes películas
animadas:
"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
Por lo tanto, te piden crear una función que reciba dos arrays como parámetros,
para poder agregar los elementos contenidos en el segundo array dentro del
primero, y así retornar un solo array con todas las películas como sus elementos.
Importante: las películas animadas también deberían convertirse a mayúsculas.*/
let peliculas2 = [
  "toy story",
  "finding Nemo",
  "kung-fu panda",
  "wally",
  "fortnite",
];
function nuevaLista() {
  for (i = 0; i < peliculas2.length; i++) {
    peliculas.push(peliculas2[i]);
  }
  mayusculas(peliculas2);
  console.log(peliculas);
}
nuevaLista(peliculas, peliculas2);



/*4. Durante el proceso, uno de los desarrolladores advierte que el último elemento del
array de películas animadas es un videojuego. Ahora tenés que editar el código y
modificarlo de manera que puedas eliminar ese último elemento antes de migrar el
contenido al array que contenga todas las películas.
PD: por precaución, guardá el elemento que vas a eliminar en una variable.*/

// let peliculas2 = [
//   "toy story",
//   "finding Nemo",
//   "kung-fu panda",
//   "wally",
//   "fortnite",
// ];

function nuevaLista() {
  for (i = 0; i < peliculas2.length; i++) {
    peliculas.push(peliculas2[i]);
  }
  let ultElem = peliculas.pop();

  mayusculas(peliculas2);
  console.log(peliculas);
}
nuevaLista(peliculas, peliculas2);

/*5. Finalmente, te envían dos arrays con calificaciones que hacen distintos usuarios
del mundo sobre las películas con el siguiente formato:
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Te piden crear una función que compare las calificaciones e indique si son iguales
o diferentes. Te confirman que están en el orden adecuado y que solo traen
valores numéricos del 1 al 10.
PD: los elementos de los scores tanto de Asia como de Europa corresponden en
orden al del array resultante de combinar películas con películas animadas. Es
decir, el primer elemento del array de películas general corresponde al primer
elemento de asiaScores y al primer elemento de euroScores, y así sucesivamente.*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones() {
  for (i = 0; i < asiaScores.length; i++) {
    asiaScores[i] == euroScores[i]
      ? console.log("Las calificaciones son iguales")
      : console.log("Las calificaciones son diferentes");
  }
}
compararCalificaciones();

/*********** Extra bonus ***********/

/*********** Array inverso ***********/

/*En este ejercicio deberás crear una función que devuelva un array con sus elementos
invertidos, sin modificarlo. Luego, deberás hacer una función que lo modifique e invierta
el orden de sus elementos.*/

const miArray = [8, 10, 6, 3, 10, 4, 7, 9, 5];

console.log(miArray);

const invertido = miArray.reverse();

console.log(invertido);

let otroArray = [];
let sizeArray = miArray.length;
function arrayInvertido() {
  for (i = 0; i < sizeArray; i++) {
    let elem = miArray.pop();
    otroArray.push(elem);
  }
  console.log(otroArray);
}
arrayInvertido();

/*1. Creá la función imprimirInverso que tome un array como argumento y que
imprima en la consola cada elemento en orden inverso (no tenés que invertir el
array).*/

const arr = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
let ultimo = arr.length - 1;

function imprimirReverso() {
  for (i = ultimo; i >= 0; i--) {
    console.log(arr[i]);
  }
}
imprimirReverso();

/*2. Creá la función inversor que tome un array como argumento y devuelva uno
nuevo invertido.*/

/*********** sumaArray() ***********/

/*En este ejercicio, deberás crear una función sumaArray() que acepte un arreglo de
números (3 elementos) y devuelva la suma de todos ellos. Ejemplo:
● sumArray([1,2,3]) // 6
● sumArray([10, 3, 10]) // 23
● sumArray([-5,100, 19]) // 114*/

let arrDeTres = [];

function sumaArray(arrDeTres) {
  let suma = 0;
  for (i = 0; i < arrDeTres.length; i++) {
    suma = suma + arrDeTres[i];
  }
  console.log(suma);
}
sumaArray([10, 2, 23]);

/* Otra forma corta

function sumArray(arrNum) {
return arrNum[0] + arrNum[1] + arrNum[2]
}
console.log(sumArray([-5,100,19]));

*/
/*********** Simulación Array.join() ***********/

/*En este ejercicio deberás crear una función llamada join() que reciba un arreglo de
strings de 4 elementos y simule el comportamiento del método Array.join().
Importante: no podés usar el método Array.join() original.
Ejemplo:
● join(["h","o","l","a"]) debe retornar el string "hola".
● join(["c","h","a,"u"]) debe retornar el string "chau".*/

let hola = ["h", "o", "l", "a"];

function join() {
  palabra = hola[0] + hola[1] + hola[2] + hola[3];
  console.log(palabra);
}
join();

