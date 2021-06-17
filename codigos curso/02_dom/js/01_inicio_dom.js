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

let buttonForm = document.querySelector("#botonMostrar");
let buttonGuardar = document.querySelector("#botonGuardar");
buttonForm.addEventListener("click", (evento) => {
  //console.log(evento.target);
  let nombre = document.querySelector("#exampleInputNombre1").value;
  let apellido = document.querySelector("#exampleInputApellido1").value;
  let edad = document.querySelector("#exampleInputEdad1").value;
  let profesionSelect = document.querySelector("select");
  let sexo = document.querySelector("input[name='sexo_grupo']:checked").value;

  if (nombre.length > 0 && apellido.length > 0) {
    document.querySelector("#nombrePerfil").textContent = nombre;
    document.querySelector("#apellidoPerfil").textContent = apellido;
    document.querySelector("#edadPerfil").textContent = edad;
    document.querySelector("#profesionPerfil").textContent =
      profesionSelect.options[profesionSelect.selectedIndex].value;
    document.querySelector("#sexoPerfil").textContent = sexo;
  } else {
    alert('Faltan datos')
  }
  /*
  let apellido = document.querySelector("#exampleInputApellido1");
  let edad = document.querySelector("#exampleInputEdad1");
  if (nombre.value.length > 0 && apellido.value.length > 0) {
    alert(
      `Nombre: ${nombre.value}\nApellido: ${apellido.value}\nEdad: ${edad.value}`
    );
  } else {
    alert("falta algun dato");
  }*/

  /* let check = document.querySelector("input[type='checkbox']");
  let select = document.querySelector("select");
  let grupo = document.querySelector("input[name='sexo_grupo']:checked");

  //console.log(select.selectedOptions[0]);
  console.log(grupo);
  console.log(select.options[select.selectedIndex].value);
  console.log(check.checked);
  console.log(grupo.value); */
});

buttonGuardar.addEventListener('click',()=>{
  //console.log('pulsado guardar');
  let nombre = document.querySelector("#exampleInputNombre1").value;
  let contenidoUsuarios = document.querySelector('#contenidoUsuarios');
  contenidoUsuarios.innerHTML = `${contenidoUsuarios.innerHTML} <h3>${nombre}</h3>`
  //console.log(contenidoUsuarios);
  
})



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

/*function metodoCambioSelect() {
  let select = document.querySelector("select");
  console.log(select.options[select.selectedIndex].value);
}*/

document.querySelector("select").addEventListener("change", (event) => {
  console.log(event.target.options[event.target.selectedIndex].value);
});

document
  .querySelector("input[type='checkbox']")
  .addEventListener("change", (event) => {
    //console.log(event.target.checked);
    let seleccion = event.target.checked;
    if (!seleccion) {
      document.querySelector("#exampleInputNombre1").innerHTML = " ";
    }
  });
