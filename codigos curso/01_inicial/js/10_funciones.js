// funtion nombre (parametros){
//}

function funcionNormal() {
  console.log("Ejecucion normal");
}

function funcionParametros(parametroUno, parametroDos) {
  console.log(`${parametroUno} ${parametroDos}`);
}

function funcionParametrosAdicionales() {
  console.log("Ejecucion adicional");
  if (arguments.length > 0) {
    arguments[1];
    console.log("Hay cosas");
  } else {
    console.log("No me has pasado nada");
  }
  //console.log(arguments);
}

function funcionParametrosDefecto(
  paramentroUno = "ejemplo",
  parametroDos = "dos"
) {
  console.log(paramentroUno + " " + parametroDos);
}

let funcionSuma = function (numeroUno, numeroDos) {
  console.log(`${numeroUno + numeroDos}`);
};

let funcionDivision = (num1, num2) => Number(num1) / Number(num2);

// (param) => { ejecucion}

funcionNormal();
funcionParametros("Hola", 5);
//funcionParametrosAdicionales("cosas", ["mas cosas", 2, 3, 45, true]);
funcionParametrosAdicionales();
funcionParametrosDefecto("cosa pasada");
funcionSuma(4, 6);
console.log(funcionDivision(4, 2));
