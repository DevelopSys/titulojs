// if
let nota = 6;
/*
if (nota < 0 || nota > 10) {
  alert("la nota introducida no es valida");
} else if (nota > 5) {
  if (nota < 7) {
    // 5 -7
    alert("has aprobado bien");
  } else if (nota < 9) {
    // 7-9
    alert("has  aprobado  muy bien");
  } else if (nota < 10) {
    // 9-10
    alert("has aprobado fenomenal");
  } else {
    // 10
    alert("has aprobado con matricula");
  }
} else {
  alert("has suspendido");
}*/

// condicion ? condicion_true : condicion_false

// nota > 5 ? alert("mayor que 5") : alert("suspenso");

// pedir un numero por teclado
// generar un numero aleatorio

// continua pidiento numeros por prompt hasta que acierte el numero
// generado.
// cuando se acierte aparecerá un alert diciendo el número de intentos
// utilizado
/*nota = 6
while (nota<10) {
    alert(`nota es ${nota}`)
    nota++;
}*/

/*
let aleatorio = Math.round(Math.random() * 11);
let intentos=1;
let numero = Number(prompt('Introduce numero'));


while (numero != aleatorio) {
    intentos++
    numero = Number(prompt('Introduce numero'));   
}

alert(`Numero acertado\nIntentos utilizados ${intentos}`)*/

/*do {
    
} while (condition);*/

//console.log("El aleatorio generado es: " + aleatorio);

let coleccionPalabras = [
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  123,
  123,
  true,
];
/*for (let index = 0; index < coleccionPalabras.length; index++) {
    console.log(coleccionPalabras[index]);
    console.log(`\t${typeof coleccionPalabras[index]}`);
    //if (typeof coleccionPalabras[index]== undefined)
}*/

/*coleccionPalabras.forEach((item, posicion, array) => {
  console.log(item);
  console.log(`\t${posicion}`);
  console.log(`\t ${typeof item}`);
  console.log(`\t\t ${array}`);
});*/

// for in -->
// for of --> el de java. se obtiene el elemento de cada una de las posiciones

for (const key in coleccionPalabras) {
  //const element = object[key];
  if (key % 2 == 0) {
    console.log(`${key}`);
    console.log(`\t ${coleccionPalabras[key]}`);
  }
}

/*for (const iterator of coleccionPalabras) {
    console.log(iterator);
}*/


