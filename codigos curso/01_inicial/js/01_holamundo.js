// comentario de una linea
/* 
comentario multiple
*/
// console.time("iniciojs");
// PROMESAS
// console.timeEnd("iniciojs")
// variables
// tipo(acceso) nombre = valor
const NOMBRE = "Borja";
console.log("Mi nombre es " + NOMBRE);
var edad = 19;
edad = 20;
console.log("Mi edad es: " + edad);
let experiencia = true;

let nombreString = "nombre";
let edadNumber = 13;
let edadNumberDecimal = 14.4;
let experienciaBoolean = false;
let cualquierNull = null;
let cosaSinDefinir = undefined;
let cosaColeccion = ["uno", "dos", 1, true];
let cosaColeccionMultiple = [
  [1, 3],
  [true, false],
  [3.5, 7.9],
];
let variableObjeto = {
  nombre: "Borja",
  edad: 19,
  experiencia: true,
  hobbies: ["futbol", "cine"],
};
let fecha = new Date()
let palabraObject = new String("nombre objeto");

// console.log("Mi nombre es :"+NOMBRE+" y tengo "+edad+" y tengo experiencia: "+experiencia)
// console.log(`Mi nombre es: ${NOMBRE} y tengo ${edad} años y mi exèriencia es ${experiencia}`);
// console.log("Mi nombre es %s y tengo %d y mi eperiencia es %o",NOMBRE,edad,experiencia);

console.log(typeof cosaSinDefinir);

