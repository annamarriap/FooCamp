//------------------------------------------------------
// preguntarPorDisponibilidad a don pedrito
//------------------------------------------------------
let articuloQueTieneDonPedrito = "";
function preguntarPorDisponibilidadADonPedrito() {
  const numeroAleatorio = Math.floor(Math.random() * 3);
  if (numeroAleatorio === 0) {
    articuloQueTieneDonPedrito = "principal";
  } else if (numeroAleatorio === 1) {
    articuloQueTieneDonPedrito = "sustituto";
  } else {
    articuloQueTieneDonPedrito = "no lo tiene";
  }
}

//------------------------------------------------------

//-------------------------------------------------------
// Comprar articulo
//-------------------------------------------------------
function comprarArticulo(principal, sustituto) {
  if (articuloQueTieneDonPedrito === "principal") {
    console.log("compramos " + principal);
  } else if (articuloQueTieneDonPedrito === "sustituto") {
    console.log("compramos " + sustituto);
  } else {
    console.log("no compramos nada");
  }
}

//-------------------------------------------------------

let articulosPrincipales = ["🍖", "🍎", "🍓", "🍉"];
let articulosSustitutos = ["🍗", "", "🍒", "🍈"];
let articuloActual = 0;
let articulosTotales = articulosPrincipales.length;
while (articuloActual < articulosTotales) {
  preguntarPorDisponibilidadADonPedrito();
  comprarArticulo(
    articulosPrincipales[articuloActual],
    articulosSustitutos[articuloActual]
  );
  articuloActual += 1;
}
// pagamos
// tomamos nuestros articulos
// nos vamos
