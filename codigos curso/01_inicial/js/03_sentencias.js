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
nota = 6
while (nota<10) {
    alert(`nota es ${nota}`)
    nota++;
}

