let url = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal";
let urlSpain =
  "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=France";
let contenedorCartas = document.querySelector(".card-group");
fetch(urlSpain)
  .then(
    (result) => result.json(),
    (err) => console.log(err)
  )
  .then(
    (data) => {
      //console.log(data);
      let equipos = data.teams;
      equipos.forEach((element) => {
        /*
        <div class="card">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
            */

        // agregarla al nodo card-group

        let descricion = element.strDescriptionES;
        if (descricion == null) {
          descricion = "No disponible";
        }

        contenedorCartas.innerHTML += `<div class="card">
        <img src="${element.strTeamBadge}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.strAlternate}</h5>
          <p class="card-text">
            ${descricion}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>`;
      });
    },
    (err) => console.log("error en el paso a json")
  )
  .catch((err) => console.log("error general"));
