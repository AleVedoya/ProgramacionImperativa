const prompt = require("prompt-sync")({ sigint: true });

// ********  Control de edad para ingresar al bar  ********

let edad = 19; //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

if (edad % 2 != 0) {
  console.log("¿Sabías que tu edad es impar?");
}

if (edad < 0) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
  console.log("No puede pasar al bar.");
} else if (edad < 21) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol.");
} else {
  console.log(
    "Bienvenido, felicidades por haber llegado a la mayoría de edad."
  );
  console.log("Puede pasar al bar y tomar alcohol.");
}

// ********  totalAPagar()  ********

let vehiculo = "moto";
let litrosConsumidos = Number;

function totalAPagar(vehiculo, litrosConsumidos) {
  switch (vehiculo) {
    case "coche":
      litrosConsumidos = 86;
      break;
    case "moto":
      litrosConsumidos = 70;
      break;
    default:
      litrosConsumidos = 55;
  }

  if (0 < litrosConsumidos && litrosConsumidos < 25) {
    return (litrosConsumidos = litrosConsumidos + 50);
  } else {
    return (litrosConsumidos = litrosConsumidos + 25);
  }
}

console.log(totalAPagar(vehiculo, litrosConsumidos));

// ********  Local de sándwiches  ********

let base = prompt("Ingrese la base: ");
let pan = prompt("Ingrese el pan: ");
let queso = prompt("Quiere queso (S/N): ");
let tomate = prompt("Quiere tomate (S/N): ");
let lechuga = prompt("Quiere lechuga (S/N): ");
let cebolla = prompt("Quiere cebolla (S/N): ");
let mayonesa = prompt("Quiere mayonesa (S/N): ");
let mostaza = prompt("Quiere mostaza (S/N): ");

let total_base = 0;
let total_pan = 0;
let total_add = 0;
let total = 0;

function sandwiches(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
  switch (base) {
    case "pollo":
      total_base = total_base + 150;
      break;
    case "carne":
      total_base = total_base + 200;
      break;
    case "veggie":
      total_base = total_base + 100;
      break;
  }

  switch (pan) {
    case "blanco":
      total_pan = total_pan + 50;
      break;
    case "negro":
      total_pan = total_pan + 60;
      break;
    case "sinGluten":
      total_pan = total_pan + 75;
      break;
  }

  queso === "S" ? (total_add = total_add + 20) : total_add;
  tomate === "S" ? (total_add = total_add + 15) : total_add;
  lechuga === "S" ? (total_add = total_add + 10) : total_add;
  cebolla === "S" ? (total_add = total_add + 15) : total_add;
  mayonesa === "S" ? (total_add = total_add + 5) : total_add;
  mostaza === "S" ? (total_add = total_add + 5) : total_add;

  total = total_base + total_pan + total_add;

  return total;
}

sandwiches(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza);

console.log("El total es: " + total);

// ********  EXTRA BONUS  ********

// ********  ¿Cuál es el número secreto?  ********

/*
Creá una función que reciba un parámetro numérico y verifique si el mismo es el
número secreto. El número secreto deberá ser seleccionado de manera random de
entre 1 y 10 —investigá qué hace la función Math.random()—. En caso de ser correcto,
retorna un mensaje felicitando al usuario y, en caso de que no acierte, retorna un
mensaje de aliento junto con el número ingresado y el secreto.
*/

let numElegido = prompt("Adivina que numero estoy pensando, del 1 al 10?: ");
let numAleatorio = Math.floor(Math.random() * 10) + 1;

function adivinarNumero() {
  if (numAleatorio == numElegido) {
    console.log("Felicitaciones,ese era!");
  } else {
    console.log(`Lo siento, el número es ${numAleatorio}`);
  }
}
adivinarNumero();

// ********  abrirParacaidas()  ********

/*
Crea una función llamada abrirParacaidas() que recibe dos parámetros: velocidad y
altura. La función deberá decirnos si el paracaídas debe abrirse teniendo en cuenta lo
siguiente:
● La velocidad debe ser menor a 1000 km/h.
● La altura debe ser mayor o igual a 2000 m y menor a 3000 m.
*/

let abrirParacaidas = (velocidad, altura) => {
  if (velocidad < 1000 && 2000 <= altura < 3000) {
    console.log("El paracaídas debe abrirse");
  }
};
abrirParacaidas(1500, 3500);

// ********  Estructura switch  ********

// ********  Traductor condicional  ********

/*
Usando la estructura switch, crea un programa en el que si un usuario ingresa "casa",
"perro", "pelota", "árbol" o "genio", nos devuelva la misma palabra traducida al idioma
inglés.
En caso de que la palabra sea distinta a la esperada, mostrarle un mensaje que le
informe que la palabra ingresada es incorrecta.
*/

let palabra = prompt(
  'Ingresá una de estas palabras: "casa", "perro", "pelota", "árbol" o "genio": '
);

let traductor = () => {
  switch (palabra) {
    case "casa":
      console.log("house");
      break;
    case "perro":
      console.log("dog");
      break;
    case "pelota":
      console.log("ball");
      break;
    case "árbol":
      console.log("tree");
      break;
    case "genio":
      console.log("genius");
      break;
    default:
      console.log("La palabra ingresada es incorrecta.");
  }
};

traductor();

// ********  Valoración de películas  ********

/*
Usando la estructura switch, pedirle al usuario que valore la película que acaba de ver
según la siguiente escala:
● Muy mala.
● Mala.
● Mediocre.
● Buena.
● Muy buena.
Acompaña cada valoración con un mensaje que indique si te lamentás o te alegrás
por su valoración.
Por ejemplo: "Calificaste la película como Muy Mala. Lo lamentamos mucho.".
En caso de que ingresara un valor distinto, mostrarle el mensaje: "Ingresaste un valor
inválido".
Cuando el usuario haya valorado la película, agradecerle su visita.
*/

let valor = prompt("Califica la película: ");

let valorarPelicula = () => {
  switch (valor) {
    case "Muy mala":
      console.log(
        "Calificaste la película como Muy mala. Lo lamentamos mucho."
      );
      break;
    case "Mala":
      console.log("Calificaste la película como Mala. Lo lamentamos mucho.");
      break;
    case "Mediocre":
      console.log(
        "Calificaste la película como Mediocre. Vamos a tratar de hacerlo mejor la próxima vez."
      );
      break;
    case "Buena":
      console.log("Calificaste la película como Buena. Gracias.");
      break;
    case "Muy buena":
      console.log(
        "Calificaste la película como Muy buena. Nos alegramos mucho que te haya gustado."
      );
      break;
    default:
      console.log("Ingresaste un valor inválido");
      break;
  }
};
valorarPelicula();
