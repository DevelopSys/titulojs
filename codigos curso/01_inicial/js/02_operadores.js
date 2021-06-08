// operadores de asignacion
let numeroUno = 6;
let numeroDos = 7;
// operadores aritmeticos

let suma = 5 + 8;
let resta = 5 - 8;
let multi = 5 * 8;
let divistion = 5 / 8;
let resto = 5 % 8;

resta -= 4;
suma += 6;
multi *= 2;
divistion /= 4;
resto %= 2;
console.log(`La suma total es ${suma} de tipo ${typeof suma}`);
console.log(`La resta total es ${resta} ${typeof resta}`);
console.log(`La multiplicacion total es ${multi} ${typeof multi}`);
console.log(`La division total es ${divistion} ${typeof divistion}`);
console.log(`El resto total es ${resto} ${typeof resto}`);

//alert(`Esto es un ejemplo de alert. el resultado de la suma es: ${suma}`)
//let nombre = prompt("Dime como te llamas");
//console.log(`Mi nombre es: ${nombre}`);
//alert(`El nombre introducido es ${nombre}`);
//let nombreUsuario = prompt("Introduce nombre de usuario");
//let passUsuario = prompt("Introduce contraseña");
// simular un login. Pedir por promnt user - pass. y comprobar si el user es admin y el pass es admin
/*if (nombreUsuario == "admin" && passUsuario == "admin") {
  alert("login correcto");
} else {
  alert("login incorrecto");
} el */

// se piden 2 numeros por promnt
// se muestra en 1 alert todos los
// resultados de los numeros (simpre y cuando ambos sean positivos, y ademas los dos datos introducidos sean numeros)

/*let numeroUno = Number(prompt("Introduce numero uno"));
let numeroDos = Number(prompt("Introduce numero dos"));

if (numeroUno > 0 && !isNaN(numeroUno) && numeroDos > 0 && !isNaN(numeroDos)) {
  alert(
    `la suma es ${numeroUno + numeroDos}\nla resta es ${
      numeroUno - numeroDos
    }\nla multo es ${numeroUno * numeroDos}`
  );
} else {
  alert("algundo de los datos no es correcto");
}*/

numeroUno = 6;
numeroDos = 6;
let palabraUno = "Hola";
let palabraDos = "hola";
let comparacion = numeroUno != numeroDos;
let comparacionConTipos = numeroUno === numeroDos;
console.log(comparacionConTipos);
let comparacionPalabras = palabraDos === palabraUno;

// arrays operadores
let coleccionPalabras = ["uno", "dos", "tres", "cuatro", "cinco", "seis"];
console.log(coleccionPalabras[1]);


