let articuloQueTieneDonPedrito = "";
let articulosPrincipales = ["🍖", "🍎", "🍓", "🍉"];
let articulosSustitutos = ["🍗", "", "🍒", "🍈"];
let articuloActual = 0;
let articulosTotales = articulosPrincipales.length;
while (articuloActual < articulosTotales) {
  const numeroAleatorio = Math.floor(Math.random() * 3);
  if (numeroAleatorio === 0) {
    articuloQueTieneDonPedrito = "principal";
  } else if (numeroAleatorio === 1) {
    articuloQueTieneDonPedrito = "sustituto";
  } else {
    articuloQueTieneDonPedrito = "no lo tiene";
  }

  if (articuloQueTieneDonPedrito === "principal") {
    console.log("compramos " + articulosPrincipales[articuloActual]);
  } else if (articuloQueTieneDonPedrito === "sustituto") {
    console.log("compramos " + articulosSustitutos[articuloActual]);
  } else {
    console.log("no compramos nada");
  }
  articuloActual += 1;
}
