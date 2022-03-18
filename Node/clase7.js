// ********  Control de edad para ingresar al bar  ********


let edad = 19 //(el número es a modo de ejemplo, podés cambiarlo o crear otras para tener varias pruebas)

if (edad % 2 != 0) {
    console.log("¿Sabías que tu edad es impar?")
}

if (edad < 0) {
    console.log("Error, edad inválida. Por favor ingrese un número válido.");
}else if(edad < 18) {
    console.log("No puede pasar al bar.")
} else if (edad < 21){
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
} else {
    console.log("Bienvenido, felicidades por haber llegado a la mayoría de edad.")
    console.log("Puede pasar al bar y tomar alcohol.")
}

// ********  totalAPagar()  ********

let vehiculo = "moto";
let litrosConsumidos = Number;

function totalAPagar(vehiculo,  litrosConsumidos) {
    switch (vehiculo) {
        case 'coche':
            litrosConsumidos = 86;
            break;
        case 'moto':
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

const prompt = require("prompt-sync")({ sigint: true });

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


function sandwiches(
  base,
  pan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) {
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

sandwiches(base,pan,queso,tomate,lechuga,cebolla,mayonesa,mostaza)

console.log("El total es: " + total);

