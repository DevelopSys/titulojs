console.log("Inicio busquedas js");
// let elemento = document.getElementsByTagName("select");
// let elemento =  document.getElementById('exampleInputProfesion')
// let elemento =  document.getElementsByClassName('form-control')
/*for (let index = 0; index < elemento.length; index++) {
    console.log(elemento[index]);
}*/

//let elemento = document.querySelectorAll("input");
let elemento = document.querySelector(".form-control");
/*elemento.forEach(element => {
    console.log(element.value);
});*/

let buttonForm = document.querySelector("button");
buttonForm.addEventListener("click", (evento) => {
  //console.log(evento.target);
  let nombre = document.querySelector("#exampleInputNombre1");
  let apellido = document.querySelector("#exampleInputApellido1");
  let edad = document.querySelector("#exampleInputEdad1");
  if (nombre.value.length > 0 && apellido.value.length > 0) {
    alert(
      `Nombre: ${nombre.value}\nApellido: ${apellido.value}\nEdad: ${edad.value}`
    );
  } else {
    alert("falta algun dato");
  }
});

document
  .querySelector("#exampleInputNombre1")
  .addEventListener("keypress", (event) => {
    console.log(event);
  });

let palabra = "";
/*function inputTeclaPulsada(nombre) {
   
    //palabra = evento.key +palabra
    console.log(nombre);
}*/

/*function botonFormPulsado() {
    let nombre = document.querySelector('#exampleInputNombre1') 
    let apellido = document.querySelector('#exampleInputApellido1')
    let edad = document.querySelector('#exampleInputEdad1')
    if (nombre.length > 0 && apellido.length > 0){
        alert(`Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`)
    } else {
        alert('falta algun dato')
    }
}*/
