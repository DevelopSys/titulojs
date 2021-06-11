
let palos = ["C", "D", "T", "P"];
let baraja = [];

// 1-10 J(11)Q(12)K(13)
// Trebol Diamante Corazon Picas
for (let index = 0; index < palos.length; index++) {
  let carta = "";

  for (let index2 = 1; index2 < 14; index2++) {
    if (index2 == 11) {
      carta = "J" + palos[index];
      //console.log("J");
    } else if (index2 == 12) {
      carta = "Q" + palos[index];
      //console.log("Q");
    } else if (index2 == 13) {
      carta = "K" + palos[index];
      //console.log("K");
    } else {
      carta = index2 + palos[index];
      //console.log(index2);
    }
    //console.log(carta);
    baraja.push(new Carta(carta));
  }
}

baraja = _.shuffle(baraja);
console.log(baraja);
console.log(baraja[Math.round(Math.random()*51)])

//let persona2 = new Persona('Borja',"Otro",23);
//console.log(persona2.getNombre);

