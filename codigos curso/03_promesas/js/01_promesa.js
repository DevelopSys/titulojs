let numero = 5;
let promesa = new Promise((resolve, reject) => {
  // lo que se ejecuta
  // proceso que modifica el numero segun movidas
  // esto tarda
  if (numero > 0) {
    // (data)=>{console.log(data);}
    resolve(numero);
  } else {
    reject("error en el numero");
    //throw new Error('erawsasdasdasdasd')
  }
});

promesa
  .then(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  )
