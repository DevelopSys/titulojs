/*
Crea un programa que pida por prompt al usuario 4 variables que representen 
los lados de un cuadrado. Una vez introducido todas se mostrar una alerta 
por pantalla indicando si es correcto el valor de los lados introducidos. 
En caso de ser correcto que también aparezca el área de un cuadrado (lado * lado)
*/

/*let ladoUno = Number(prompt("lado uno"));
let ladoDos = Number(prompt("lado dos"));
let ladoTres = Number(prompt("lado tres"));
let ladoCuatro = Number(prompt("lado cuatros"));

if (
  !isNaN(ladoUno) &&
  !isNaN(ladoDos) &&
  !isNaN(ladoTres) &&
  !isNaN(ladoCuatro)
) {
  let area = ladoUno * ladoDos;
  alert(`El area del cuadraro es ${area}`);
} else {
  alert("algun dato no es correcto");
}

let numeroEv = Number(prompt('introduce numero'));

if(!isNaN(numeroEv)){

    if (numeroEv %2 == 0){
        alert('es par')
    } else{
        alert('es impar')
    }

}

let nombre = prompt("introduce un nombre");
let letra = prompt("introduce una letra");

if (nombre.indexOf(letra) != -1) {
  let contador = 0;
  for (let index = 0; index < nombre.length; index++) {
    if (nombre.charAt(index) == letra) {
      contador++;
    }
  }

  alert(`la letra está y tiene ${nombre.length} y hay ${contador} ${letra} `);
}

let numeroUno = Number(prompt("intro numero"));
let numeroDos = Number(prompt("intro numero"));

if ((!isNaN(numeroDos) && numeroDos>0) && ( !isNaN(numeroUno) && numeroUno>0)){
    if (numeroUno>numeroDos){
        alert('el uno es mas grande')
    } else if (numeroDos>numeroUno){
        alert('el dos es mas grande')
    } else {
        alert('son iguales')
    }
} else {
    alert('fallo en los datos')
}*/
/*
let fechaActual = new Date();
let dias = ['Domingo','Lunes','Martes','Miercoles','Jueves', 'Viernes','Sabado']
alert(`Buenos dias hoy es ${dias[fechaActual.getDay()]} ${fechaActual.getDate()} ${fechaActual.getHours()}:${fechaActual.getMinutes()} `)


let fechaActual = new Date();
let fechaAnterior = new Date(2020,0,1);

let diasTrancurridos = (fechaActual.getTime()-fechaAnterior.getTime())/86400000
console.log(diasTrancurridos);


let numeroIncial = 100;

do {
  alert(`${numeroIncial}`);
  numeroIncial--;
} while (numeroIncial > 0);


let numeroInicial = Number(prompt('dime numero inicial'))
let numeroFinal = Number(prompt('dime numero finall'))

for (let index = numeroInicial; index <= array.numeroFinal; index++) {
    console.log(index); 
}


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let contador = 0;
while (contador < numeros.length) {
  console.log(numeros[contador]);
  contador++;
}

for (let index = 0; index < numeros.length; index++) {
  console.log(numeros[index]);
}

numeros.forEach((element) => console.log(element));

numeros.forEach((element) => console.log(element + 1));

let media = 0;
numeros.forEach((element) => {
  media += element;
  console.log(element);
});

console.log(media/numeros.length) */

let frase = prompt("introduce una frase que quieras analizar");

if (frase.length < 10) {
  frase = prompt("introduce una frase que quieras analizar");
} else {
  let patron = frase.replace(".", " ").replace(",", " ");
  let palabras = patron.split(" ");
  let contador = 0;
  let letras = palabras.forEach((item) => {
    contador += item.length;
  });
  let frases = frase.split(".").length;
  console.log(palabras.length);
  console.log(contador);
  console.log(frases);
}
