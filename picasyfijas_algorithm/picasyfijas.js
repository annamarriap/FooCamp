//Genera número aleatorio
let numeroSecreto = '';
    // Ciclo para generar un número de 4 cifras
    while (numeroSecreto.length < 4) {
      const numeroAleatorio = Math.round(Math.random() * 9).toString();
      //The JavaScript indexOf() method is the best way to find out if one string exists inside of another | Valida si es núemro random existe ya en el numeroAleatorio
      if (numeroSecreto.indexOf(numeroAleatorio) === -1) {
        numeroSecreto += numeroAleatorio;
      }
    }   
console.log(numeroSecreto);

//Declara e inicializa variable
let intento = 0; 

//Función juego picas y fijas
function picasyfijas () {

  intento = prompt(`💭\n¿Cuantas oportunidades quieres tener para adivinar el número?`);
  intento = intento.toString();
  console.log(`Número de intentos ${intento}`);

    while (intento > 0) {
      //Se inicializan las variables en 0 para la cantidad de picas y fijas
      let picas = 0;
      let fijas = 0;

      // Asigna el número de intentos del juego
      numero = prompt(`🤔\n¿Cuál es el número secreto?`);
      console.log(numero);
      console.log(numero.length);
      
      //Si el número de usuario y número secreto es igual, el usuario gana y se notifica.
      if (numero.length > numeroSecreto.length || numero.length < numeroSecreto.length || typeof numero !== 'number') {

        numero = prompt('Debes escribir un número de 4 digitos');
        console.log(numero);
        console.log(numero.length);
      } else {
        if (numero === numeroSecreto) {
          alert(`🎉 \nFelicitaciones, adivinaste el número era \n ${numeroSecreto}`);
          console.log(`Ganaste ${intentos} intento`);
          intento === 0;
          break;
  
        } else {
        // Determina el número de fijas comparando casa digito en la misma posición.
        for (let i = 0; i < numeroSecreto.length; i++){
          if(numero[i] === numeroSecreto[i]){
              fijas++
          }
        // Dentro del mismo ciclo se determina el número de picas iterando cada digito del número secreto con cada número de número de usuario
          for (let p = 0; p < numero.length; p++){
            if(numeroSecreto[i] === numero[p]){
                picas++
              }
            }
        }
          // Se reduce la cantidad de intentos en 1.
          intento = intento - 1;
          // Si la cantidad de intento es 0, se notifica al usuario que el juego finaliza
        if(intento === 0){
            alert(`-> El número de fijas es ${fijas} \n-> El número de picas es  ${picas}.\n😭 Fallaste.\nEl número era ${numeroSecreto}`);            
        } else {
          // Notifica al usuario la cantidad de picas y fijas del número que ingreso
            alert(`-> El número de fijas es ${fijas} \n-> El número de picas es  ${picas}\n\n Sigue intentando.`);
            console.log(`número de intentos que quedan es134 ${intento}`);
        }
  
        }

      }      

    }
}

// Ejecuta función
picasyfijas();


