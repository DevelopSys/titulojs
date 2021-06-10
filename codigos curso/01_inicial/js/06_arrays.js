let coleccionNumeros = [1, 2, 3, 4, 5, 6];
let coleccionCosas = ["uno", 1, true, 3.4];

//coleccionCosas.forEach(element => console.log(element) );
//console.log(coleccionCosas[0]);
/*
coleccionCosas[0] = "otro valor";

console.log(coleccionCosas);

console.log("Añadiendo cosas nuevas");
coleccionCosas[4] = "nuevo valor";

console.log(coleccionCosas);

coleccionNumeros[6] = true;

console.log(coleccionNumeros);
*/

/*et equipos = [
  "Atleti",
  "Madrid",
  "Barsa",
  "Sevilla",
  "Getafe",
  "Alcorcon",
  "Villareal",
  "Alaves",
  "Eibar",
  "Valencia",
  "Leganes",
];

let filtro = [];*/

/*equipos.push("Villareal", "Alaves", "Eibar");
console.log(equipos);
console.log(`equipo eliminado: ${equipos.pop()}`);
equipos.unshift("Valencia", "Leganes");
console.log(equipos);
console.log(`Equipo eliminado ${equipos.shift()}`);
console.log(equipos);*/
// obtengais un array con los queipos que tienen una B o una l
// y los saqueis por consola

/*equipos.forEach((element) => {
  if (element.indexOf("B") != -1 || element.indexOf("l") != -1) {
    filtro.push(element);
  }
});*/

/* filtro = equipos.filter(
  (element) => element.indexOf("B") != -1 || element.indexOf("l") != -1
);

console.log(filtro); */
let equipos = [
  ["Atleti", 56],
  ["Madrid", 54],
  ["Barsa", 53],
  ["Sevilla", 52],
  ["Getafe", 43],
  ["Alcorcon", 67],
  ["Villareal", 13],
  ["Alaves", 23],
  ["Eibar", 59],
  ["Valencia", 98],
  ["Leganes", 51],
];

/*for (let i = 0; i < equipos.length; i++) {
    // 

    equipo = equipos[i];
    if (equipo[0] == 'Madrid' || equipo[0] == "Barsa"){
        console.log(equipo[1]);
    }
    
}*/

let numeros = [1, 2, 3, 22, 4, 11, 5, 41];
numeros.sort(); // 1,11,2,22,3,4,41,5
numeros.sort((itemA, itemB) => {
  if (itemA > itemB) {
    return 1;
  } else if (itemB > itemA) {
    return -1;
  } else {
    return 0;
  }
});
//console.log(numeros);
//equipos.sort();

// 1 - Barcelona 98
// 2 - Madrid 78

equipos.sort((equipoA, equipoB) => {
  if (equipoA[1] > equipoB[1]) {
    return -1;
  } else if (equipoB[1] > equipoA[1]) {
    return 1;
  } else {
    return 0;
  }
});
equipos.forEach((element, index) => {
    console.log(`${index+1} - ${element[0]} ${element[1]}`);
});

