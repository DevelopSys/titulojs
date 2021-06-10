let objeto = {
  nombre: "Borja",
  apellido: "Martin",
  edad: 17,
  hobbies: ["cine", "deporte", "musica"],
  hijos: [
    { nombre: "celia", edad: 4 },
    { nombre: "claudia", edad: 1 },
    { nombre: "jose", edad: 15 },
    { nombre: "asd", edad: 4 },
    { nombre: "fg", edad: 12 },
    { nombre: "hfg", edad: 14 },
    { nombre: "xcv", edad: 5 },
    { nombre: "iyu", edad: 15 },
    { nombre: "wer", edad: 7 },
    { nombre: "hjtyj", edad: 10 },
  ],
};

objeto["equipo"] = "Barcelona";
objeto["coches"] = [
  { modelo: "Ford", marca: "focus" },
  { modelo: "Ford", marca: "focus" },
  { modelo: "Ford", marca: "focus" },
];
console.log(objeto);
//console.log(objeto.hijos[0]['nombre']);
/*console.log(objeto.nombre);
objeto.hobbies.forEach((element) => {
  console.log(element);
});*/
/*objeto.hijos.forEach(element => {
    console.log(element.nombre);
});*/
//console.log(objeto.hijos.filter((element) => element.edad > 7));
