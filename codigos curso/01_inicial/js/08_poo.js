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
      return 4;
  }

}

let persona = new Persona("Borja", "Martin", 18);

