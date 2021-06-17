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
    alert("Faltan datos");
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

let id = 1;

buttonGuardar.addEventListener("click", () => {
  //console.log('pulsado guardar');
  let nombre = document.querySelector("#exampleInputNombre1").value;
  let apellido = document.querySelector("#exampleInputApellido1").value;
  let edad = document.querySelector("#exampleInputEdad1").value;
  let experiencia = document.querySelector("#exampleExperiencia1").checked;
  let cuerpo = document.querySelector("tbody");
  let fila = document.createElement("tr");

  fila.innerHTML = `<th scope="row">${id}</th>
<td>${nombre}</td>
<td>${apellido}</td>
<td>${edad}</td>`;

  experiencia
    ? fila.classList.add("table-success")
    : fila.classList.add("table-danger");

  cuerpo.appendChild(fila);

  /*let colId = document.createElement("th");
  colId.scope = "row";
  colId.textContent = id;
  let colNombre = document.createElement("td");
  colNombre.textContent = nombre;
  let colApellido = document.createElement("td");
  colApellido.textContent = apellido;
  let colEdad = document.createElement("td");
  colEdad.textContent = edad;

  fila.appendChild(colId);
  fila.appendChild(colNombre);
  fila.appendChild(colApellido);
  fila.appendChild(colEdad);
  cuerpo.appendChild(fila);*/

  /*let nodo = document.createElement("li");
  nodo.textContent = `${nombre} ${apellido} ${edad}`;
  nodo.value = id;
  nodo.className = 'list-group-item'
  if (experiencia) {
    //nodo.classList.add("con-experiencia");
    nodo.className = "con-experiencia"
  } else {
    nodo.classList.add("sin-experiencia");
  }
  lista.appendChild(nodo);*/

  id++;

  /*let contenidoUsuarios = document.querySelector('#contenidoUsuarios');
  let nodoInsertar = document.createElement('h3')
  nodoInsertar.textContent = nombre
  nodoInsertar.id = "usuario"
  contenidoUsuarios.appendChild(nodoInsertar)*/
  //contenidoUsuarios.innerHTML = `${contenidoUsuarios.innerHTML} <h3 id='usuario'>${nombre}</h3>`
  //let nodoUser = document.querySelector('#usuario').textContent = "otra cosa"
  //console.log(contenidoUsuarios);
});

document.querySelector("#botonBorrar").addEventListener("click", () => {
  let nodos = document.querySelectorAll("table tbody tr.table-danger");
  nodos.forEach((element) => {
    document.querySelector("tbody").removeChild(element);
  });
  //console.log(tabla);
  //document.removeChild(tabla)
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
