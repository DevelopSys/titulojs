class Persona {
  // propiedades
  nombre;
  apellido;
  edad;

  // constructor
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  // funciones
  mostrarDatos() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Apellido: ${this.apellido}`);
      console.log(`Edad: ${this.edad}`);
  }

  set setNombre(nombre){
    this.nombre = nombre
  }

  get getNombre(){
    return this.nombre;
  }

}

class Carta{

  numeros;
  constructor(numeros){
    this.numeros = numeros;
  }

}

//let persona = new Persona("Borja", "Martin", 18);
//console.log(persona.getNombre());
//persona.setNombre= 'Pedro'
//console.log(persona);


