// Date
let fechaActual = new Date();
console.log(fechaActual.getDate()); // dia del mes
console.log(fechaActual.getDay()); // dia de la semana
console.log(fechaActual.getMonth() + 1); // mes
console.log(fechaActual.getHours()); // hora
console.log(fechaActual.getMinutes()); // minutos
console.log(fechaActual.getSeconds()); // segundos
console.log(fechaActual.getMilliseconds()); // milisegundos
console.log(fechaActual.getTime()); // timestamp
fechaActual.setFullYear(2019);
console.log(fechaActual);

// fecha pasada que sea el dia de hoy menos 4 meses
let fechaPasada = new Date(2010, fechaActual.getMonth - 4, 8);
fechaPasada.getTime();
console.log(`Fecha pasada: ${fechaPasada}`);

console.log("Fechas con moment");
console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
console.log(moment().subtract(5, "days").calendar());

let frase = "hola esto es un ejemplo de frase para tratarla con js";
frase = frase.trim();
console.log(frase.substring(0, 6));
console.log(frase.substr(8, 10));
console.log(frase.sub());
console.log(frase.startsWith("r"));
console.log(frase.split(" ")[1].startsWith("e"));
console.log(frase.slice(1, 6));
console.log(frase.search("a"));
//console.log(frase.replace(" ",""));
for (let index = 0; index < frase.length; index++) {
    console.log(frase.charAt(index));
    
}
